from flask import Flask, render_template, send_from_directory

app = Flask(__name__)
app.static_folder = './dist/'
app.template_folder = './dist/'

# load configuration
app.config.from_pyfile('config.py')


@app.route('/')
def index():
    return app.send_static_file('index.html')



if __name__ == '__main__':
    app.run(debug=True)