import { useTodosChangeCompletedMutation } from "./api/query";

export interface ITodo { 
    id: number;
    userId: number;
    title: string;
    completed: boolean;
}

const Todo = ({ todo: {userId, id, title, completed}}: {todo: ITodo }) => {

    const { mutate } = useTodosChangeCompletedMutation(id);

    return (
        <div className={`${completed ? 'bg-green-700 translate-x-10' : 'bg-red-700'} duration-500 m-4 w-52 h-36 rounded-lg`}>
           <h3>Todo title: {title}</h3> 
           <h3>Todo id: {id}</h3> 
           <h3>Todo userId: {userId}</h3>
           <div onClick={()=> mutate()}>
           <input type='checkbox' id={`${id}`} checked={completed} />
           <label htmlFor={`${id}`} className="cursor-pointer" >
            Change completed
           </label>
           </div>
        </div>
    );
};

export default Todo;