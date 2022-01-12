
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { Button } from './Button';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Button',
  component: Button,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <Button {...args} />;

export const Standard = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Standard.args = {
  children: "I am a button"
};

export const With_Icon = Template.bind({});
With_Icon.args = {
  children: (<>
    <FontAwesomeIcon icon={faPlus} />
    Add Item
  </>)
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
  children: (<>
    <FontAwesomeIcon icon={faPlus} />
    Add Item
  </>),
};