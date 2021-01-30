# StoryBook 추가: 아래 3가지 화면을 가지고 개발 진행함

## 설치

```
# Create our application:
npx create-react-app taskbox

cd taskbox

# Add Storybook:
npx -p @storybook/cli sb init
```

### 실행

```
# Run the test runner (Jest) in a terminal:
yarn test --watchAll

# Start the component explorer on port 6006:
yarn storybook

# Run the frontend app proper on port 3000:
yarn start
```

### 추가 설정 파일

- index.css 파일 적용 [LINK](https://github.com/chromaui/learnstorybook-code/blob/master/src/index.css)
- font, icon 설치

```
npx degit chromaui/learnstorybook-code/src/assets/font src/assets/font
npx degit chromaui/learnstorybook-code/src/assets/icon src/assets/icon
```

### 간단한 컴포넌트 만들기

- CDD(Component-Driven Development) 개발

  > title – task를 설명해주는 문자열
  > state - 현재 어떤 task가 목록에 있으며, 선택되어 있는지의 여부

- 설정하기

  > src/components/Task.js와 src/components/Task.stories.js을 생성

- default export 생성

  > component -- 해당 컴포넌트,
  > title -- Storybook 앱의 사이드바에서 컴포넌트를 참조하는 방법,
  > excludeStories -- Storybook에서 스토리를 내보낼 때 렌더링에서 제외하는 것
  > argTypes -- 각각의 스토리에서 인수(args)의 행동 방식을 명시합니다.

- 구성

  > Storybook 구성 파일 (.storybook/main.js, preview.js) 변경
  > 매개변수(parameters)는 일반적으로 Storybook의 기능과 애드온의 동작을 제어하기 위하여 사용됨. 이를 사용하여 actions(mocked callbacks)이 처리되는 방식을 구성함

- States 구현하기

  > src/components/Task.js 내 구현

- 데이터 요구 사항 명시하기

  > PropTypes 사용

- 자동화된 테스트
  > 스냅샷 테스트[LINK](https://github.com/storybookjs/storybook/tree/master/addons/storyshots)
  > 아래 addon 추가 후 storybook.test.js 생성 하여 구현, 이후 yarn test로 테스트 실행가능

```
yarn add -D @storybook/addon-storyshots react-test-renderer
```

### 복합적 컴포넌트 만들기

- Tasklist 생성
  > taskList.js, taskList.stories.js 생성
  > 데코레이터(Decorators)는 스토리에 임의의 래퍼(wrapper)를 제공하는 한 방법입니다. 위의 예시에서 우리는 데코레이터 `key`를 사용하여 기본 내보내기에서 렌더링 된 컴포넌트에 `padding`을 추가합니다. 또한 데코레이터는 “providers”(React context를 설정하는 라이브러리 컴포넌트)에서 스토리를 감싸 줄 때 사용될 수 있습니다.

### 데이터 연계

- 리덕스로 데이터 연계(컨테이너 컴포넌트 패턴)

```
yarn add react-redux redux
```

- src/app.js에 연결하여 컴포넌트 완료

### 화면 구성하기

### 배포하기
> 빌드하기
```node
yarn build-storybook
// 실행하면 storybook-static 디렉터리에 정적인 Storybook이 생성
```
> chromatic에 배포하기
```
yarn add -D chromatic
```
> 설치 후 https://www.chromatic.com 에서 github 연결 및 project-token 받기,  GitHub secrets[Link](https://docs.github.com/en/actions/reference/encrypted-secrets) 을 사용하면 푸시할때 바로 빌드되는 구조로 사용 가능
> 실행
`yarn chromatic --project-token=<project-token>`
> 결과 링크 받아서 공유 하기

> Storybook을 배포하기 위해 GitHub 액션 추가하기


### 테스트
- 수동 테스트
- 스냅샷 테스트
- 단위 테스트
- 시각적 테스트

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `yarn build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

## 최초 로컬 커밋과 서버의 history가 맞지 않는 경우

```
git remote add origin (git URL)
git pull origin --allow-unrelated-histories
git push
```

## Sass로 구축 하는 방안 고려 [Link](https://sass-lang.com/guide)

1. Variables / Nesting

- SCSS

```css
$font-stack: Helvetica, sans-serif;
$primary-color: #333;

body {
  font: 100% $font-stack;
  color: $primary-color;
}

nav {
  ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  li {
    display: inline-block;
  }

  a {
    display: block;
    padding: 6px 12px;
    text-decoration: none;
  }
}
```

- CSS

```css
body {
  font: 100% Helvetica, sans-serif;
  color: #333;
}

nav ul {
  margin: 0;
  padding: 0;
  list-style: none;
}
nav li {
  display: inline-block;
}
nav a {
  display: block;
  padding: 6px 12px;
  text-decoration: none;
}
```

---

2. Modules

- SCSS

```css
// _base.scss
$font-stack: Helvetica, sans-serif;
$primary-color: #333;

body {
  font: 100% $font-stack;
  color: $primary-color;
}
// styles.scss
@use 'base';

.inverse {
  background-color: base.$primary-color;
  color: white;
}
```

- CSS

```css
body {
  font: 100% Helvetica, sans-serif;
  color: #333;
}

.inverse {
  background-color: #333;
  color: white;
}
```

3. Mixins

- SCSS

```css
@mixin transform($property) {
  -webkit-transform: $property;
  -ms-transform: $property;
  transform: $property;
}
.box {
  @include transform(rotate(30deg));
}
```

- CSS

```css
.box {
  -webkit-transform: rotate(30deg);
  -ms-transform: rotate(30deg);
  transform: rotate(30deg);
}
```

4. Extend/Inheritance

- SCSS

```css
/* This CSS will print because %message-shared is extended. */
%message-shared {
  border: 1px solid #ccc;
  padding: 10px;
  color: #333;
}

// This CSS won't print because %equal-heights is never extended.
%equal-heights {
  display: flex;
  flex-wrap: wrap;
}

.message {
  @extend %message-shared;
}

.success {
  @extend %message-shared;
  border-color: green;
}

.error {
  @extend %message-shared;
  border-color: red;
}

.warning {
  @extend %message-shared;
  border-color: yellow;
}
```

- CSS

```css
/* This CSS will print because %message-shared is extended. */
.message,
.success,
.error,
.warning {
  border: 1px solid #ccc;
  padding: 10px;
  color: #333;
}

.success {
  border-color: green;
}

.error {
  border-color: red;
}

.warning {
  border-color: yellow;
}
```

5. Operators

- SCSS

```css
.container {
  width: 100%;
}

article[role="main"] {
  float: left;
  width: 600px / 960px * 100%;
}

aside[role="complementary"] {
  float: right;
  width: 300px / 960px * 100%;
}
```

- CSS

```css
.container {
  width: 100%;
}

article[role="main"] {
  float: left;
  width: 62.5%;
}

aside[role="complementary"] {
  float: right;
  width: 31.25%;
}
```
