from flask import Flask
from flask import render_template
import requests
import json

app = Flask(__name__)

@app.route('/')
def index():
    response_x = requests.get("https://api.vexdb.io/v1/get_awards?team=6007X")
    response_old = requests.get("https://api.vexdb.io/v1/get_awards?team=6007")
    recent_awards = []
    all_awards = ""
    awards_list = response_x.json()[u'result'] + response_old.json()[u'result']
    old_season = ""
    season = ""
    competition = []
    i = 0;
    while i<len(awards_list):
        competition = requests.get("https://api.vexdb.io/v1/get_events?sku="+str(awards_list[i][u'sku'])).json()[u'result'][0]
        season = competition[u'season']
        if old_season != season :
            all_awards += '<div class = "body-text text">' + season + "</div>"
        string = awards_list[i][u'name']+"at "+ competition[u'name']
        string = '<a class = "links_normal text" href = "https://vexdb.io/events/view/'+str(awards_list[i][u'sku'])+'?t=awards">'+string+"</a>"
        recent_awards.append(string.replace("(VRC/VEXU)",""))
        string = '<div class = "awards body-text text">' + string + "</div>"
        all_awards+=string
        old_season = season
        i+=1
    return render_template('index.html', recent_awards = recent_awards, all_awards = all_awards)
