import React from 'react'
import { Navbar } from '../Navbar'
const Home = () => {
    return (
        <div>
            <Navbar />
            <div className="h-screen flex">
                <div className="h-full w-[20%] text-white border-red-950 border-solid border">
                    <div className="bg-neutral-800 rounded-md p-3 m-3 ">
                        <h1 className='text-xl font-bold'>Yout Todo</h1>
                    </div>
                    <div className="bg-neutral-800 rounded-md p-3 m-3">
                        <img src="/dashboard.png" alt="Dashboard Icon" />
                        <h3>Dashboard</h3>
                    </div>
                </div>
                <div className="h-full w-full text-white bg-white border-red-950 border-solid border overflow-y-auto  p-4">
                    <div className=" flex justify-between  w-full">
                        <h1 className='text-black  text-4xl '>My Todo</h1>
                        <div className="bg-blue-600 text-white h-10 flex items-center gap-2 px-4 py-2 rounded-md cursor-pointer hover:bg-blue-700">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 2a1 1 0 011 1v6h6a1 1 0 110 2h-6v6a1 1 0 11-2 0v-6H3a1 1 0 110-2h6V3a1 1 0 011-1z" clipRule="evenodd" />
                            </svg>

                            <span className="text-sm font-medium">New Task</span>
                        </div>
                    </div>
                    <div className="border-b-[1px] border-stone-700 p-1"></div>
                    <div className="p-3">
                        <div className="">
                            <label className="input input-bordered flex items-center gap-2 w-40 h-10 p-2">
                                <input type="text" className="grow h-full" placeholder="Search" />
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 16 16"
                                    fill="currentColor"
                                    className="h-5 w-5 opacity-70">
                                    <path
                                        fillRule="evenodd"
                                        d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            </label>

                        </div>

                    </div>

                </div>
            </div>
        </div>
    )
}

export default Home
