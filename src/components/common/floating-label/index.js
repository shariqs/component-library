import React, { useState } from 'react';
import styled from 'styled-components';

export const StyledFloatWrapper = styled.div`
	display: flex;
	flex: 1;
	position: relative;
	overflow: hidden;
	white-space: nowrap;
	text-overflow: ellipsis;

	.required {
		/* color: $primary-color; */
		color: #ff0000;
		opacity: 0.5;
	}

	.placeholder {
		display: flex;
		position: absolute;
		opacity: 0.5;
		top: 20px;
		left: 12px;
	}

	.label {
		/* color: $dark-gray; */
		font-size: 15px;
		position: absolute;
		pointer-events: none;
		left: 12px;
		top: 12px;
		transition: 0.2s ease all;
		z-index: 2;
	}

	.label-float {
		top: 6px;
		font-size: 11px;
	}

	.disabled {
		opacity: 0.6;
	}
`;

const FloatLabel = ({ children, label, value, placeholder, required, className, style, labelStyle, placeholderStyle }) => {
	const [focus, setFocus] = useState(false);

	const isFocused = focus || (value && value.length !== 0);
	let labelClass = isFocused ? 'label label-float ' : 'label ';

	let wrapperClass = 'float-label noselect ';
	if (className) wrapperClass = wrapperClass.concat(className);

	// console.log('FloatLabel: ', { isFocused, focus, value });

	return (
		<StyledFloatWrapper className={wrapperClass} onBlur={() => setFocus(false)} onFocus={() => setFocus(true)} style={style}>
			{children}
			{focus && !value && (
				<div className={'placeholder noselect'} style={placeholderStyle}>
					{placeholder}
				</div>
			)}
			<label className={labelClass} style={labelStyle}>
				<span className={'required noselect'}>{required && '* '}</span> {label}
			</label>
		</StyledFloatWrapper>
	);
};

export default FloatLabel;
