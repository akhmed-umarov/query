export interface ITodo { 
    id: number;
    userId: number;
    title: string;
    completed: boolean;
}

const Todo = ({ todo: {userId, id, title, completed}}: {todo: ITodo }) => {
    return (
        <div className='bg-slate-200 m-4'>
           <h3>Todo title: {title}</h3> 
           <h3>Todo id: {id}</h3> 
           <h3>Todo userId: {userId}</h3> 
           <input type='checkbox' id={`${id}`} checked={completed}/>
        </div>
    );
};

export default Todo;