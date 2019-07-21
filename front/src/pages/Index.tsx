import React, {
  FC,
  useCallback,
  SyntheticEvent,
  useState,
  ChangeEventHandler,
} from 'react';
import { RouteComponentProps } from 'react-router';

const Index: FC<RouteComponentProps> = ({ history }) => {
  const [username, setUsername] = useState('');

  const handleSubmit = useCallback(
    (e: SyntheticEvent<HTMLFormElement>) => {
      e.preventDefault();

      const trimmed = username.trim();

      if (trimmed.length > 0) {
        history.push(`/users/${username}`);
      }
    },
    [history, username]
  );
  const handleChange: ChangeEventHandler<HTMLInputElement> = ({
    currentTarget,
  }) => {
    setUsername(currentTarget.value);
  };

  return (
    <>
      <h1>commit.gg</h1>
      <p>wanna know the tier on github?</p>
      <form action="/" method="GET" onSubmit={handleSubmit}>
        <label htmlFor="github-id-input">Github username:&nbsp;</label>
        <input
          id="github-username-input"
          name="username"
          type="search"
          placeholder="Enter username"
          value={username}
          onChange={handleChange}
        />
        <button type="submit">submit</button>
      </form>
    </>
  );
};

export default Index;
