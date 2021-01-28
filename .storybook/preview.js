// export const parameters = {
//   actions: { argTypesRegex: "^on[A-Z].*" },
// }

import "../src/index.css";

// 매개변수(parameters)는 일반적으로 Storybook의 기능과 애드온의 동작을 제어하기 위하여 사용됩니다.
// 우리의 경우에는 이를 사용하여 actions(mocked callbacks)이 처리되는 방식을 구성할 것입니다.

// actions은 클릭이 되었을때 Storybook UI의 actions 패널에 나타날 콜백을 생성할수 있도록 해줍니다.
// 따라서 핀 버튼을 만들 때, 버튼 클릭이 성공적이었는지 테스트 UI에서 확인 할 수 있을 것입니다.
export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
};
