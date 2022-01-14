import React from 'react';
import styled from 'styled-components';
import { Button as AntButton } from 'antd';

export const StyledButton = styled(AntButton)`
	span span {
		margin-left: 10px;
	}
`;

export const Button = React.forwardRef(function Button(props, ref) {
	return <StyledButton {...props}>{props.children}</StyledButton>;
});
