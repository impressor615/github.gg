import datetime
import typing

import bs4
import requests

from src.datastructures.user_count import UserCount


class CrawlFetcher():
    def fetch(self) -> UserCount:
        count_map = self._fetch("qodot")

        return UserCount(count_map)

    def _fetch(self, username: str) -> typing.Dict[datetime.date, int]:
        count_map = {}

        URL = f"https://github.com/users/{username}/contributions"
        resp = requests.get(URL)
        soup = bs4.BeautifulSoup(resp.content, "html.parser")
        chunks = soup.select("svg.js-calendar-graph-svg > g > g")

        for chunk in chunks:
            days = chunk.select("rect.day")
            for day in days:
                date = datetime.datetime.strptime(
                    day["data-date"], "%Y-%m-%d",
                ).date()
                count = int(day["data-count"])
                count_map[date] = count

        return count_map


if __name__ == "__main__":
    fetcher = CrawlFetcher()
    user_count = fetcher.fetch()
