from fastapi import FastAPI
from pycaret.regression import load_model, predict_model
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware
import random
import pickle

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

with open('./model/model.pkl', 'rb') as f:
    load_model = pickle.load(f)

def get_prediction(
    pclass,
    age,
    sibsp,
    parch    
):

    print(load_model)

    model = {
        "PassengerId": 0,
        "Survived" : 0,
        "Pclass" : 0,
        "Name": "Ole",
        "Sex": 0,
        "Age": 0,
        "SibSp": 0,
        "Parch": 0,
        "Ticket": 0,
        "Fare": 0,
        "Cabin": 0,
        "Embarked": 0
    }

    x = [[pclass, age, sibsp, parch]]

    y = predict_model(load_model, data = x)

    return {int(y)}

def get_dummy_prediction(
    pclass,
    age,
    sibsp,
    parch
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
    sibsp:  int
    parch:  int

@app.post("/predict")
def predict(params: ModelParams):

    pred = get_prediction(
        params.pclass,
        params.age,
        params.sibsp,
        params.parch
    )

    return pred

