import { useState, useEffect, useRef } from "react";
import { apiClient } from "../utils/axiosInstance";
import { trigger } from "../stores/todoAtom";
import { useRecoilState } from "recoil";
import { UpdateCard } from "./UpdateCard";
const ProfileCard = ({ title, body, id }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const [trig, setTrig] = useRecoilState(trigger);
  const [update,setUpdate]=useState(0);
  useEffect(() => {
    const handleClickOutside = (event) => {

      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const deleteHandler = async (id) => {
    try {

      const data = {
        id: id
      }
      const response = await apiClient.post('/todo/delete', data);


      setTrig((prev) => prev + 1);

    } catch (error) {
      console.error("Error deleting todo:", error);
    }
  };


  const completeHandler = async (id) => {
    const data = {
      id: id
    }

    try {
      const response = await apiClient.post('todo/complete', data);
      setTrig((prev) => prev + 1);

    } catch (error) {
      console.log("error completing the todo: ", error)
    }
  }
  useEffect(() => {
    setIsDropdownOpen(false)
  }, [trig,update])
  return (
    <div>
      <div ref={dropdownRef} className=" relative w-full max-w-sm mt-2 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
        <div className="flex justify-end px-2 pt-4">
          <button
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="inline-block text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-1.5"
            type="button"
          >
            <span className="sr-only">Open dropdown</span>
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 3">
              <path d="M2 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm6.041 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM14 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z" />
            </svg>
          </button>
          {/* Dropdown menu */}
          {isDropdownOpen && (
            <div className="z-10 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow-sm w-44 dark:bg-gray-700 absolute mt-2">
              <ul className="py-2">
                <li>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white" onClick={()=>setUpdate(id)}>Edit</a>
                </li>

                <li>
                  <a href="#" className="block px-4 py-2 text-sm text-red-600 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white" onClick={() => deleteHandler(id)}>Delete</a>
                </li>
                <li>
                  <a href="#" className="block px-4 py-2 text-sm text-red-600 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white" onClick={() => { completeHandler(id) }}>Checked</a>
                </li>
              </ul>
            </div>
          )}
        </div>
        <div className="flex flex-col items pb-10 p-2">
          <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">{title}</h5>
          <span className="text-sm text-gray-500 dark:text-gray-400">{body}</span>

        </div>
      </div>
      {
        update===id && <UpdateCard update={update} setUpdate={setUpdate} />
      }
    </div>
  );
};

export { ProfileCard };
