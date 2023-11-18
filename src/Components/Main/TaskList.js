import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import './Download.css'

export default function TaskList({
  todos,
  onChangeTodo,
  onDeleteTodo
}) {
  return (
    <ull>
      {todos.map(todo => (
        <lii key={todo.id}>
          <Task
            todo={todo}
            onChange={onChangeTodo}
            onDelete={onDeleteTodo}
          />
        </lii>
      ))}
    </ull>
  );
}

function Task({ todo, onChange, onDelete }) {
  const [isEditing, setIsEditing] = useState(false);
  let todoContent;
  if (isEditing) {
    todoContent = (
      <>
        <input
          value={todo.title}
          onChange={e => {
            onChange({
              ...todo,
              title: e.target.value
            });
          }} />
          <div className='save'>
        <Button variant="outline-primary" onClick={() => setIsEditing(false)}>
          Сохранить
        </Button>
        </div>
      </>
    );
  } else {
    todoContent = (
      <>
        {todo.title}
        <div className='edit'>
        <Button variant="outline-primary" onClick={() => setIsEditing(true)}>
          Изменить
        </Button>
        </div>
      </>
    );
  }
  return (
    <label>
      {todoContent}
      <Button variant="outline-primary" onClick={() => onDelete(todo.id)}>
        Удалить
      </Button>
    </label>
  );
}