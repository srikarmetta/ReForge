
from fastapi import FastAPI, Depends
from models import User
app = FastAPI()

@app.get('/users')
def list_users():
    return [{'id': 1, 'name': 'Alice'}]

@app.post('/users')
def create_user(user: dict):
    return user
