from flask import Flask
# configure services we need
app = Flask(__name__, static_url_path='')

if __name__ == "__main__":
	app.run(debug=True, reloader_type='stat')
