import React from 'react';
import { MyComponent } from './MyComponent';

export default {
    title: 'MyComponent',
    component: MyComponent,
};

const Template = (args) => <MyComponent {...args}></MyComponent>;

export const firstStory = Template.bind({});

firstStory.args = {
    // 필요한 인자값
}