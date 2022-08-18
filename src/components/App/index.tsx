import React, { FC } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { lightTheme } from '../../theme';
import { Card, Center } from 'atoms';
import { LocationContainer } from 'contexts';
import { DynamicBackground, Search, Stages } from 'molecules';

const Styles = {
  Header: styled.div`
    display: flex;
    background-color: #fff;
    height: 80px;
    padding: 0 18px;
  `,
  Body: styled.div``,
  Footer: styled.div`
    background-color: #fff;
    height: 20px;
  `,
};

const App: FC = () => {
  return (
    <ThemeProvider theme={lightTheme}>
      <LocationContainer>
        <DynamicBackground>
          <Center>
            <Card>
              <Styles.Header>
                <Search />
              </Styles.Header>
              <Styles.Body>
                <Stages />
              </Styles.Body>
              <Styles.Footer />
            </Card>
          </Center>
        </DynamicBackground>
      </LocationContainer>
    </ThemeProvider>
  );
};

export default App;
