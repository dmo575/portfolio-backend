from flask import Flask, render_template



app = Flask(__name__)

app.config.from_pyfile('config.py', silent=True)
app.static_folder = './dist/assets/'
app.template_folder = './dist/'
app.config.from_mapping(
    SECRET_KEY='dev'
)



@app.route('/')
def hello():
    return render_template('index.html')
    


# app = Flask(__name__)
# app.static_folder = './dist/'
# app.template_folder = './dist/'
# 
# # load configuration
# app.config.from_pyfile('config.py')
# 
# 
# @app.route('/')
# def index():
#     return app.send_static_file('index.html')
# 
# 
# 
# if __name__ == '__main__':
#     app.run(debug=True)