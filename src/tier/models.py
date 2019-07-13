class Tier():
    MAX_NO_COMMIT_DAY = 999

    @classmethod
    def name(cls) -> str:
        return cls.__name__

    @classmethod
    def satisfy(cls, user_average: int, user_no_commit_day: int) -> bool:
        return (
            cls.average <= user_average
            and cls.no_commit_day > user_no_commit_day
        )


class Bronze(Tier):
    average = 0
    no_commit_day = Tier.MAX_NO_COMMIT_DAY


class Silver(Tier):
    average = 0.5
    no_commit_day = Tier.MAX_NO_COMMIT_DAY


class Gold(Tier):
    average = 1
    no_commit_day = Tier.MAX_NO_COMMIT_DAY


class Platinum(Tier):
    average = 3
    no_commit_day = 168


class Diamond(Tier):
    average = 4
    no_commit_day = 100


class Master(Tier):
    average = 5
    no_commit_day = 50


class Challenger(Tier):
    average = 7
    no_commit_day = 0


TIERS = (
    Bronze,
    Silver,
    Gold,
    Platinum,
    Diamond,
    Master,
    Challenger,
)
