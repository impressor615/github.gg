from flask import Blueprint
from flask import jsonify
from flask import request
from flask import views
from werkzeug import exceptions

from src.fetcher.services import CrawlFetchService

from .services import TierCalculateService


blueprint = Blueprint("tier", __name__)


class TierView(views.MethodView):
    def get(self):
        username = request.args.get("username")
        if not username:
            raise exceptions.BadRequest

        fetch_service = CrawlFetchService()
        user_count = fetch_service.fetch(username)

        calculate_service = TierCalculateService()
        tier_name = calculate_service.calculate(user_count)

        return jsonify({
            "average": user_count.average,
            "no_commit_day": user_count.no_commit_day,
            "tier": tier_name,
        })


blueprint.add_url_rule('/', view_func=TierView.as_view('tier'))
