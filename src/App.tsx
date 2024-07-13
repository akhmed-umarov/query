import { useTodosQuery } from "./api/query";
import Todo from "./todo";

function App() {
  const { data, isSuccess, isError } = useTodosQuery();

  if (isError) {
    return (
        <p>Error...</p>
    );
  }

  return (
    <>
      {isSuccess ? (
        <div>
          {data.map((todo) => (
            <Todo key={todo.id} todo={todo} />
          ))}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </>
  ); 
}

export default App;