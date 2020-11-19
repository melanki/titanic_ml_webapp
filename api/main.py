from fastapi import FastAPI
from pycaret.regression import load_model, predict_model
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware
import random
import pandas as pd

# Load model

# Variable Notes
# pclass: A proxy for socio-economic status (SES)
# 1st = Upper
# 2nd = Middle
# 3rd = Lower

# age: Age is fractional if less than 1. If the age is estimated, is it in the form of xx.5

# sibsp: The dataset defines family relations in this way...
# Sibling = brother, sister, stepbrother, stepsister
# Spouse = husband, wife (mistresses and fiancés were ignored)

# parch: The dataset defines family relations in this way...
# Parent = mother, father
# Child = daughter, son, stepdaughter, stepson
# Some children travelled only with a nanny, therefore parch=0 for them

#Det jeg har funnet som kan ha størst påvirkning er 
#   kjønn
#   pris på billetten
#   alder
#   har lugar


final_model = load_model('./model/model')

test = pd.read_csv('model//test.csv')

def get_prediction(
    pclass,
    sex,
    age,
    sibsp,
    parch,
    fare,
    cabin    
):

    print(final_model)

    variables = [0, pclass, sex, age, sibsp, parch, fare, cabin]
    x = pd.DataFrame([variables])
    print(x)

    y = predict_model(final_model, data = x)
    print(y.to_string)
    return {y.data}

def get_dummy_prediction(
    pclass,
    sex,
    age,
    sibsp,
    parch,
    fare,
    cabin
):

    return {random.randint(0, 1)}
    

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins = ['*'],
    allow_credentials = True,
    allow_methods = ['*'],
    allow_headers=['*']
)

# Model for POST request
class ModelParams(BaseModel):
    pclass: int
    age:    float
    sex:    int
    sibsp:  int
    parch:  int
    fare:   int
    cabin: str

@app.post("/predict")
def predict(params: ModelParams):

    pred = get_dummy_prediction(
        params.pclass,
        params.age,
        params.sex,
        params.sibsp,
        params.parch,
        params.fare,
        params.cabin
    )

    return pred

