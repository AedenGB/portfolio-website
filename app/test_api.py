import requests
import json

def win_count(team):
    result = ["","",""]
    total = requests.get("https://api.vexdb.io/v1/get_matches?team="+team+"&nodata=true").json()[u'size']
    response = requests.get("https://api.vexdb.io/v1/get_matches?team="+team+"&season=Starstruck").json()[u'result']
    match = {}
    wins = 0
    losses = 0
    for match in response:
        if((match.get("red1")== team or match.get("red2")==team) == (match.get("redscore")>match.get("bluescore"))):
            wins = wins+1
        else:
            losses = losses+1

    result[0] = "won:" + str(wins)
    result[1] = "lost:" + str(losses)
    if(wins+losses!=0):
        result[2] = "win ratio:" +str(int((1.0*wins/(wins+losses))*100))+"%"
    else:
        result[2] = "win ratio undefined"
    return result

team_num = "6007"#raw_input("enter team: ")
print (win_count(team_num))
