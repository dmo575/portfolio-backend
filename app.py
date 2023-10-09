from flask import Flask, render_template
from flask_sqlalchemy import SQLAlchemy


# load configuration
app.config.from_pyfile('config.py')

# 
app = Flask(__name__)

# change