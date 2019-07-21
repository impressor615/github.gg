import axios from 'axios';

import { TierEnum } from 'schemas/tier';

/****************************************
 * `/apis`: get user's tier
 ****************************************/
const GET_USER = '/apis';

interface GetUserParams {
  username: string;
}
interface GetUserResponse {
  average: number;
  no_commit_day: number;
  tier: TierEnum;
}
export const getUser = (params: GetUserParams) =>
  axios.get<GetUserResponse>(GET_USER, { params }).then(({ data }) => data);
