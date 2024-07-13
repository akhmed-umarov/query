import { create } from "zustand";
export interface ITodo { 
    name: string, 
    completad: boolean,
    id: number,
}

interface IZustandInterface { 
    loading: boolean,
    todos: ITodo[],
    toggleComplate: (id:number)=> void,
    addTodo: (newTodo: ITodo)=>void
}

export const useTodos = create<IZustandInterface>((set, get)=>({
    todos: [] as ITodo[],
    loading: false,
    toggleComplate: (id:number)=> set((state)=>({
        todos: state.todos.map(todo=> todo.id === id ? {...todo, completad: !todo.completad} : todo)
    })),
    addTodo: (newTodo: ITodo)=>set(state=>({
        todos: [...state.todos, newTodo]
    }))
}))