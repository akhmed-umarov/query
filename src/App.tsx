import { useCallback } from "react";
import Todo from "./todo";
import { useTodos } from "./zustand";
import AddTodos from "./zustand/addTodos";

function App() {
  const { todos, loading, toggleComplate, addTodo } = useTodos();

  const toggleComplateLocal = useCallback((id:number)=>{
    toggleComplate(id)
  }, [toggleComplate])

  if (loading) {
    return (
        <p>loading...</p>
    );
  }

  return (
    <>
      <AddTodos addTodo={addTodo}/>
      <div>
        {todos.map((todo) => (
          <Todo key={todo.id} todo={todo} toggleComplate={toggleComplateLocal}/>
        ))}
      </div>
    </>
  ); 
}

export default App;