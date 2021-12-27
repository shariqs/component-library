
import React from 'react';

import { Button2 } from './Button2';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Button2',
  component: Button2,
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <Button2 {...args} />;

export const Primary = Template.bind({});
Primary.args = { background: '#ff0', label: 'Button' };
