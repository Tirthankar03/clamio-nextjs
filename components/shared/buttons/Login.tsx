'use client'
import React from "react";
import { useDispatch } from "react-redux";
import { setIsLoggedIn } from "@/utils/authSlice";
import { useRouter } from "next/navigation";
const LoginButton: React.FC = () => {
    const dispatch = useDispatch()
    const router = useRouter();

    const handleLogin = () => {
        // Handle signup logic here (form validation, API calls, etc.)
        // Assuming successful signup:
        dispatch(setIsLoggedIn(true)); // Dispatch action to set isLoggedIn to true
        // Redirect user to explore page or handle navigation as needed
        // Example using Next.js Router:
        router.push('/explore')
        
      };
    return (
        <>
        <button onClick={handleLogin} className=" mt-5 h-12 w-full rounded-md bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-500 hover:bg-gradient-to-r hover:from-yellow-400 hover:via-yellow-500 hover:to-yellow-600 transition duration-300 ease-in-out text-center font-bold shadow-sm">
        LOGIN NOW
    </button>
        
        </>
    )
    
};

export default LoginButton;
