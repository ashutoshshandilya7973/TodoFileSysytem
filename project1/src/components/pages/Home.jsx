import React, { useState } from 'react'
import { Navbar } from '../Navbar'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { ProfileCard } from '../Card';
const Home = () => {
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);

    return (
        <div>
            <Navbar />
            <div className=" h-screen flex">
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
                        <div className=" flex justify-between">
                            <label className="input input-bordered flex items-center   w-52 h-10 p-1 ">
                                <input type="text" className="grow h-full" placeholder="Search" />
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 16 16"
                                    fill="currentColor"
                                    className="h-5 w-10 opacity-70">
                                    <path
                                        fillRule="evenodd"
                                        d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            </label>
                            <div id="date-range-picker" date-rangepicker className="flex items-center">
                                {/* Start Date Input */}
                                <div className="relative w-full">

                                    {/* Date Picker */}
                                    <DatePicker
                                        selected={startDate}
                                        onChange={(date) => setStartDate(date)}
                                        selectsStart
                                        startDate={startDate}
                                        endDate={endDate}
                                        placeholderText="Start Date"
                                        isClearable
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    />
                                </div>

                                <span className="mx-4 text-gray-500">to</span>

                                {/* End Date Input */}
                                <div className="relative w-full">

                                    {/* Date Picker */}
                                    <DatePicker
                                        selected={endDate}
                                        onChange={(date) => setEndDate(date)}
                                        selectsEnd
                                        startDate={startDate}
                                        endDate={endDate}
                                        placeholderText="End Date"
                                        isClearable
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    />
                                </div>
                            </div>

                        </div>

                    </div>
                    {/* TodoList boxes start  */}
                    <div className="p-4 flex justify-between h-full mt-4">
                        <div className="h-full bg-sky-100 text-black rounded-lg min-w-[320px] p-3">
                            <div className="p-2 flex gap-2 items-center text-base font-bold">
                                <div className="h-1 w-1 bg-blue-600 rounded-[50%] p-[6px]"></div>
                                <h1>To Start</h1>
                            </div>
                            <ProfileCard />
                        </div>
                        <div className="h-full bg-sky-100 text-black rounded-md min-w-[320px] p-3">
                            <div className="p-2 flex gap-2 items-center text-base font-bold">
                                <div className="h-1 w-1 bg-orange-500 rounded-[50%] p-[6px]"></div>
                                <h1>In Progress</h1>
                            </div>
                            <ProfileCard />

                        </div>
                        <div className="h-full bg-sky-100 text-black rounded-md min-w-[320px] p-3">
                            <div className="p-2 flex gap-2 items-center text-base font-bold">
                                <div className="h-1 w-1 bg-green-800 rounded-[50%] p-[6px]"></div>
                                <h1>Completed</h1>
                            </div>
                            <ProfileCard />

                        </div>
                    </div>


                </div>
            </div>
        </div>
    )
}

export default Home
