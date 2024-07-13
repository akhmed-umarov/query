import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { ITodo } from "../todo";

export const BASE_URL = 'https://jsonplaceholder.typicode.com';

export const useTodosQuery = ()=>{ 
    return useQuery<ITodo[]>({
        queryFn: async ()=>{
            const response = await fetch(`${BASE_URL}/todos`);
            return await response.json();
        },
        queryKey: ['todos'],
    })
}

export const useTodosChangeCompletedMutation = (id: number)=>{ 
    const queryClient = useQueryClient();
    return useMutation<ITodo[]>({
        mutationFn: async ()=>{
            const response = await fetch(`${BASE_URL}/todos/${id}`, {
                method: 'PATCH',
                body: JSON.stringify({
                  completed: true,
                }),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            });
            return await response.json();
        },

        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['todos'] })
        },
    })
}