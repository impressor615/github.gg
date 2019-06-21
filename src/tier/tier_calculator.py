import collections

from src.datastructures.user_count import UserCount
from src.tier.models import Tier


class TierCalculator():
    CRITERIA = collections.OrderedDict({
        Tier.BRONZE: {
            "average": 0,
            "no_commit_day": 999,
        },
        Tier.SILVER: {
            "average": 0.5,
            "no_commit_day": 999,
        },
        Tier.GOLD: {
            "average": 1,
            "no_commit_day": 999,
        },
        Tier.PLATINUM: {
            "average": 3,
            "no_commit_day": 168,
        },
        Tier.DIAMOND: {
            "average": 4,
            "no_commit_day": 100,
        },
        Tier.MASTER: {
            "average": 5,
            "no_commit_day": 50,
        },
        Tier.CHALLENGER: {
            "average": 7,
            "no_commit_day": 0,
        },
    })

    def calculate(self, user_count: UserCount) -> Tier:
        for tier, criteria in self.CRITERIA.items():
            if (
                user_count.average <= criteria["average"]
                or user_count.no_commit_day > criteria["no_commit_day"]
            ):
                return tier
