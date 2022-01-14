import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faPlus } from '@fortawesome/free-solid-svg-icons';
import { Button } from './Button';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
	title: 'Button',
	component: Button
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <Button {...args} />;

export const Standard = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Standard.args = {
	children: 'I am a button'
};

export const With_Icon = Template.bind({});
With_Icon.args = {
	children: (
		<>
			<FontAwesomeIcon icon={faPlus} />
			<span>Add Item</span>
		</>
	)
};

export const Icon_Only = Template.bind({});
Icon_Only.args = {
	children: (
		<>
			<FontAwesomeIcon icon={faBars} />
		</>
	)
};


export const Disabled = Template.bind({});
Disabled.args = {
	disabled: true,
	children: (
		<>
			<FontAwesomeIcon icon={faPlus} />
			<span>Add Item</span>
		</>
	)
};

export const Loading = Template.bind({});
Loading.args = {
	isLoading: true,
	children: (
		<>
			<FontAwesomeIcon icon={faPlus} />
			<span>Adding Item</span>
		</>
	)
};
