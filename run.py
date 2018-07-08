#!python
from app import app
#app.run(debug=True)
if __name__ == "__main__":
    app.run(debug = False,host = '0.0.0.0')
