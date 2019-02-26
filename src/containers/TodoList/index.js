import { connect } from 'react-redux';
import { addTodo } from '../../store/todos/actions';
import TodoList from './TodoList';

const mapStateToProps = ({ todos }) => ({ todos });

const mapDispatchToProps = { addTodoItem: addTodo };


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);
