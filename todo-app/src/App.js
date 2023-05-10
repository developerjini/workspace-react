import TodoInsert from './components/TodoInsert';
import TodoTemplate from './components/TodoTemplate.js';
import TodoList from './components/TodoList';

function App() {
  return (
    <TodoTemplate>
      <TodoInsert />
      <TodoList />
    </TodoTemplate>
  );
}

export default App;
