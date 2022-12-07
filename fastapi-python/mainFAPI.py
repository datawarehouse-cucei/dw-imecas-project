from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import time

app = FastAPI()

origins = [
    "http://localhost:3000",
    "localhost:3000"
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"]
)


@app.get('/')
async def root():
    return {'message': 'root'}

@app.get('/dw')
def test_dw():    
    return {'message': 'Data WareHouse Project'}

@app.get('/mysql-db-cleaning/')
def mysql_db_cleaning():
    return {'message': 'Limpieza de la Base de Datos MySQL Lista'}

@app.get('/postgresql-db-cleaning/')
def postgresql_db_cleaning():
    return {'message': 'Limpieza de la Base de Datos Postgres Lista'}