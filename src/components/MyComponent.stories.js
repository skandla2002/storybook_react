import React from 'react';
// import { MyComponent } from './MyComponent';


// Component 사용시
// export default {
//     // title: 'MyComponent',
//     // component: MyComponent,
// };

// const Template = (args) => <MyComponent {...args}></MyComponent>;

// export const firstStory = Template.bind({});

// firstStory.args = {
//     // 필요한 인자값
// }


// static resource 활용시
import imageFile from './static/image.png';

export default {
    title: 'img'
};

const image = {
    src: imageFile,
    alt: 'my image',
};

export const withAnImage = () => (
    <img src={image.src} alt={image.alt} />
)