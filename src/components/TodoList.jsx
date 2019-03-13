import React from 'react'
import PT from 'prop-types'
import TodoItem from './TodoItem'

import './TodoList.styl'

const TodoList = ({ todos, actions }) => (
  <ul className="TODOList">
    {todos.map(todo =>
      <TodoItem key={todo.id} todo={todo} {...actions} />
    )}
  </ul>
);

TodoList.propTypes = {
  todos: PT.arrayOf(PT.object).isRequired,
  actions: PT.object.isRequired
};

export default TodoList
