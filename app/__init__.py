from flask import Flask
from flask import render_template
import requests
import json

app = Flask(__name__)

@app.route('/')
def index():
    response_x = requests.get("https://api.vexdb.io/v1/get_awards?team=6007X")
    response_old = requests.get("https://api.vexdb.io/v1/get_awards?team=6007")
    recent_awards = ["","","","","","","","","","","","","","","","","","","","",""]
    awards_list = response_x.json()[u'result'] + response_old.json()[u'result']
    i = 0;
    while i<len(recent_awards):
        string = awards_list[i][u'name']+"at "+ requests.get("https://api.vexdb.io/v1/get_events?sku="+str(awards_list[i][u'sku'])).json()[u'result'][0][u'name']
        string = '<a class = "links_normal text" href = "https://vexdb.io/events/view/'+str(awards_list[i][u'sku'])+'?t=awards">'+string+"</a>"
        recent_awards[i] = string.replace("(VRC/VEXU)","")
        i+=1
    return render_template('index.html', recent_awards=recent_awards)
