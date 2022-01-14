import React from 'react';
import styled from 'styled-components';
import { Button as AntButton } from 'antd';

export const StyledButton = styled(AntButton)`
`;

export const Button = React.forwardRef(function Button(props, ref) {
	return <StyledButton {...props}>{props.children}</StyledButton>;
});
