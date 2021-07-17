from flask import Flask, redirect, url_for, render_template, request

app = Flask(__name__)


@app.route("/", methods=['GET', 'POST'])
def home():
    return render_template("main_page.html")


@app.route("/instruction", methods=['GET', 'POST'])
def instruction():
    return render_template("instruction.html")


@app.route("/diary", methods=['GET', 'POST'])
def diary():
    return render_template("diary_page.html")

# @app.route("/", methods = ['GET', 'POST'])
# def ():
#     return render_template(".html")


if __name__ == "__main__":
    app.run(debug=True)
