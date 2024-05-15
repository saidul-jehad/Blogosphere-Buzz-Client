import Lottie from "lottie-react";
import { FiEye, FiEyeOff } from "react-icons/fi";
import animation from '../../../public/Animation - 1715333706721.json'
import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import useAuth from "../../Hooks/useAuth";

const SignUp = () => {
    const [showPassword, setShowPassword] = useState(false)
    const [passwordError, setPasswordError] = useState('')
    const [registerError, setRegisterError] = useState('')
    const [registerSuccess, setRegisterSuccess] = useState('')
    const { createUser, updateUserProfile } = useAuth()

    const location = useLocation()
    const navigate = useNavigate()


    const handleSignUp = event => {
        event.preventDefault()
        const form = event.target
        const name = form.name.value
        const photoURL = form.photoURL.value
        const email = form.email.value
        const password = form.password.value

        // reset
        setPasswordError('')
        setRegisterError('')
        setRegisterSuccess('')


        //  password validation
        if (password.length < 6) {
            setPasswordError('Password at least 6 character')
            toast.error('Password at least 6 character')
            return
        }
        if (!/[A-Z]/.test(password)) {
            setPasswordError('Password must one Uppercase')
            toast.error("Password must one Uppercase")
            return
        }

        if (!/[a-z]/.test(password)) {
            setPasswordError("Password must one Lowercase")
            toast.error("Password must one Lowercase")
            return
        }
        if (!/[!@#$%^&*()_+{}\[\]:;<>,.?/~]/.test(password)) {
            setPasswordError("Password  must one special character")
            toast.error("Password must one special character")
            return
        }
        if (!/(?=.*\d.*)/.test(password)) {
            setPasswordError("Password  must one numeric character")
            toast.error("Password  must one numeric character")
            return
        }

        // create user 
        createUser(email, password)
            .then(() => {
                updateUserProfile(name, photoURL, email)
                setRegisterSuccess('Account successfully created')
                toast.success("Account successfully created");
                navigate(location?.state ? location.state : '/')
                // console.log(result.user);
            })
            .catch(error => {
                setRegisterError(error.message)
                // console.log(error.message);
            })

    }


    return (
        <div className="flex w-full max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800 lg:max-w-4xl">
            <div className='hidden bg-cover bg-center lg:block lg:w-1/2'>

                <Lottie animationData={animation} loop={true} />
            </div>

            <div className="w-full px-6 py-8 md:px-8 lg:w-1/2" >
                <div className="flex justify-center mx-auto">
                    {/* <img className="w-auto h-7 sm:h-8" src="https://merakiui.com/images/logo.svg" alt=""> */}
                </div>

                <p className="mt-3 text-xl text-center text-gray-600 dark:text-gray-200">
                    Sign Up now!
                </p>




                <form onSubmit={handleSignUp}>
                    <div className="mt-4">
                        <label className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200"> Name</label>
                        <input className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300 text-sm" type="text" name="name" placeholder="Enter Your Name" />
                    </div>
                    <div className="mt-4">
                        <label className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200">Photo URL</label>
                        <input className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300 text-sm" type="text" name="photoURL" placeholder="Enter Your photoURL" />
                    </div>
                    <div className="mt-4">
                        <label className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200">Email Address</label>
                        <input className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300 text-sm" type="email" name="email" placeholder="Enter Your Email" />
                    </div>

                    <div className="mt-4">
                        <div className="flex justify-between">
                            <label className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200" >Password</label>
                            <a href="#" className="text-xs text-gray-500 dark:text-gray-300 hover:underline">Forget Password?</a>
                        </div>

                        <div className="relative">
                            <input className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300 text-sm" type={showPassword ? "text" : "password"} name="password" placeholder="Enter Your Password" />

                            <span className="absolute top-3 right-3 cursor-pointer " onClick={() => setShowPassword(!showPassword)}>
                                {
                                    showPassword ? <FiEye /> : <FiEyeOff />
                                }
                            </span>

                            {
                                passwordError && <p className="text-orange-600 text-sm mt-1">{passwordError}</p>
                            }
                        </div>
                    </div>

                    {
                        registerError && <p className="text-red-500 font-medium pl-1 text-xl ">{registerError.slice(22, 42)}</p>
                    }
                    {
                        registerSuccess && <p className="text-green-500 font-medium text-xl pl-1">{registerSuccess}</p>
                    }

                    <div className="mt-6 ">
                        <input className="w-full px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-gray-800 rounded-lg hover:bg-gray-700 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50" type="submit" value='Sign Up' >
                        </input>

                    </div>
                </form>

                <div className="flex items-center justify-between mt-4">
                    <span className="w-1/5 border-b dark:border-gray-600 md:w-1/4"></span>

                    <Link to='/login' className="text-xs text-gray-500 uppercase dark:text-gray-400 hover:underline">or Login</Link>

                    <span className="w-1/5 border-b dark:border-gray-600 md:w-1/4"></span>
                </div>
            </div>
        </div >
    );
};

export default SignUp;