class CommitStat():
    def __init__(self, count_map):
        self.count_map = count_map

        total_count, no_commit_day = 0, 0
        for _, count in count_map.items():
            total_count += count
            if count == 0:
                no_commit_day += 1

        self.average = total_count / len(count_map)
        self.no_commit_day = no_commit_day
