// src/components/TodoItem.js
import React from 'react';
import { useDispatch } from 'react-redux';
import { removeTodo } from '../redux/todoSlice';

const TodoItem = ({ todo }) => {
  const dispatch = useDispatch();

  return (
    <li>
      {todo.text}
      <button onClick={() => dispatch(removeTodo(todo.id))}>Remove</button>
    </li>
  );
};

export default TodoItem;
