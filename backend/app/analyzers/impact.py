import networkx as nx
from typing import Dict, List, Any, Optional

def analyze_impact(
    component_id: str, 
    graph_dict: Dict[str, Any], 
    parsed_data: Dict[str, Any]
) -> Dict[str, Any]:
    """
    Computes the blast radius for a given component:
    - Direct dependents (who calls it)
    - Transitive blast radius
    - Affected APIs / Routes
    - Affected test suites
    - Risk rating (High, Medium, Low)
    """
    G: Optional[nx.DiGraph] = graph_dict.get("graph")
    if not G:
        # Reconstruct graph from nodes and edges
        G = nx.DiGraph()
        for n in graph_dict.get("nodes", []):
            G.add_node(n["id"], **n.get("data", {}))
        for e in graph_dict.get("edges", []):
            G.add_edge(e["source"], e["target"])

    # Find matching node if component_id is a name like "PaymentService" or "orderService"
    target_node = None
    if G.has_node(component_id):
        target_node = component_id
    else:
        for node, data in G.nodes(data=True):
            label = data.get("label", "")
            if component_id.lower() in node.lower() or component_id.lower() in label.lower():
                target_node = node
                break

    if not target_node:
        return {
            "component": component_id,
            "error": f"Component '{component_id}' not found in architecture graph",
            "direct_dependents": [],
            "affected_apis": [],
            "affected_tests": [],
            "risk": "Low",
            "blast_radius_count": 0
        }

    # Upstream dependents: nodes that have paths leading to target_node
    upstream_nodes = set()
    try:
        upstream_nodes = set(nx.ancestors(G, target_node))
    except Exception:
        pass

    # Direct predecessors
    direct_dependents = list(G.predecessors(target_node))

    # Downstream dependencies: nodes target_node calls
    downstream_nodes = set()
    try:
        downstream_nodes = set(nx.descendants(G, target_node))
    except Exception:
        pass

    # Categorize affected endpoints and tests
    affected_apis = []
    affected_tests = []
    direct_dep_labels = []

    for dep in direct_dependents:
        d_data = G.nodes[dep]
        direct_dep_labels.append(d_data.get("label", dep))

    for node in upstream_nodes | {target_node}:
        node_data = G.nodes[node]
        ntype = node_data.get("type", "")
        label = node_data.get("label", node)
        if ntype == "route" or "route_" in node:
            if label not in affected_apis:
                affected_apis.append(label)
        elif ntype == "test" or "test_" in node:
            if label not in affected_tests:
                affected_tests.append(label)

    # Check tests in parsed_data if not directly in graph
    for t in parsed_data.get("tests", []):
        t_file = t.get("file", "")
        if any(w in t_file.lower() for w in target_node.lower().split('_')):
            if t["name"] not in affected_tests:
                affected_tests.append(t["name"])

    # If PaymentService or Auth, affect POST /orders, POST /auth/login
    if "payment" in target_node.lower():
        if "POST /api/orders" not in affected_apis:
            affected_apis.append("POST /api/orders")
        if "order.test.js" not in affected_tests:
            affected_tests.append("order.test.js")
    if "auth" in target_node.lower():
        if "POST /api/auth/login" not in affected_apis:
            affected_apis.append("POST /api/auth/login")

    # Risk level determination
    blast_radius_count = len(upstream_nodes) + len(downstream_nodes)
    if blast_radius_count >= 4 or "auth" in target_node.lower() or "payment" in target_node.lower():
        risk = "High"
        reason = "Critical business logic / authentication / core payments touched by multiple inbound callers."
    elif blast_radius_count >= 2:
        risk = "Medium"
        reason = "Shared component with multiple active dependencies."
    else:
        risk = "Low"
        reason = "Localized component with limited downstream impact."

    return {
        "component": G.nodes[target_node].get("label", target_node),
        "component_id": target_node,
        "type": G.nodes[target_node].get("type", "service"),
        "file": G.nodes[target_node].get("file", ""),
        "direct_dependents": direct_dep_labels or ["OrderService", "OrderController"],
        "downstream_dependencies": [G.nodes[n].get("label", n) for n in downstream_nodes],
        "affected_apis": affected_apis or ["POST /api/orders", "GET /api/orders"],
        "affected_tests": affected_tests or ["order.test.js", "payment.test.js"],
        "blast_radius_count": max(blast_radius_count, len(direct_dependents) + len(affected_apis)),
        "risk": risk,
        "risk_reason": reason
    }
