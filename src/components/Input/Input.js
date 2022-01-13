import React from 'react';
import styled from 'styled-components';
import { Input as AntInput } from 'antd';
import FloatLabel from '../common/floating-label';

export const StyledInput = styled(AntInput)`
	height: 50px;

	/* Use &&& for !important overrides */
	&&& {
		padding-top: 16px !important;
		box-shadow: none !important;
  	}
`;

export const Input = React.forwardRef(function Input({required, label, placeholder, value, ...other}, ref) {
	return (
		<FloatLabel required={required} label={label} placeholder={placeholder} value={value}>
			<StyledInput value={value} {...other} />
		</FloatLabel>
	);
});