from flask import Blueprint
from flask import jsonify
from flask import views

from src.user.services import CommitStatService
from src.user.services import TierService


blueprint = Blueprint("user", __name__)


class TierView(views.MethodView):
    def get(self, username: str):
        commit_stat_service = CommitStatService()
        user_count = commit_stat_service.fetch(username)

        tier_service = TierService()
        tier_name = tier_service.calculate(user_count)

        return jsonify({
            "average": user_count.average,
            "no_commit_day": user_count.no_commit_day,
            "tier": tier_name,
        })


blueprint.add_url_rule('/<username>/tier', view_func=TierView.as_view('tier'))
