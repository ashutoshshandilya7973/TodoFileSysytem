import React, {Suspense, useEffect, useState } from 'react'
import { Navbar } from '../Navbar'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { ProfileCard } from '../Card';
import { Newpost } from '../Newpost';
import { getTodo } from '../../stores/todoAtom';
import { useRecoilValue } from 'recoil';
const Home = () => {
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);
    const [newtask, setNewtask] = useState(false);
    
    
        const data =useRecoilValue(getTodo)
    
        


    return (
        

        <div className="min-h-screen flex flex-col">
            <Navbar />
            <div className="flex flex-1">
                <div className="h-full w-full sm:w-[20%] text-white border-red-950 border-solid border bg-neutral-900 p-4">
                    <div className="bg-neutral-800 rounded-md p-3 mb-3">
                        <h1 className='text-xl font-bold'>Your Todo</h1>
                    </div>
                    <div className="bg-neutral-800 rounded-md p-3 flex items-center gap-2">
                        <img src="/dashboard.png" alt="Dashboard Icon" className="w-6 h-6" />
                        <h3>Dashboard</h3>
                    </div>
                </div>
                <div className="flex-1 text-white bg-white border-red-950 border-solid border overflow-y-auto p-4">
                    <div className="flex flex-col sm:flex-row justify-between w-full gap-4">
                        <h1 className='text-black text-3xl sm:text-4xl'>My Todo</h1>
                        <div className="bg-blue-600 text-white h-10 flex items-center gap-2 px-4 py-2 rounded-md cursor-pointer hover:bg-blue-700">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 2a1 1 0 011 1v6h6a1 1 0 110 2h-6v6a1 1 0 11-2 0v-6H3a1 1 0 110-2h6V3a1 1 0 011-1z" clipRule="evenodd" />
                            </svg>
                            <span className="text-sm font-medium">New Task</span>
                        </div>
                    </div>
                    <div className="border-b-[1px] border-stone-700 my-3"></div>
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <label className="input input-bordered flex items-center w-full md:w-52 h-10 p-1">
                            <input type="text" className="grow h-full" placeholder="Search" />
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="h-5 w-10 opacity-70">
                                <path fillRule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clipRule="evenodd" />
                            </svg>
                        </label>
                        <div id="date-range-picker" className="flex flex-col sm:flex-row items-center gap-2">
                            <DatePicker
                                selected={startDate}
                                onChange={(date) => setStartDate(date)}
                                selectsStart
                                startDate={startDate}
                                endDate={endDate}
                                placeholderText="Start Date"
                                isClearable
                                className="border p-2 rounded-md w-full sm:w-auto"
                            />
                            <span className="text-gray-500">to</span>
                            <DatePicker
                                selected={endDate}
                                onChange={(date) => setEndDate(date)}
                                selectsEnd
                                startDate={startDate}
                                endDate={endDate}
                                placeholderText="End Date"
                                isClearable
                                className="border p-2 rounded-md w-full sm:w-auto"
                            />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
                        <div className="bg-sky-100 h-full text-black rounded-lg p-3">
                            <div className="p-2 flex gap-2 items-center text-base font-bold">
                                <div className="h-1 w-1 bg-blue-600 rounded-full p-[6px]"></div>
                                <h1>All Todo</h1>
                            </div>
                            {  
                               
                                data.map((data)=>{
                                     return <ProfileCard key={data.id} title={data.title} body={data.body} id={data.id} />
                                })
                            }                         

                          
                            <div className="bg-blue-600 text-white w-52 mt-3  h-10 flex items-center gap-2 px-4 py-2 rounded-md cursor-pointer hover:bg-blue-700" onClick={()=>setNewtask(!newtask)}>
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M10 2a1 1 0 011 1v6h6a1 1 0 110 2h-6v6a1 1 0 11-2 0v-6H3a1 1 0 110-2h6V3a1 1 0 011-1z" clipRule="evenodd" />
                                </svg>
                                <span className="text-sm font-medium">New Task</span>
                            </div>
                            {
                                newtask && <Newpost newtask={newtask} setNewtask={setNewtask}/>
                            }
                        </div>
                        <div className="bg-sky-100 h-full text-black rounded-lg p-3">
                            <div className="p-2 flex gap-2 items-center text-base font-bold">
                                <div className="h-1 w-1 bg-orange-500 rounded-full p-[6px]"></div>
                                <h1>In Progress</h1>
                            </div>
                            {
                                data.map((data)=>{
                                    if(!data.isCompleted){
                                        return <ProfileCard key={data.id} title={data.title} body={data.body} id={data.id}/>
                                    }
                                })
                            }

                        </div>
                        <div className="bg-sky-100 h-full text-black rounded-lg p-3">
                            <div className="p-2 flex gap-2 items-center text-base font-bold">
                                <div className="h-1 w-1 bg-green-800 rounded-full p-[6px]"></div>
                                <h1>Completed</h1>
                            </div>
                            {
                                data.map((data)=>{
                                    if(data.isCompleted){
                                        return <ProfileCard key={data.id} title={data.title} body={data.body} id={data.id}/>
                                    }
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
        

    )
}

export default Home
