import { useEffect, useState } from "react";
import { TodoProvider } from "./contexts";
import { TodoForm, TodoItem } from "./components";

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos((prevTodos) => [{ id: Date.now(), ...todo }, ...prevTodos]);
  }

  const updateTodo = (id, todo) => {
    setTodos((prev) => prev.map((todoItem) => (todoItem.id === id ? todo : todoItem)));
  };

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((todoItem) => todoItem.id !== id));
  };

  const toggleCompleted = (id) => {
    setTodos((prev) =>
      prev.map((todoItem) =>
        todoItem.id === id ? { ...todoItem, completed: !todoItem.completed } : todoItem
      )
    );
  };

  useEffect(() => {
    const todosFromLocalStorage = JSON.parse(localStorage.getItem("todos"));
    if (todosFromLocalStorage && todosFromLocalStorage.length > 0) {
      setTodos(todosFromLocalStorage);
    }
  }, [])

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos])

  return (
    <TodoProvider value={{ todos, addTodo, updateTodo, deleteTodo, toggleCompleted }}>
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
          <div className="mb-4">
            {/* Todo form goes here */}
            <TodoForm />
          </div>
          <div className="flex flex-wrap gap-y-3">
            {/*Loop and Add TodoItem here */}
            {todos.map((todo) => (
              <div key={todo.id} className="w-full">
                <TodoItem todo={todo} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </TodoProvider>
  )
}

export default App
