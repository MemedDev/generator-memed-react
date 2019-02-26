import * as types from './types';

function reducer(state = [], action) {
  switch (action.type) {
    case types.ADD_TODO:
      // note que aqui ao invés de fazer um push no array
      // estamos retornando um novo array a partir do anterior
      return [
        ...state,
        action.todo,
      ];
    case types.REMOVE_TODO:
      return state.filter((todo) => todo !== action.todo);
    default:
      return state;
  }
}

export default reducer;
