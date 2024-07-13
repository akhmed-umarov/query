import { useForm, SubmitHandler } from 'react-hook-form';
import { ITodo } from '.';


const AddTodos = ({ addTodo }: {addTodo: (newTodo: ITodo)=>void}) => {
    const { register, handleSubmit, formState: { errors } } = useForm<Omit<ITodo, 'id'>>();
    const onSubmit:SubmitHandler<Omit<ITodo, 'id'>> =(data)=>{ 
        addTodo({...data, id: 1})
    }
    return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="name">Имя</label>
        <input
          id="name"
          {...register('name', { required: true, minLength: 5 })}
        />
        {errors.name && errors.name.type === 'required' && <span>Имя обязательно для заполнения</span>}
        {errors.name && errors.name.type === 'minLength' && <span>Имя должно содержать не менее 5 символов</span>}
      </div>

      <div>
        <label htmlFor="completad">completad</label>
        <input type="checkbox" id="completad" {...register('completad')} />
      </div>

      <button type="submit">Отправить</button>
    </form>
    );
};

export default AddTodos;