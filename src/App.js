import './App.css';
import ToDoList from './component/Todo/ToDoList';
import UserList from './component/Users/UserList';

function App() {
  return (
    <div className="App">
      <h1>Todo list</h1>
      <ToDoList/>
      <h1>Manager User</h1>
      <UserList/>
    </div>
  );
}

export default App;
