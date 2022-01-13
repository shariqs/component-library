import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { Input } from './Input';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
	title: 'Input',
	component: Input,
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <Input {...args} />;

export const Standard = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Standard.args = {
	required: true,
	label: 'This is a label',
	placeholder: 'This is a placeholder',
	value: ""
};
