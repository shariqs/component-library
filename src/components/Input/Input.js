import React from 'react';
import styled from 'styled-components';
import { Input as AntInput } from 'antd';
import FloatLabel from '../common/floating-label';

export const StyledInput = styled(AntInput)`
	height: 50px;

	/* Use &&& for !important overrides */
	&&& {
		padding-top: 16px !important;
  	}
`;

export const Input = React.forwardRef(function Input({required, label, placeholder, value, ...other}, ref) {
	console.log("input: ", {required, label, placeholder, value, ...other})
	return (
		<FloatLabel required={required} label={label} placeholder={placeholder} value={value}>
			<StyledInput value={value} {...other} />
		</FloatLabel>
	);
});

// export const Input = React.forwardRef(function Input({required, label, placeholder, ...other}, ref) {
// 	const [value, setValue] = useState("");

// 	console.log("input: ", {required, label, placeholder, value, ...other, ref})
// 	return (
// 		<FloatLabel required={required} label={label} placeholder={placeholder} value={value}>
// 			<StyledInput value={value} onChange={(e) => setValue(e.target.value)} {...other} />
// 		</FloatLabel>
// 	);
// });
