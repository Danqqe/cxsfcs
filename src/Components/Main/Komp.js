import { useState } from 'react';
import AddTodo from './AddTodo.js';
import TaskList from './TaskList.js';
import Stack from 'react-bootstrap/Stack';
import { Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import './Download.css'

let nextId = 3;
const initialTodos = [

];

export default function TaskApp() {
  const [todos, setTodos] = useState(initialTodos);

  function handleAddTodo(title) {
    setTodos([
      ...todos,
      {
        id: nextId++,
        title: title,
        done: false
      }
    ]);
  }

  function handleChangeTodo(nextTodo) {
    setTodos(todos.map(t => {
      if (t.id === nextTodo.id) {
        return nextTodo;
      } else {
        return t;
      }
    }));
  }

  function handleDeleteTodo(todoId) {
    setTodos(
      todos.filter(t => t.id !== todoId)
    );
  }

  return (
    <>
        <div className="MainContent">
    <Navbar className='mainHeader'>
      <Container>
        <Link to="/Werdikt">
        <h3 href="#home" className="navtext">Блог рецептов  </h3>
        </Link>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <h3 className='pice'> Комментарии к Пасте Карбонара</h3>
    </div>
    <div className='comment'>
      <AddTodo
        onAddTodo={handleAddTodo}
      />
      <TaskList
        todos={todos}
        onChangeTodo={handleChangeTodo}
        onDeleteTodo={handleDeleteTodo}
      />
      </div>
    </>
  );
}