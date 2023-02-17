from flask import Flask
from flask import Flask, render_template, request, redirect, session


app = Flask(__name__)

@app.route('/')
def home():
    return render_template("index.html")
@app.route('/3D')
def u3D():
    return render_template("index3D.html")
@app.route('/sponsors')
def sponsors():
    return render_template("sponsors.html")
@app.route("/caiet_tehnic")
def caiet():
    return render_template("tehnic.html")
@app.route("/about_us")
def about():
    return render_template("aboutus.html")
@app.route("/departments")
def departments():
    return render_template("departments.html")

if __name__ == '__main__':
    app.run(debug=True)
