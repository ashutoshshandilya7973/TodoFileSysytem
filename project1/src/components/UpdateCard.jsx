import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { apiClient } from '../utils/axiosInstance';
import { trigger } from '../stores/todoAtom';
import { useRecoilState } from 'recoil';
const UpdateCard = ({update,setUpdate}) => {
    const [trig,setTrig]=useRecoilState(trigger);
        const { register, handleSubmit, formState: { error, isSubmitting }, reset } = useForm();
     const updateTodo= async (data)=>{
        const data1={
            id:update,
            title:data.title,
            body:data.description
        }
        const response = await apiClient.post('/todo/update',data1);
        
        reset();
        setTrig((prev)=>prev+1);

        setUpdate(0);

    }
    
    
  return (
    <form onSubmit={handleSubmit(updateTodo)}>
            <div className="max-w-sm mx-auto mt-2 bg-white shadow-lg rounded-2xl p-4">
                <input
                    type="text"
                    placeholder="Update The Title"
                    {...register('title', { required: "Add the title" })}
                    className="w-full p-2 mb-2 border text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
                <textarea
                    placeholder="Update The Description"
                    {...register('description', { required: "Add description to the todo" })}
                    className="w-full p-2 mb-2 border rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
                ></textarea>
                <button className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600" disabled={isSubmitting}>
                    {isSubmitting ? "Updating Todo" : "Update The Todo"}
                </button>
            </div>
        </form>
  )
}

export { UpdateCard}
