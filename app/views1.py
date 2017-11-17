from flask import render_template
from app import app
import requests
import json


@app.route('/')
@app.route('/index')
def index():
    response = requests.get("https://api.vexdb.io/v1/get_awards?team=6007&limit_number=3")
    recent_awards = ["","",""]
    i = 0;
    while i<3:
        string = response.json()[u'result'][i][u'name']+"at "+ requests.get("https://api.vexdb.io/v1/get_events?sku="+str(response.json()[u'result'][0][u'sku'])).json()[u'result'][0][u'name']
        recent_awards[i] = string.replace("(VRC/VEXU)","")
        i+=1

    user = {'nickname': 'Miguel'}  # fake user
    return render_template('index.html',
                           title='Home',
                           user=user,
                           recent_awards=recent_awards)
