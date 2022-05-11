import { createStore, applyMiddleware, compose } from "redux";

import createSagaMiddleware from "redux-saga";

import itunesSaga from "./itunesSaga";
import rootReducer from "./rootReducer";

const buildStore = (initialState) => {
  const sagaMiddleware = createSagaMiddleware();

  const composeEnhancers =
    typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
          // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
        })
      : compose;
  const enhancer = composeEnhancers(applyMiddleware(sagaMiddleware));
  const store = createStore(rootReducer, initialState, enhancer);

  sagaMiddleware.run(itunesSaga);

  return store;
};
export default buildStore;
