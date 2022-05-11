import React from "react";

import { Provider } from "react-redux";

import { MemoryRouter, Switch, Route } from "react-router-dom";

const TestApp = ({ store, children }) => {
  return (
    <Provider store={store}>
      <MemoryRouter>
        <Switch>
          <Route path="/">{children}</Route>
        </Switch>
      </MemoryRouter>
    </Provider>
  );
};

export default TestApp;
