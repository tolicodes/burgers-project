import React from 'react';

import Filters from './Filters';

export default {
  title: 'Components/Filters',
  component: Filters,
};

const Template = (args) => <Filters {...args} />;

export const Default = Template.bind({});
Default.args = {};

