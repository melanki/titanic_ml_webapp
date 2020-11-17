from fastapi import FastAPI
from pydantic import BaseModel
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

with open('./model/model.pkl', 'rb') as f:
    data = pickle.load(f)

def get_prediction(
    pclass,
    age,
    sibsp,
    parch
):
    x = [[
        pclass,
        age,
        sibsp,
        parch
    ]]

    y = data.predict(x)[0]
    prob = data.predict_proba(x)[0].tolist()

    return {random.randint(0, 1)}
    

app = FastAPI()

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

