import React from 'react';

import Burgers from './Burgers';

import { getBurgers } from '../../api';

export default {
  title: 'Components/Burgers',
  component: Burgers,
};

const Template = (args) => <Burgers {...args} />;

export const Default = Template.bind({});
Default.args = {
    burgers: getBurgers()
};

