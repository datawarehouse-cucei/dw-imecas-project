from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import petl as etl
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
    table1 = etl.fromcsv("./recursos/2018pm10.csv")
    etl.tojson(table1, './results-json/mysqlclean2018pm10.json', sort_keys=False)
    jsonRes = open("./results-json/mysqlclean2018pm10.json").read()
    return [{'message': 'Limpieza de la Base de Datos MySQL Lista'}, jsonRes]

@app.get('/postgresql-db-cleaning/')
def postgresql_db_cleaning():
    table1 = etl.fromcsv("./recursos/acc2018.csv")
    etl.tojson(table1, './results-json/postgrescleanacc2018.json', sort_keys=False)
    jsonRes = open("./results-json/postgresacc2018.json").read()
    return [{'message': 'Limpieza de la Base de Datos Postgres Lista'}, jsonRes]
    

@app.get('/process')
def process():
    return {'message': 'Datos procesados'}

@app.get('/autos')
def consultar_autos():
    return {'message': 'Autos'}

@app.get('/zonas')
def consultar_zonas():
    return {'message': 'Zonas'}

@app.get('/calidad-del-aire')
def consultar_calidad_del_aire():
    return {'message': 'Calidad del aire'}