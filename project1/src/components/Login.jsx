import React from 'react'
import { useForm } from 'react-hook-form'
import { apiClient } from '../utils/axiosInstance';
import { userInfo } from '../stores/userAtom';
import { useNavigate, Link } from 'react-router-dom';
import { useRecoilState } from 'recoil';
const Login = () => {
    const { register, handleSubmit, formState: { error, isSubmitting }, reset } = useForm();
    const navigate = useNavigate();
    const [info, setUserInfo] = useRecoilState(userInfo);
    const onSubmitForm = async (data) => {

        try {

            const response = await apiClient.post('/user/login', data)

            const name = response.data.username;
            const token = response.data.token;
            setUserInfo({
                user: name,
                token: token
            })
            localStorage.setItem("name",name)
            localStorage.setItem("token",token)
            

            reset()
            navigate("/");

        } catch (error) {
            console.log(error)
        }

    }

    return (

        <div>
            <section className="bg-gray-50 dark:bg-gray-900 h-full">
                <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">

                    <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                                Sign in to your account
                            </h1>
                            <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit(onSubmitForm)}>
                                <div>
                                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                                    <input type="email" {...register('email', { required: "email is required" })} className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" />
                                </div>
                                <div>
                                    <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                                    <input type="password" {...register('password', { required: "password is required", minLength: { value: 6, message: "password should be of length 6" } })} placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                                </div>
                                <div className="flex items-center justify-between">
                                    <div className="flex items-start">
                                        <div className="flex items-center h-5">
                                            <input id="remember" aria-describedby="remember" type="checkbox" {...register('remember')} className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" />
                                        </div>
                                        <div className="ml-3 text-sm">
                                            <label htmlFor="remember" className="text-gray-500 dark:text-gray-300">Remember me</label>
                                        </div>
                                    </div>
                                    <a href="#" className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500">Forgot password?</a>
                                </div>
                                <button type="submit" className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800" disabled={isSubmitting}>{isSubmitting ? "...login started" : "Login in"}</button>
                                <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                                    Don’t have an account yet? <Link to="/register" className="font-medium text-primary-600 hover:underline dark:text-primary-500">Sign up</Link>
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}

export default Login
