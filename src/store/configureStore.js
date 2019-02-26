import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './rootReducer';

export default function () {
  const store = createStore(
    rootReducer,
    applyMiddleware(thunk)
  );

  store.subscribe(() => {
    // aqui dentro eu posso fazer alguma coisa na aplicação toda vez que houver alguma alteração na store, como por exemplo, persistir algum estado no localstorage
  });

  return store;
}
