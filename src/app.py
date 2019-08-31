from flask import Flask

from src.user.http import blueprint as user_blueprint


def create_app() -> Flask:
    app = Flask(__name__)

    register_blueprint(app)

    return app


def register_blueprint(app: Flask):
    app.register_blueprint(user_blueprint, url_prefix="/api/user")


app = create_app()
