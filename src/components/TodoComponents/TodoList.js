import React from 'react';
import Todo from './Todo';


const TodoList = ({ errands, toggleCompleted }) => {
  

  return (
    <ol className='errandList'>{errands.map(item => (
      <li>
      <Todo
        key={item.id}
        item={item}
        toggleCompleted={toggleCompleted}
        />
      </li>
    ))}
      
    </ol>
);
};

export default TodoList