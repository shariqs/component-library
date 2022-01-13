import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { Input } from './Input';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
	title: 'Input',
	component: Input,
	args: {
		label: "This is a label",
		placeholder: "This is a placeholder",
		value: ""
	}
};


// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <Input {...args} />;

export const Standard = Template.bind({});

export const Required = Template.bind({});
Required.args = {
	required: true,
};

export const With_Error = Template.bind({});
With_Error.args = {
	required: true,
};
