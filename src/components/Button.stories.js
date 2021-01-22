import React from 'react';
import { Button } from './Button';

export const Primary = () => <Button primary>Button</Button>

const Template = (args) => <Button {...args}></Button>

export const Primary = Template.bind({});

Primary.args = {
    primary: true,
    label: 'Button'
}