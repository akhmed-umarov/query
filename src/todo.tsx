import React from "react";
import type { ITodo } from './zustand/index';

const Todo = React.memo(({ todo: {id, name, completad}, toggleComplate }: {todo: ITodo, toggleComplate: (id:number)=>void}) => {
    return (
        <div className={`${completad ? 'bg-green-700 translate-x-10' : 'bg-red-700'} duration-500 m-4 w-52 h-36 rounded-lg flex flex-col justify-center`}>
            <div className="flex flex-col justify-center items-center mb-4">
                <h3>Todo name: {name}</h3> 
                <h3>Todo id: {id}</h3> 
            </div>
           <div className="flex justify-center items-center bg-slate-700 select-none p-2 cursor-pointer" onClick={()=>toggleComplate(id)}>
            <input type='checkbox' id={`${id}`} checked={completad} />
           </div>
        </div>
    );
});

export default Todo;