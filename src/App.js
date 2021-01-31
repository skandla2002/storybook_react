import React from "react";
import { Provider } from "react-redux";
import store from "./lib/redux";

import InboxScreen from "./components/InboxScreen";
import "./index.css";

function App() {
  return (
    // store는 프로젝트 1개당 1개만 유지함(Redux의 원칙)
    <Provider store={store}>
      <InboxScreen />
    </Provider>
  );
}

export default App;
