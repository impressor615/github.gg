from flask import Flask

from src.tier.http import blueprint as tier_blueprint


def create_app() -> Flask:
    app = Flask(__name__)

    register_blueprint(app)

    return app


def register_blueprint(app: Flask):
    app.register_blueprint(tier_blueprint, url_prefix="/api/tier")


app = create_app()
