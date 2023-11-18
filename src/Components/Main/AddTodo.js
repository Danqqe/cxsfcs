import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import './Download.css'

export default function AddTodo({ onAddTodo }) {
  const [title, setTitle] = useState('');
  return (
    <>
      <input
        placeholder="Напишите Ваш коммент"
        value={title}
        onChange={e => setTitle(e.target.value)}
      />
      <div className='add'>
      <Button variant="outline-primary"  onClick={() => {
        setTitle('');
        onAddTodo(title);
      }}>Добавить</Button>
      </div>
    </>
  )
}