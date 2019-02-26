/**
 * O arquivo index.js de cada módulo, é utilizado somente como um entry point para nosso duck
 *
 * Ele exporta como default o reducer.
 * Ele exporta como named export as actions, selectors, operations do nosso duck.
 * Opcionalmente ele exporta nossos types caso eles sejam necessários em outros ducks.
 */

import reducer from './reducers';

import * as todoActions from './actions';
import * as todoTypes from './types';

export {
  todoActions,
  todoTypes
};

export default reducer;
