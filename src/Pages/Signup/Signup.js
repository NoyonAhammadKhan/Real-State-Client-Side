import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { GoogleAuthProvider } from 'firebase/auth';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';


const Signup = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const {user,createUser}=useContext(AuthContext)
    const googleProvider=new GoogleAuthProvider();
    const handleSignUp=(data)=>{
        console.log(data);
        if(data.password ===data.confirmPassword){
            const name=data.fullname;
            const email=data.email;
            const password=data.password;
            createUser(email,password)
            .then(res=>{
                console.log(res)
            })
            .catch(err=>{
                console.log(err)
            })

        }
    }

    return (
        <div className="bg-grey-lighter min-h-screen flex flex-col">
            <div className="container max-w-md mx-auto flex-1 flex flex-col items-center justify-center px-2 ">
                <div className="bg-white px-6 py-8 rounded shadow-md text-black w-full border border-gray-400">
                    <h1 className="mb-8 text-3xl text-center">Sign up</h1>
                    <form onSubmit={handleSubmit(handleSignUp)} action="">
                    <input 
                        type="text"
                        className="block border border-grey-light w-full p-3 rounded mb-4"
                        name="fullname"
                        {
                            ...register("fullname",{required:true})
                        }
                        placeholder="Full Name" />

                    <input 
                        type="text"
                        className="block border border-grey-light w-full p-3 rounded mb-4"
                        name="email"
                        {
                            ...register("email",{required:true})
                        }
                        placeholder="Email" />

                    <input 
                        type="password"
                        className="block border border-grey-light w-full p-3 rounded mb-4"
                        name="password"
                        {
                            ...register("password",{required:true})
                        }
                        placeholder="Password" />
                    <input 
                        type="password"
                        className="block border border-grey-light w-full p-3 rounded mb-4"
                        name="confirm_password"
                        {
                            ...register("confirmPassword",{required:true})
                        }
                        placeholder="Confirm Password" />

                    <select
                    {
                        ...register("userType",{required:true})
                    }
                    className="select w-full p-3 block mb-4  border border-grey-light">
                      <option disabled selected>Join As A</option>
                      <option className='font-bold'>Visitor</option>
                      <option className='font-bold'>Property Seller</option>
                    </select>
                   
                    <button
                        type="submit"
                        className="w-full text-center py-3 rounded bg-green-500 text-white hover:bg-green-dark focus:outline-none my-1"
                    >Create Account</button>

                    </form>

                    
                </div>

                <div className="text-grey-dark mt-6">
                    Already have an account? 
                    <Link className="no-underline border-b border-blue text-blue" to="/login">
                        Log in
                    </Link>.
                </div>
            </div>
        </div>            
        
    );
};

export default Signup;