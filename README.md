<div align="center">

# ReForge
### Autonomous Codebase Intelligence & Any-to-Any Software Modernization Platform

[![FastAPI](https://img.shields.io/badge/FastAPI-0.104.1-009688.svg?style=flat&logo=fastapi&logoColor=white)](https://fastapi.tiangolo.com)
[![Python](https://img.shields.io/badge/Python-3.11+-3776AB.svg?style=flat&logo=python&logoColor=white)](https://www.python.org)
[![React](https://img.shields.io/badge/React-18.2-61DAFB.svg?style=flat&logo=react&logoColor=black)](https://reactjs.org)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.2-3178C6.svg?style=flat&logo=typescript&logoColor=white)](https://www.typescriptlang.org)
[![Tailwind CSS](https://img.shields.io/badge/TailwindCSS-3.3-38B2AC.svg?style=flat&logo=tailwind-css&logoColor=white)](https://tailwindcss.com)
[![Monaco Editor](https://img.shields.io/badge/Monaco_Editor-0.44-blue.svg?style=flat&logo=visual-studio-code&logoColor=white)](https://microsoft.github.io/monaco-editor/)
[![NetworkX](https://img.shields.io/badge/NetworkX-3.2+-orange.svg?style=flat)](https://networkx.org)
[![Tests](https://img.shields.io/badge/Tests-5%2F5%20Passing-brightgreen.svg?style=flat&logo=pytest&logoColor=white)](https://docs.pytest.org)
[![License](https://img.shields.io/badge/License-MIT-green.svg?style=flat)](LICENSE)

<p align="center">
  <strong>Understand any codebase. Quantify impact. Migrate to any modern stack with verified parity.</strong>
</p>

[Key Features](#-core-capabilities--modules) •
[Architecture](#-system-architecture) •
[Quick Start](#-quick-start-guide) •
[Migration Matrix](#-supported-migration-matrix) •
[Testing](#-running-automated-tests) •
[Project Structure](#-project-structure)

</div>

---

##  Executive Summary

Software migration and legacy refactoring represent a **$3.6 trillion technical debt barrier** globally. Enterprises remain locked into obsolete runtimes, unmaintained frameworks, and monolithic architectures because manual rewrites are:
- **Costly & Multi-Year**: Requiring large teams of specialized legacy developers.
- **Prone to Severe Regressions**: Subtle behavioral discrepancies, missing edge cases, and untested side-effects.
- **Knowledge-Deficient**: Original system architects have long departed, leaving undocumented logic and implicit dependencies.

**ReForge** is an agentic software intelligence and automated modernization platform that solves this dual challenge:
1. **Deep Codebase Intelligence**: Ingests arbitrary codebases (Python, JavaScript, TypeScript, Go, Java), constructs deterministic Abstract Syntax Tree (AST) symbol models, computes directed dependency graphs, performs graph-traversal blast-radius impact analysis, and provides evidence-grounded RAG codebase chat with file-level and line-level citations.
2. **Any-to-Any Migration Pipeline**: Synthesizes architecture plans, generates production-ready target codebases across leading enterprise stacks (Java 21 / Spring Boot 3.2, Python / FastAPI, Go / Gin, TypeScript / NestJS), renders live side-by-side Monaco diffs with semantic explainability, streams multi-agent activity over WebSockets, and enforces contract parity through behavioral verification and autonomous self-repair.

**Privacy-First & Self-Contained**: ReForge requires **no mandatory external API keys** or proprietary third-party cloud services. It runs completely on your local machine or air-gapped infrastructure.

---

## 🏗 System Architecture

ReForge connects code analysis, graph theory, multi-agent orchestration, and code generation into a unified 9-stage pipeline:

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

## ⚡ Core Capabilities & Modules

### 1. Ingestion & Multi-Stack Codebase Scanner
- Ingest any project instantly via `.zip` upload, existing local folder path, or 1-Click Golden Demo.
- Supports heterogeneous repositories across **Python, JavaScript, TypeScript, Go, and Java**.
- Computes comprehensive inventory metrics: Total Files, Lines of Code (LOC), Discovered API Endpoints, Domain Services, Database Models, and Test Suites.

### 2. Interactive Architecture Graph Explorer
- Interactive React Flow topology map visualizing controllers, services, models, repositories, and routes.
- Dynamic filtering by component type, real-time node search, and auto-layout organizing components into architectural layers.
- Slide-out inspector drawer providing incoming/outgoing dependency edges, file paths, and exported symbols.

### 3. Deep Code Explorer
- Tree browser showing full directory hierarchies.
- Embedded high-performance **Monaco Code Editor** with syntax highlighting for all major languages.
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
- Generates a **Source-to-Target Mapping Matrix** mapping each original source file to its target artifact.
- Categorizes transformation risks across Authentication, Schema Relational Mapping, Third-Party Integrations, and Validation.

### 7. Side-by-Side Monaco Diff Viewer
- Side-by-side split editor displaying the genuine source file on the left and the generated target file on the right.
- Language syntax highlighting dynamically adapts to the exact file types (e.g., Python on the left, Java on the right).
- Provides semantic transformation explanations describing how language-specific paradigms (e.g., FastAPI decorators &rarr; Spring Boot `@RestController` annotations) were mapped.
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
- Generates an executive-ready architectural modernization audit report.
- One-click `.zip` export packaging the entire generated target project ready for build and deployment.

---

##  Supported Migration Matrix

| Source Stack | Supported Target Stacks | Transformation Highlights |
|---|---|---|
| **Python**<br>*(FastAPI / Flask / SQLAlchemy)* | • **Java 21 / Spring Boot 3.2**<br>• **Go / Gin**<br>• **TypeScript / NestJS**<br>• **C# / ASP.NET Core 8** | FastAPI decorators &rarr; `@RestController`, SQLAlchemy models &rarr; JPA `@Entity` & `JpaRepository`, Pydantic schemas &rarr; Java DTOs, pytest &rarr; JUnit 5 + Mockito |
| **Node.js**<br>*(Express / MongoDB / Mongoose)* | • **Java 21 / Spring Boot 3.2**<br>• **Python / FastAPI**<br>• **Go / Gin**<br>• **TypeScript / NestJS** | Express route handlers &rarr; Spring/FastAPI controllers, Mongoose schemas &rarr; Relational JPA/SQLAlchemy entities, Jest &rarr; JUnit 5 / pytest |
| **Go**<br>*(Gin / Chi / GORM)* | • **Java 21 / Spring Boot 3.2**<br>• **Python / FastAPI**<br>• **TypeScript / NestJS** | Gin Context handlers &rarr; Typed controller actions, GORM structs &rarr; JPA entities, Go testing &rarr; JUnit 5 |
| **Java**<br>*(Spring Boot / Jakarta EE)* | • **Python / FastAPI**<br>• **Go / Gin**<br>• **TypeScript / NestJS** | `@RestController` &rarr; FastAPI `APIRouter` / Gin handlers, JPA `@Entity` &rarr; Pydantic + SQLAlchemy models |

---

## 💻 Requirements & Prerequisites

Ensure the following tools are installed on your host machine:

| Requirement | Minimum Version | Recommended Version | Purpose |
|---|---|---|---|
| **Python** | 3.10+ | 3.11.x | Backend API, AST parsing, NetworkX graph engine |
| **Node.js** | 18.0+ | 20.x LTS | Frontend React / Vite runtime |
| **npm** | 9.0+ | 10.x | Frontend package manager |
| **Git** | 2.30+ | Latest | Version control & repository tracking |
| **Operating System** | Windows 10/11, macOS 12+, or Linux (Ubuntu 20.04+) | Cross-platform compatibility |

> **Note on LLMs**: ReForge is completely self-contained. It operates with a deterministic fallback engine by default (`DEMO_MODE=true`), so **no external API keys or paid subscriptions are required**. If you wish to enable local generative LLM inference, you can optionally connect a local [Ollama](https://ollama.ai) instance (`codellama` or `llama3`).

---

## 🚀 Quick Start Guide

### Step 1: Clone the Repository
```bash
git clone https://github.com/srikarmetta/ReForge.git
cd ReForge
```

### Step 2: Configure Environment Variables
Copy the example environment configuration:
```bash
# On Linux / macOS
cp .env.example .env

# On Windows (PowerShell)
Copy-Item .env.example .env
```
The default `.env` file is ready to run out-of-the-box with zero configuration needed.

### Step 3: Backend Setup
Set up the Python virtual environment and install dependencies:

```bash
# Navigate to backend directory
cd backend

# Create virtual environment
python -m venv .venv

# Activate virtual environment:
# On Windows (PowerShell):
.\.venv\Scripts\Activate.ps1
# On Linux / macOS:
source .venv/bin/activate

# Install required dependencies
pip install -r requirements.txt
```

### Step 4: Frontend Setup
Build the production React UI assets:

```bash
# Navigate to frontend directory (from project root)
cd ../frontend

# Install dependencies
npm install

# Build production assets
npm run build
```

### Step 5: Launch ReForge
You can start the full-stack server using the provided one-click launch script or directly via Uvicorn:

**Option A — Windows One-Click Script (from repository root):**
```powershell
.\run.ps1
```

**Option B — Direct Uvicorn Launch (from `backend/` directory with virtualenv activated):**
```bash
cd backend
python -m uvicorn app.main:app --host 127.0.0.1 --port 8000 --reload
```

Open your browser to:
👉 **`http://localhost:8000`**

*(Optional)* If you wish to run the Vite hot-reloading development server alongside the backend:
```bash
cd frontend
npm run dev
```
Navigate to `http://localhost:5173` (API requests are automatically proxied to port 8000).

---

## 🧪 Running Automated Tests

ReForge includes a comprehensive automated test suite verifying repository scanning, AST symbol parsing, NetworkX graph modeling, RAG chat citation accuracy, dynamic migration code generation, and behavioral verification.

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

## 📁 Project Structure

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
├── run.ps1                         # 1-Click launch script for Windows
└── README.md                       # Platform documentation
```

---

## ⚙️ Configuration Reference

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

## 🛡 Security & Privacy

- **100% Local Execution**: All scanning, AST parsing, graph calculations, code generation, and verification execute locally on your machine.
- **Zero Data Leakage**: Source code, architectural graphs, and generated code are never transmitted to external third-party servers.
- **No Secret Requirements**: The application contains no hardcoded tokens, API keys, or cloud dependencies.

---

## 📄 License

This project is licensed under the [MIT License](LICENSE) — free for personal, educational, and commercial usage.

---

<div align="center">
  <sub>Built with ❤️ for software engineers modernizing legacy codebases everywhere.</sub>
</div>