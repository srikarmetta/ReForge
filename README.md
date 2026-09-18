# ReForge

**Codebase Intelligence & Software Migration Platform**

Understand any codebase. Quantify impact. Migrate to any modern stack with verified parity.

---

## Overview

Software migration and legacy refactoring represent a major barrier for engineering organizations. Enterprises remain locked into obsolete runtimes, unmaintained frameworks, and monolithic architectures because manual rewrites are:
- **Costly & Multi-Year**: Requiring large teams of specialized developers.
- **Prone to Severe Regressions**: Subtle behavioral discrepancies, missing edge cases, and untested side-effects.
- **Knowledge-Deficient**: Original system architects have moved on, leaving undocumented logic and implicit dependencies.

ReForge is an automated software intelligence and codebase modernization platform that solves this dual challenge:
1. **Deep Codebase Intelligence**: Ingests arbitrary codebases (Python, JavaScript, TypeScript, Go, Java), constructs deterministic Abstract Syntax Tree (AST) symbol models, computes directed dependency graphs, performs graph-traversal blast-radius impact analysis, and provides evidence-grounded codebase chat with file-level and line-level citations.
2. **Any-to-Any Migration Pipeline**: Synthesizes architecture plans, generates production-ready target codebases across leading enterprise stacks (Java 21 / Spring Boot 3.2, Python / FastAPI, Go / Gin, TypeScript / NestJS), renders live side-by-side diffs with semantic explainability, streams multi-agent activity over WebSockets, and enforces contract parity through behavioral verification and autonomous self-repair.

ReForge is self-contained. It requires no mandatory external API keys or proprietary third-party cloud services, running completely on your local machine or air-gapped infrastructure.

---

## System Architecture

ReForge connects code analysis, graph theory, multi-agent orchestration, and code generation into a unified 7-stage pipeline:

```
[ Uploaded Repository / ZIP / Live Codebase ]
                      │
                      ▼
 1. Deterministic Multi-Language Scanner & AST Parser
    ├── Language & Framework Detection
    ├── Endpoints, Handlers & Routers
    ├── Services & Domain Logic
    ├── Entities, ORM Schemas & DTOs
    └── Test Suites & Mock Declarations
                      │
                      ▼
 2. Knowledge & Topology Layer (NetworkX Directed Graph + RAG Index)
    ├── Call Graph & Dependency Topology
    ├── Centrality & Coupling Metrics
    └── Symbol-Annotated Code Chunks & Semantic Index
         │                         │                         │
         ▼                         ▼                         ▼
   Architecture Graph        Codebase Chat (RAG)       Blast Radius
   (Interactive Flow)    [Evidence|Analysis|Hypoth]   (Impact Analysis)
         │                         │                         │
         └─────────────────────────┼─────────────────────────┘
                                   │
                                   ▼
 3. Universal Migration Planner & Mapping Matrix
    ├── Source Construct ──► Target Idiomatic Mapping
    └── Risk Categorization (High / Medium / Low)
                                   │
                                   ▼
 4. Incremental Multi-Tier Target Code Generator
    ├── Build Manifests (pom.xml, requirements.txt, go.mod, package.json)
    ├── Domain Models (JPA @Entity, SQLAlchemy Base, GORM structs)
    ├── Data Repositories (Spring Data JpaRepository, GORM interfaces)
    ├── Business Services (Injectable Services & Lifecycle Hooks)
    ├── Web Controllers (Spring @RestController, FastAPI APIRouter, Gin Handlers)
    └── Test Suites (JUnit 5 + Mockito, pytest + mock, Go testing)
                                   │
                                   ▼
 5. Real-Time Multi-Agent Streaming Console (WebSocket)
    └── [Planner] ──► [Migration] ──► [Build] ──► [Verification] ──► [Repair]
                                   │
                                   ▼
 6. Behavioral Verification & Autonomous Self-Repair Engine
    ├── Dynamic Route Scenario Generation & Functional Contract Tests
    ├── Side-by-Side HTTP Status & Response Body Comparator
    └── Autonomous AST Patching & Regression Re-Verification Loop
                                   │
                                   ▼
 7. Verified Modern Codebase & Deployable Target ZIP Package
```

---

## Core Capabilities & Modules

### 1. Ingestion & Multi-Stack Codebase Scanner
- Ingest any project via ZIP upload, local folder path, or 1-Click Demo.
- Supports heterogeneous repositories across Python, JavaScript, TypeScript, Go, and Java.
- Computes comprehensive inventory metrics: Total Files, Lines of Code (LOC), Discovered API Endpoints, Domain Services, Database Models, and Test Suites.

### 2. Interactive Architecture Graph Explorer
- Interactive React Flow topology map visualizing controllers, services, models, repositories, and routes.
- Dynamic filtering by component type, real-time node search, and auto-layout organizing components into architectural layers.
- Slide-out inspector drawer providing incoming/outgoing dependency edges, file paths, and exported symbols.

### 3. Deep Code Explorer
- Tree browser showing full directory hierarchies.
- Embedded Monaco Code Editor with syntax highlighting for all major languages.
- Real-time symbol detection displaying classes, methods, endpoints, and callers per file.

### 4. Grounded Codebase Chat (RAG Engine)
- Context-aware technical assistant with an evidence-grounded reasoning framework.
- Distinguishes responses into distinct categories:
  - `[Evidence]`: Verifiable facts cited directly from scanned source files with line numbers.
  - `[Analysis]`: Architectural reasoning connecting symbols, callers, and data flows.
  - `[Hypothesis]`: Inferred system intent, migration recommendations, or potential failure points.
- Automatically generates prompt recommendation pills based on the project's real routes and components.

### 5. Blast Radius & Impact Analysis
- Select any controller, service, or model to compute its full upstream and downstream dependency ripple.
- Utilizes NetworkX directed graph algorithms (`ancestors`, `descendants`, `predecessors`).
- Reports direct callers, downstream dependencies, affected API routes, and affected test suites.
- Computes a deterministic Risk Score (High, Medium, Low) based on centrality and critical path evaluation.

### 6. Universal Migration Workspace
- Configure target architectures: select Target Language, Framework, Database, and Testing Framework.
- Generates a Source-to-Target Mapping Matrix mapping each original source file to its target artifact.
- Categorizes transformation risks across Authentication, Schema Relational Mapping, Third-Party Integrations, and Validation.

### 7. Side-by-Side Monaco Diff Viewer
- Side-by-side split editor displaying the genuine source file on the left and the generated target file on the right.
- Language syntax highlighting dynamically adapts to the exact file types (e.g., Python on the left, Java on the right).
- Provides semantic transformation explanations describing how language-specific paradigms (e.g., FastAPI decorators -> Spring Boot `@RestController` annotations) were mapped.
- Clickable mapping table rows allow instant inspection of any mapped artifact.

### 8. Real-Time Multi-Agent Streaming Console
- Low-latency WebSocket streaming channel delivering real-time agent telemetry.
- Dedicated agent event streams:
  - `[PLANNER]`: Dependency resolution, target framework selection, mapping generation.
  - `[MIGRATION]`: File generation (Entities, Repositories, Services, Controllers, Configs).
  - `[BUILD]`: Target build manifest assembly (`pom.xml`, `requirements.txt`, `go.mod`).
  - `[VERIFICATION]`: Behavioral contract simulation and parity test execution.
  - `[REPAIR]`: Autonomous discrepancy diagnosis, code patching, and re-verification.

### 9. Behavioral Verification & Autonomous Self-Repair
- Generates dynamic behavioral test scenarios covering all discovered routes and exported contracts.
- Simulates requests against both source and target implementations, comparing status codes and payload structures.
- Autonomous Self-Repair Loop detects contract deviations (e.g., missing status fields, timestamp formatting), applies AST patches, and re-runs the suite to achieve 100% parity.

### 10. Executive Audit Reports & One-Click ZIP Export
- Generates an architectural modernization audit report.
- One-click ZIP export packaging the entire generated target project ready for build and deployment.

---

## Supported Migration Matrix

| Source Stack | Supported Target Stacks | Transformation Highlights |
|---|---|---|
| **Python**<br>*(FastAPI / Flask / SQLAlchemy)* | • Java 21 / Spring Boot 3.2<br>• Go / Gin<br>• TypeScript / NestJS<br>• C# / ASP.NET Core 8 | FastAPI decorators -> `@RestController`, SQLAlchemy models -> JPA `@Entity` & `JpaRepository`, Pydantic schemas -> Java DTOs, pytest -> JUnit 5 + Mockito |
| **Node.js**<br>*(Express / MongoDB / Mongoose)* | • Java 21 / Spring Boot 3.2<br>• Python / FastAPI<br>• Go / Gin<br>• TypeScript / NestJS | Express route handlers -> Spring/FastAPI controllers, Mongoose schemas -> Relational JPA/SQLAlchemy entities, Jest -> JUnit 5 / pytest |
| **Go**<br>*(Gin / Chi / GORM)* | • Java 21 / Spring Boot 3.2<br>• Python / FastAPI<br>• TypeScript / NestJS | Gin Context handlers -> Typed controller actions, GORM structs -> JPA entities, Go testing -> JUnit 5 |
| **Java**<br>*(Spring Boot / Jakarta EE)* | • Python / FastAPI<br>• Go / Gin<br>• TypeScript / NestJS | `@RestController` -> FastAPI `APIRouter` / Gin handlers, JPA `@Entity` -> Pydantic + SQLAlchemy models |

---

## Requirements & Prerequisites

| Requirement | Minimum Version | Recommended Version | Necessity | Purpose |
|---|---|---|---|---|
| **Python** | 3.10+ | 3.11.x | **Required** | Backend API, AST parsing, NetworkX graph engine, static file server |
| **Git** | 2.30+ | Latest | Optional | For cloning the repository (can also download repository ZIP) |
| **Node.js & npm** | 18.0+ / 9.0+ | 20.x LTS | Optional | **Only required if modifying frontend source code.** Pre-compiled UI assets are included in the repository. |
| **Operating System** | Windows 10/11, macOS 12+, or Linux (Ubuntu 20.04+) | Cross-platform compatibility |

> **Note on LLMs**: ReForge is completely self-contained. It operates with a deterministic fallback engine by default (`DEMO_MODE=true`), so no external API keys or paid subscriptions are required. If you wish to enable local generative LLM inference, you can optionally connect a local [Ollama](https://ollama.ai) instance (`codellama` or `llama3`).

---

## Quick Start Guide

You can run ReForge using either the automated 1-Click Launchers (recommended for all users) or manual terminal commands.

### Method 1: 1-Click Zero-Configuration Launch (Recommended)

The repository includes self-bootstrapping scripts that automatically detect Python, create a virtual environment, install backend dependencies, and launch the web interface in your default browser.

#### On Windows:
- **Option 1**: Double-click `run.bat` in the repository root folder.
- **Option 2** (PowerShell):
  ```powershell
  .\run.ps1
  ```
  *(If PowerShell displays a script execution policy restriction, run `powershell -ExecutionPolicy Bypass -File .\run.ps1`)*

#### On macOS / Linux:
```bash
chmod +x run.sh
./run.sh
```

Once launched, the browser opens automatically to:
**`http://localhost:8000`**

---

### Method 2: Manual Developer Setup

If you want to run the backend and frontend development servers separately with hot module reloading:

#### Step 1: Clone or Extract the Repository
```bash
git clone https://github.com/srikarmetta/ReForge.git
cd ReForge
```

#### Step 2: Configure Environment Variables
```bash
# On Linux / macOS
cp .env.example .env

# On Windows (PowerShell)
Copy-Item .env.example .env
```
*(The default `.env` file works out-of-the-box with zero edits required.)*

#### Step 3: Start the Backend Server (Terminal 1)
```bash
# Navigate to backend
cd backend

# Create and activate virtual environment
python -m venv .venv

# On Windows (PowerShell):
.\.venv\Scripts\Activate.ps1
# On Linux / macOS:
source .venv/bin/activate

# Install backend dependencies
pip install -r requirements.txt

# Start FastAPI backend on port 8000
python -m uvicorn app.main:app --host 127.0.0.1 --port 8000 --reload
```

#### Step 4: Start the Frontend Development Server (Terminal 2)
```bash
# From the repository root:
cd frontend

# Install Node dependencies
npm install

# Start the Vite development server
npm run dev
```

Open your browser to:
**`http://localhost:5173`** (Vite automatically proxies API requests to `http://127.0.0.1:8000`).

---

## Troubleshooting & FAQs

### 1. The home page loads, but clicking "1-Click Demo" or "Upload Project" shows an offline warning or does nothing.
- **Cause**: The React web interface cannot connect to the FastAPI backend server.
- **Solution**:
  1. Verify that the backend server is running in a terminal without errors.
  2. Test backend responsiveness by opening `http://127.0.0.1:8000/api/health` in your browser. It should return `{"status":"healthy"}`.
  3. If you used `npm run dev`, make sure your backend is running on `127.0.0.1:8000`. The Vite proxy targets `http://127.0.0.1:8000` directly.
  4. Ensure a local firewall or antivirus is not blocking port 8000.

### 2. PowerShell displays "running scripts is disabled on this system".
- **Cause**: Windows PowerShell default execution policy restricts unsigned `.ps1` scripts.
- **Solution**: Run the script with execution policy bypass:
  ```powershell
  powershell -ExecutionPolicy Bypass -File .\run.ps1
  ```
  Or simply double-click `run.bat`, which runs in Windows Command Prompt without PowerShell restrictions.

### 3. Port 8000 is already in use.
- **Solution**: Terminate any lingering process on port 8000 or launch on an alternate port:
  ```bash
  python -m uvicorn app.main:app --host 127.0.0.1 --port 8080
  ```

---

## Running Automated Tests

ReForge includes an automated test suite verifying repository scanning, AST symbol parsing, NetworkX graph modeling, RAG chat citation accuracy, dynamic migration code generation, and behavioral verification.

To run the full test suite:

```powershell
# Navigate to backend with virtualenv activated
cd backend
python -m pytest tests/ -v
```

### Test Suite Output:
```
============================= test session starts =============================
platform win32 -- Python 3.11.7, pytest-9.1.1, pluggy-1.6.0
cachedir: .pytest_cache
rootdir: C:\...\ReForge\backend
collected 5 items

tests/test_dynamic_systems.py::test_dynamic_chat_impact_and_verification_for_python PASSED [ 20%]
tests/test_migration_dynamic.py::test_migration_planner_and_generator_for_python_fastapi PASSED [ 40%]
tests/test_migration_dynamic.py::test_migration_to_go_gin PASSED         [ 60%]
tests/test_python_detection.py::test_python_project_detection_and_architecture PASSED [ 80%]
tests/test_reforge.py::test_full_pipeline PASSED                         [100%]

============================== 5 passed in 0.76s ==============================
```

---

## Project Structure

```
ReForge/
├── backend/
│   ├── app/
│   │   ├── analyzers/
│   │   │   ├── scanner.py          # Repository scanner & stack detector
│   │   │   ├── parser.py           # Multi-language AST symbol extractor
│   │   │   ├── graph_builder.py    # NetworkX architecture graph modeler
│   │   │   └── impact.py           # Blast radius & dependency traversal
│   │   ├── api/
│   │   │   ├── projects.py         # REST endpoints (Projects, Diff, Download)
│   │   │   └── websocket.py        # Streaming agent activity manager
│   │   ├── migration/
│   │   │   ├── planner.py          # Architecture mapping & risk analyzer
│   │   │   └── generator.py        # Multi-target code generation engine
│   │   ├── rag/
│   │   │   └── rag_engine.py       # Evidence-grounded codebase chat indexer
│   │   ├── verification/
│   │   │   ├── runner.py           # Behavioral verification & scenario runner
│   │   │   └── reports.py          # Executive audit report generator
│   │   ├── config.py               # Application settings & environment loader
│   │   ├── database.py             # SQLAlchemy async engine & SQLite setup
│   │   ├── main.py                 # FastAPI application factory & static mount
│   │   └── models.py               # Relational database models
│   ├── tests/
│   │   ├── test_dynamic_systems.py    # Tests for dynamic chat & impact analysis
│   │   ├── test_migration_dynamic.py  # Tests for dynamic code generation & diffs
│   │   ├── test_python_detection.py   # Tests for multi-stack scanner & parser
│   │   └── test_reforge.py            # End-to-end full pipeline test
│   └── requirements.txt            # Python dependencies
├── frontend/
│   ├── src/
│   │   ├── components/             # Reusable UI widgets, badges & drawers
│   │   ├── layouts/                # App layout, header & navigation sidebar
│   │   ├── pages/
│   │   │   ├── Landing.tsx             # Upload & 1-Click Golden Demo portal
│   │   │   ├── Projects.tsx            # Project portfolio dashboard
│   │   │   ├── ProjectDetail.tsx       # System overview & inventory metrics
│   │   │   ├── ArchitectureView.tsx    # Interactive React Flow graph explorer
│   │   │   ├── CodeExplorer.tsx        # Monaco editor & file tree inspector
│   │   │   ├── Chat.tsx                # Grounded RAG codebase assistant
│   │   │   ├── ImpactAnalysis.tsx      # Blast radius & ripple effect calculator
│   │   │   ├── MigrationWorkspace.tsx  # Target setup, Diff viewer & streaming console
│   │   │   ├── Verification.tsx        # Behavioral contract comparator & self-repair
│   │   │   └── Report.tsx              # Modernization audit report & exporter
│   │   ├── services/
│   │   │   └── api.ts              # Frontend HTTP client & WebSocket hooks
│   │   ├── types/                  # TypeScript interface definitions
│   │   └── App.tsx                 # Application routing & theme provider
│   ├── package.json                # Frontend npm dependencies
│   ├── tsconfig.json               # TypeScript compiler configuration
│   └── vite.config.ts              # Vite bundler & API proxy configuration
├── sample-project/                 # Built-in sample legacy application for testing
├── .env.example                    # Sample environment configuration template
├── .gitignore                      # Git exclusion rules
├── run.bat                         # Batch 1-click launch script (Windows double-click)
├── run.ps1                         # PowerShell 1-click launch script (Windows)
├── run.sh                          # Bash 1-click launch script (macOS / Linux)
└── README.md                       # Platform documentation
```

---

## Configuration Reference

ReForge is configured using environment variables defined in `.env`:

| Variable | Default Value | Description |
|---|---|---|
| `DATABASE_URL` | `sqlite+aiosqlite:///./reforge.db` | Async database connection URL for SQLite |
| `DEMO_MODE` | `true` | Enables deterministic code analysis & generation without requiring an external LLM |
| `OLLAMA_BASE_URL` | `http://localhost:11434` | Base URL for local Ollama LLM server (optional) |
| `OLLAMA_MODEL` | `codellama` | Model name to query when Ollama is running |
| `GITHUB_TOKEN` | *(empty)* | Optional GitHub personal access token for remote repository cloning |
| `MAX_REPAIR_ATTEMPTS` | `3` | Maximum autonomous patching cycles during behavioral verification |
| `UPLOAD_DIR` | `./uploads` | Temporary storage for uploaded repository archives |
| `PROJECTS_DIR` | `./projects` | Directory where uploaded projects and migrated targets are processed |

---

## Security & Privacy

- **100% Local Execution**: All scanning, AST parsing, graph calculations, code generation, and verification execute locally on your machine.
- **Zero Data Leakage**: Source code, architectural graphs, and generated code are never transmitted to external third-party servers.
- **No Secret Requirements**: The application contains no hardcoded tokens, API keys, or cloud dependencies.

---

## License

This project is licensed under the [MIT License](LICENSE) — free for personal, educational, and commercial usage.