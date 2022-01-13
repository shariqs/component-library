import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { Select } from './Select';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
	title: 'Select',
	component: Select,
	args: {
		placeholder: 'Select a relative',
		label: 'Favorite Relative',
		value: '',
		testValues: ['mom', 'dad', 'sister', 'brother', 'niece', 'nephew', 'aunt', 'uncle', 'grandma', 'grandpa']
	}
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <Select {...args} />;

export const Standard = Template.bind({});

export const Required = Template.bind({});
Required.args = {
	required: true
};
