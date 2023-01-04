import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import { useForm } from 'react-hook-form';
import { GoogleAuthProvider } from 'firebase/auth';
const Login = () => {
  const {signIn,providerLogin}=useContext(AuthContext);
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  
  const googleProvider = new GoogleAuthProvider();
  const handleGoogleSignIn=()=>{
    providerLogin(googleProvider)
    .then(res=>{
      console.log(res.user)
    })
    .catch(err=>{
      console.log(err);
    })
  }
  const handleLogin=(data)=>{
    const email = data.email;
    const password=data.password;
    console.log(email,password)
    signIn(email,password)
    .then(res=>{
      console.log(res.user)
    })
    .catch(err=>{
      console.log(err)
    })
  }
    return (     
      <div className="bg-grey-lighter min-h-screen flex flex-col">
            <div className="container max-w-md mx-auto flex-1 flex flex-col items-center justify-center px-2 ">
                <div className="bg-white px-6 py-8 rounded shadow-md text-black w-full border border-gray-400">
                    <h1 className="mb-8 text-3xl text-center">Sign In</h1>
                   <form onSubmit={handleSubmit(handleLogin)}>

                    <input 
                        type="text"
                        {...register("email",{required:true})}
                        className="block border border-grey-light w-full p-3 rounded mb-4"
                        name="email"
                        placeholder="Email" />

                    <input 
                        type="password"
                        {...register("password",{required:true})}
                        className="block border border-grey-light w-full p-3 rounded mb-4"
                        name="password"
                        placeholder="Password" />
                    

                    <button
                        type="submit"
                        className="w-full text-center py-3 rounded bg-blue-700 text-white hover:bg-green-dark focus:outline-none my-1"
                    >Sign In</button>
                    <div className='w-full bg-slate-500 h-[1px] mt-5 mb-5'>
                      
                    </div>
                   


                   </form>

                   <button
                        type="submit"
                        onClick={handleGoogleSignIn}
                        className="w-full text-center py-3 rounded border border-gray-200 text-white hover:bg-green-dark focus:outline-none my-1"
                    ><FcGoogle className='mx-auto' size={30}></FcGoogle> </button>
                </div>

                <div className="text-grey-dark mt-6">
                     Haven't any account? 
                    <Link className="no-underline border-b border-blue text-blue-800" to="/signup">
                        Sign Up
                    </Link>.
                </div>
            </div>
        </div>  
    );
};

export default Login;