import React, {
  FC,
  useCallback,
  SyntheticEvent,
  useState,
  useEffect,
  ChangeEventHandler,
} from 'react';
import { RouteComponentProps } from 'react-router';
import styled from 'styled-components';
import { Box, TextField, Button } from '@material-ui/core';
import { useTransition, animated } from 'react-spring';

import { TierEnum } from 'schemas/tier';

const TIERS = Object.keys(TierEnum);
const Index: FC<RouteComponentProps> = ({ history }) => {
  const [username, setUsername] = useState('');
  const [tierIndex, setTierIndex] = useState(0);
  const transitions = useTransition(tierIndex, null, {
    enter: { opacity: 1, transform: 'translate3d(0,0px,0)' },
    from: { opacity: 0, transform: 'translate3d(0,-30px,0)' },
    leave: { opacity: 0 },
  });

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

  useEffect(() => {
    const interval = setInterval(() => {
      setTierIndex(prev => (prev === TIERS.length - 1 ? 0 : prev + 1));
    }, 2000);

    return () => clearImmediate(interval);
  }, []);

  return (
    <Container
      position="relative"
      display="flex"
      justifyContent="center"
      alignItems="center"
      textAlign="center"
      width="100%"
      height="100%"
    >
      <div>
        <TitleBox
          position="absolute"
          top={['15%', '25%']}
          left="50%"
          width="100%"
          margin="0 auto"
          fontWeight="bold"
          fontSize={['35px', '40px']}
        >
          commit.gg
        </TitleBox>
        <Box marginBottom={['15px', '50px']} position="relative">
          <Box fontSize={['16px', '25px']} marginBottom={['12px', '25px']}>
            wanna know your tier on github?
          </Box>
          {transitions.map(({ item, key, props }) => (
            <AnimatedBox
              key={key}
              position="absolute"
              bottom={['-80px', '-90px']}
              left="0px"
              right="0px"
              fontSize={['40px', '45px']}
              display="inline-block"
              paddingBottom="10px"
              fontWeight="bold"
              fontStyle="italic"
              style={props}
            >
              {TIERS[item]}
            </AnimatedBox>
          ))}
        </Box>
        <Box marginTop={['80px', '110px']}>
          <Form method="GET" onSubmit={handleSubmit}>
            <TextField
              id="filled-name"
              label="Github username"
              value={username}
              onChange={handleChange}
              margin="normal"
              variant="filled"
            />
            <Box position="absolute" top="0" right="0" bottom="0">
              <StyledButton
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
              >
                submit
              </StyledButton>
            </Box>
          </Form>
        </Box>
      </div>
    </Container>
  );
};

const Container = styled(Box)`
  background-image: radial-gradient(#d7d7d7 1px, transparent 1px),
    radial-gradient(#d7d7d7 1px, transparent 1px);
  background-position: 0 0, 25px 25px;
  background-size: 50px 50px;
`;

const TitleBox = styled(Box)`
  transform: translateX(-50%);
`;

const Form = styled.form`
  position: relative;
  display: inline-block;
  width: 100%;
  margin-top: 15px;

  > div:first-child {
    margin: 0;
    width: 100%;
  }

  input {
    padding-right: 100px;
  }
`;

const StyledButton = styled(Button)`
  height: 100%;
  width: 90px;
`;

const AnimatedBox = animated(Box);

export default Index;
