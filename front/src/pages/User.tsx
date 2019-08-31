import React, { FC, useState, useEffect } from 'react';
import { Link, Redirect, RouteComponentProps } from 'react-router-dom';

import * as userApis from '@apis/users';
import { StatusEnum } from '@schemas/common';
import { TierEnum } from '@schemas/tier';

const User: FC<RouteComponentProps<{ username: string }>> = ({
  match: { params },
}) => {
  const { username } = params;
  const [status, setStatus] = useState<StatusEnum>(StatusEnum.Request);
  const [tier, setTier] = useState<undefined | TierEnum>(undefined);

  useEffect(() => {
    const fetch = async () => {
      try {
        const response = await userApis.getUser({ username });
        setTier(response.tier);
        setStatus(StatusEnum.Success);
      } catch (error) {
        setStatus(StatusEnum.Failure);

        setTimeout(() => {
          throw error;
        });
      }
    };

    fetch();
  }, [username]);

  if (status === StatusEnum.Failure) {
    return <Redirect to="/errors/404" />;
  }

  if (status === StatusEnum.Request) {
    return <div>loading...</div>;
  }

  return (
    <div>
      <h1>{`${username}'s tier is ${tier}`}</h1>
      <Link to="/">check other&apos;s tier</Link>
    </div>
  );
};

export default User;
