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
	background-color: ${(props) => props.backgroundColor || 'unset'};
`;

export const Button3 = (props) => {
	return <StyledButton {...props}>{props.children}</StyledButton>;
};
