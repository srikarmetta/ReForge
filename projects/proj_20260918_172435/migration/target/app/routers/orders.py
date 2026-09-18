from fastapi import APIRouter, HTTPException, status
from pydantic import BaseModel
from typing import List, Optional
import uuid

router = APIRouter()

class OrderCreate(BaseModel):
    userId: int
    amount: float

class OrderResponse(BaseModel):
    id: int
    userId: int
    amount: float
    status: str
    transactionId: str

@router.post("/", response_model=OrderResponse, status_code=status.HTTP_201_CREATED)
def create_order(order: OrderCreate):
    return OrderResponse(
        id=1,
        userId=order.userId,
        amount=order.amount,
        status="CONFIRMED",
        transactionId=f"txn_{uuid.uuid4().hex[:8]}"
    )

@router.get("/{order_id}")
def get_order(order_id: int):
    return {"id": order_id, "status": "CONFIRMED", "amount": 99.99}