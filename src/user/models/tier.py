class Tier():
    no_commit_day = 999

    @classmethod
    def name(cls) -> str:
        return cls.__name__

    @classmethod
    def satisfy(cls, user_average: int, user_no_commit_day: int) -> bool:
        return (
            cls.average <= user_average
            and cls.no_commit_day >= user_no_commit_day
        )


class Bronze5(Tier):
    average = 0


class Bronze4(Tier):
    average = 0.1


class Bronze3(Tier):
    average = 0.2


class Bronze2(Tier):
    average = 0.3


class Bronze1(Tier):
    average = 0.4


class Silver5(Tier):
    average = 0.5


class Silver4(Tier):
    average = 0.6


class Silver3(Tier):
    average = 0.7


class Silver2(Tier):
    average = 0.8


class Silver1(Tier):
    average = 0.9


class Gold5(Tier):
    average = 1


class Gold4(Tier):
    average = 1.2


class Gold3(Tier):
    average = 1.4


class Gold2(Tier):
    average = 1.6


class Gold1(Tier):
    average = 1.8


class Platinum5(Tier):
    average = 2
    no_commit_day = 150


class Platinum4(Tier):
    average = 2.4
    no_commit_day = 145


class Platinum3(Tier):
    average = 2.8
    no_commit_day = 140


class Platinum2(Tier):
    average = 3.2
    no_commit_day = 135


class Platinum1(Tier):
    average = 3.6
    no_commit_day = 130


class Diamond5(Tier):
    average = 4
    no_commit_day = 120


class Diamond4(Tier):
    average = 4.5
    no_commit_day = 110


class Diamond3(Tier):
    average = 5
    no_commit_day = 100


class Diamond2(Tier):
    average = 5.5
    no_commit_day = 90


class Diamond1(Tier):
    average = 6
    no_commit_day = 80


class Master3(Tier):
    average = 7
    no_commit_day = 70


class Master2(Tier):
    average = 8
    no_commit_day = 50


class Master1(Tier):
    average = 9
    no_commit_day = 30


class Challenger(Tier):
    average = 10
    no_commit_day = 0


TIERS = (
    Bronze5, Bronze4, Bronze3, Bronze2, Bronze1,
    Silver5, Silver4, Silver3, Silver2, Silver1,
    Gold5, Gold4, Gold3, Gold2, Gold1,
    Platinum5, Platinum4, Platinum3, Platinum2, Platinum1,
    Diamond5, Diamond4, Diamond3, Diamond2, Diamond1,
    Master3, Master2, Master1,
    Challenger,
)
