import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useRecoilState, useRecoilValue} from 'recoil';
import { userInfo } from '../stores/userAtom';
import { apiClient } from '../utils/axiosInstance';
import { trigger } from '../stores/todoAtom';


const Newpost = ({newtask,setNewtask}) => {
    const [trig,setTrig]=useRecoilState(trigger);
    const {register,handleSubmit,formState:{error,isSubmitting},reset}=useForm();
    const data1=useRecoilValue(userInfo)
    const addTodo= async (data)=>{
        const {user}=data1;
        const upload={
            title:data.title,
            user:user,
            body:data.description
        }
        const response =await apiClient.post('/todo/create',upload);
        reset()
        setTrig((prev) => prev + 1);
        setNewtask((prev) => !prev);
        
    }
   

    return (
        <form onSubmit={handleSubmit(addTodo)}>
        <div className="max-w-sm mx-auto mt-2 bg-white shadow-lg rounded-2xl p-4">
            <input
                type="text"
                placeholder="Title"
                {...register('title',{required:"Add the title"})}
                className="w-full p-2 mb-2 border text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <textarea
                placeholder="Description"
                {...register('description',{required:"Add description to the todo"})}
                className="w-full p-2 mb-2 border rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
            ></textarea>
            <button className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600" disabled={isSubmitting}>
               {isSubmitting?"Todo Adding":"Add Todod"}
            </button>
        </div>
        </form>
    )
}

export { Newpost }
