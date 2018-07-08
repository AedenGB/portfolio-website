from flask import render_template
from app import app
import requests
import json


@app.route('/')
@app.route('/index')
def index():
    response_x = requests.get("https://api.vexdb.io/v1/get_awards?team=6007X&limit_number=5")
    response_old = requests.get("https://api.vexdb.io/v1/get_awards?team=6007&limit_number=5")
    recent_awards = ["","","","",""]
    awards_list = response_x.json()[u'result'] + response_old.json()[u'result']
    i = 0;
    while i<5:
        string = awards_list[i][u'name']+"at "+ requests.get("https://api.vexdb.io/v1/get_events?sku="+str(awards_list[i][u'sku'])).json()[u'result'][0][u'name']
        string = '<a class = "links_normal text" href = "https://vexdb.io/events/view/'+str(awards_list[i][u'sku'])+'?t=awards">'+string+"</a>"
        recent_awards[i] = string.replace("(VRC/VEXU)","")
        i+=1
    return render_template('index.html', recent_awards=recent_awards)
