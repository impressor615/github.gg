from src.user.models import Bronze5
from src.user.models import CommitStat
from src.user.models import TIERS


class TierService():
    def calculate(self, commit_stat: CommitStat) -> str:
        last_tier = Bronze5
        for tier in TIERS:
            if not tier.satisfy(
                commit_stat.average,
                commit_stat.no_commit_day,
            ):
                break

            last_tier = tier

        return last_tier.name()
