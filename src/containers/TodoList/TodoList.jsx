import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Todo from '../../components/Todo';

class Todos extends Component {
  constructor(props) {
    super(props);

    this.state = {
      newTodo: '',
    };
  }

  handleNewTodoChange = (e) => {
    this.setState({
      newTodo: e.target.value,
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();

    const { newTodo } = this.state;

    if (newTodo.trim()) {
      const { addTodoItem } = this.props;

      addTodoItem(newTodo);
      this.setState({ newTodo: '' });
    }
  }

  render() {
    const { newTodo } = this.state;
    const { todos } = this.props;

    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            placeholder="Adicionar a lista..."
            value={newTodo}
            onChange={this.handleNewTodoChange}
          />
        </form>
        <ul>
          {todos.map((todo) => <Todo key={`${todo}`} todo={todo} />)}
        </ul>
      </div>
    );
  }
}

Todos.propTypes = {
  todos: PropTypes.array,
  addTodoItem: PropTypes.func,
};

export default Todos;
