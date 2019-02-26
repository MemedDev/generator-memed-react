import React from 'react';
import PropTypes from 'prop-types';

const Todo = ({ todo }) => (<li className="todo">{todo}</li>);

Todo.propTypes = {
  todo: PropTypes.string
};

export default Todo;
