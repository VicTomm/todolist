import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import todo from '../reducers/todo';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
  const store = createStore(todo);

  return store;
};
