from .models import TIERS
from .models import Bronze
from src.fetcher.models import UserCount


class TierCalculateService():
    def calculate(self, user_count: UserCount) -> str:
        last_tier = Bronze
        for tier in TIERS:
            if not tier.satisfy(user_count.average, user_count.no_commit_day):
                break

            last_tier = tier

        return last_tier.name()
