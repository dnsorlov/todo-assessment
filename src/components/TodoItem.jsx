import React, { useState }  from 'react'
import PT                   from 'prop-types'
import clnm                 from 'classnames'
import TodoInput            from './TodoInput'

import './TodoItem.styl'

const b = 'TODOItem';

const TodoItem = ({todo, editTodo, deleteTodo, completeTodo}) => {

  const [isActive, setActive] = useState( false );

  const handleDoubleClick = () => 
      setActive( true );

  const handleSave = (id, text) => {
    text.length === 0 
      ? deleteTodo(id)
      : editTodo(id, text);
    
    setActive( false )
  };
  
  const activeItem = 
      <TodoInput 
          value={todo.text}
          editing={isActive}
          onSave={ text => handleSave(todo.id, text)}
      />;
      
  const item = 
      <>
        <input
            className={b+'__toggle'}
            type="checkbox"
            checked={todo.completed}
            onChange={() => completeTodo(todo.id)}
        />
        
        <span className={b+'__label'} onDoubleClick={handleDoubleClick}>
          {todo.text}
        </span>
        
        <button
            className={b+'__delete-btn'}
            onClick={() => deleteTodo(todo.id)}
        />
      </>;


    return (
      <li className={clnm(b, {
        isCompleted: todo.completed,
        isActive: isActive
      })}
      >
        {isActive ? activeItem : item}
      </li>
    )
  
};

TodoItem.propTypes = {
  todo: PT.object.isRequired,
  editTodo: PT.func.isRequired,
  deleteTodo: PT.func.isRequired,
  completeTodo: PT.func.isRequired
};


export default TodoItem