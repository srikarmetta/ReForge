from fastapi import FastAPI
from app.routers import orders, users

app = FastAPI(title="Migrated FastAPI Application", version="1.0.0")

app.include_router(orders.router, prefix="/api/orders", tags=["orders"])
app.include_router(users.router, prefix="/api/users", tags=["users"])

@app.get("/health")
def health():
    return {"status": "healthy"}