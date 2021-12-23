/* eslint-disable no-nested-ternary */

import React from 'react';
import styled from 'styled-components';

export const StyledButton = styled.button`
  width: 100px;
  height: 100px;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;

const Button = React.forwardRef(function Button() {
  return <StyledButton>Hello World</StyledButton>;
});

export default Button;
