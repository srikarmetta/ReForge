# ReForge
## Codebase Intelligence & Software Migration Platform

ReForge is an agentic developer platform built around two core capabilities:
1. **Understand an existing codebase**: Deterministic AST scanning, NetworkX dependency and architecture graphs, blast-radius impact analysis, Monaco code explorer, and grounded RAG codebase chat distinguishing Evidence, Analysis, and Hypothesis.
2. **Migrate that codebase to any new technology stack**: Converts any source language project into any selected target language/framework (Node.js/Express &rarr; Java 21/Spring Boot, Python/FastAPI, Go/Gin, TypeScript/NestJS, C#/.NET Core), provides side-by-side source-to-target diffs with semantic explanation, streams agent logs in real time, executes behavioral scenario verification with autonomous self-repair, and bundles full downloadable target project ZIPs.

---

## System Architecture

```
Existing Codebase (Node.js / Express / MongoDB)
      |
      v
1. Ingest (ZIP / Git / 1-Click Golden Demo)
      |
      v
2. Scan & AST Parse (Routes, Controllers, Services, Models, Tests)
      |
      v
3. Codebase Knowledge Layer (NetworkX Graph + RAG Index)
     /        |        \
    v         v         v
Architecture  Codebase  Blast Radius
Graph (Flow)  Chat      Impact Analysis
     \        |        /
      v       v       v
4. Migration Setup & Planner (Source -> Target Mappings & Risk Analysis)
      |
      v
5. Incremental Target Code Generation (Entities -> Repos -> Services -> Controllers -> Tests)
      |
      v
6. Real-time Agent Streaming Console (WebSocket events)
      |
      v
7. Behavioral Verification Suite (Scenario execution against source and target)
      |
      v
8. Autonomous Repair Loop (Discrepancy diagnosis, patching & retesting)
      |
      v
9. Verified Migrated Application & Downloadable ZIP Project
```

---

## 11 Complete Blueprint Screens

1. **Landing & Ingestion**: 1-Click Golden Demo launch, ZIP upload, and tech capabilities.
2. **Project Overview**: Stack cards, metrics (files, LOC, endpoints, services, models, tests), and quick navigation.
3. **Architecture Explorer**: Interactive React Flow graph with type filtering, search, and component inspector drawer.
4. **Code Explorer**: File tree browser, Monaco editor, and symbol/relationship intelligence panel.
5. **Codebase Chat**: Grounded RAG assistant with `[Evidence]`, `[Analysis]`, and `[Hypothesis]` badges and exact line citations.
6. **Impact Analysis**: Component blast-radius calculator showing direct callers, affected routes, and impacted tests.
7. **Migration Setup**: Target stack selector (Java Spring Boot, Python FastAPI, Go Gin, etc.) and compatibility checks.
8. **Migration Plan**: Source-to-target mapping matrix, risk classification (High, Medium, Low), and transformation rules.
9. **Agent Activity Console**: Real-time WebSocket streaming logs for `[Planner]`, `[Migration]`, `[Build]`, `[Verification]`, and `[Repair]`.
10. **Behavioral Verification**: Scenario matrix, HTTP status & payload comparator, and autonomous self-repair demonstration.
11. **Reports & Export**: Executive migration audit report, Markdown export, and target project `.zip` download.

---

## Quick Start Guide

### 1. Launch Full-Stack Server
Run the single command from the project root:
```powershell
.\run.ps1
```
Or directly from `backend/`:
```bash
cd backend
.\.venv\Scripts\python.exe -m uvicorn app.main:app --host 127.0.0.1 --port 8000 --reload
```

Open your browser to:
**`http://localhost:8000`**

### 2. Frontend Development Server (Optional Hot-Reload)
```bash
cd frontend
npm run dev
```
Open `http://localhost:5173` (requests automatically proxied to port 8000).

---

## Running Automated Tests

Run the full end-to-end Python pipeline test suite:
```powershell
cd backend
.\.venv\Scripts\python.exe -m pytest tests/test_reforge.py
```
Test results:
- Scanner: PASS
- Symbol Parser: PASS
- NetworkX Graph Builder: PASS
- Blast Radius Impact Analyzer: PASS
- RAG Knowledge Engine: PASS
- Universal Migration Planner: PASS
- Target Code Generator: PASS
- Behavioral Verification & Repair Runner: PASS

*ReForge: Understand. Explore. Decide. Migrate. Verify.*
