import { useReducer, useState } from 'react';
import { reducer } from '../providers/reducer';
import { defaultState } from '../providers/defaultState';
import type { Todo } from '../types/IState';
import { addTodo, removeTodo, toggleTodo } from '../providers/actions';



let nextId = 1;

export function TodoList() {
  const [state, dispatch] = useReducer(reducer, defaultState);
  const [text, setText] = useState('');

  const handleAdd = () => {
    if (!text.trim()) return;
    const todo: Todo = { id: nextId++, text, completed: false };
    dispatch(addTodo.action(todo));
    setText('');
  };

 
  return (
    <div className="container my-4">
      <h2 className="mb-4 text-center text-primary">📝 Todo App</h2>

      <div className="input-group mb-3">
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="form-control"
          placeholder="Add a new task"
        />
        <button onClick={handleAdd} className="btn btn-success">
          Add
        </button>
      </div>

      <ul className="list-group">
        {state.todos?.map((todo) => (
          <li
            key={todo.id}
            className="list-group-item d-flex justify-content-between align-items-center"
          >
            <div className="form-check">
              <input
                className="form-check-input me-2"
                type="checkbox"
                checked={todo.completed}
                onChange={() => dispatch(toggleTodo.action(todo.id))}
                id={`todo-${todo.id}`}
              />
              <label
                htmlFor={`todo-${todo.id}`}
                className={`form-check-label ${
                  todo.completed ? 'text-decoration-line-through text-muted' : ''
                }`}
              >
                {todo.text}
              </label>
            </div>

            <button
              className="btn btn-outline-danger btn-sm"
              onClick={() => dispatch(removeTodo.action(todo.id))}
            >
              ❌
            </button>
          </li>
        ))}
      </ul>

      {state.todos?.length === 0 && (
        <p className="text-muted mt-3 text-center">No tasks yet. Add something above ⬆️</p>
      )}
    </div>
  );
}