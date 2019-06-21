from flask import (
    Flask,
    jsonify,
    request,
)
from werkzeug.exceptions import BadRequest

from src.fetcher.crawl import CrawlFetcher


def create_app():
    app = Flask(__name__)

    return app


app = create_app()


@app.route('/')
def home():
    username = request.args.get("username")
    if not username:
        raise BadRequest

    user_count = CrawlFetcher().fetch(username)

    return jsonify({
        "average": user_count.average,
        "no_commit_day": user_count.no_commit_day,
    })
