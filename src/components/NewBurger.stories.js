import React from 'react';

import NewBurger from './NewBurger';

export default {
  title: 'Components/NewBurger',
  component: NewBurger,
};

const Template = (args) => <NewBurger {...args} />;

export const Default = Template.bind({});
Default.args = {};

export const Error = Template.bind({});
Error.args = {
  burgerName: '"Kales From the Crypt" Burger'
};
