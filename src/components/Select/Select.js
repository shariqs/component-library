import React from 'react';
import styled from 'styled-components';
import { Select as AntSelect } from 'antd';
import FloatLabel from '../common/floating-label';

const { Option } = AntSelect;

export const StyledSelect = styled(AntSelect)`
	width: 100%;

	/* Use &&& for !important overrides */
	&&& {
		.ant-select-selector {
			height: 50px !important;
		}

		.ant-select-selection-item {
			position: relative;
			top: 15px;
		}
	}
`;

export const Select = React.forwardRef(function Select({ testValues = [], required, label, placeholder, value, children, height, ...other }, ref) {
	// This function meant for testing w/ storybook only
	// Type into 'value' arg to 'select' a child
	if (testValues.length > 0) {
		children = [];
		testValues.forEach((value) => {
			children.push(<Option value={value}>{value.toUpperCase()}</Option>);
		});
	}

	return (
		<FloatLabel required={required} label={label} placeholder={placeholder} value={value}>
			<StyledSelect value={value} {...other}>
				{children}
			</StyledSelect>
		</FloatLabel>
	);
});
