import React from 'react';
import styled from 'styled-components';
import { Message } from 'semantic-ui-react';

const StyledAbout = styled(Message)`
  &&& {
    margin-top: 3rem !important;
  }
`;

const About = () => {
  return (
    <div>
      <StyledAbout info color='blue'>
        <Message.Header>About This App</Message.Header>
        <br />
        <p>This is a full stack React app for keeping contacts</p>
        <p>Version: 1.0.0</p>
      </StyledAbout>
    </div>
  );
};

export default About;
