import React, { FormEvent } from 'react';
 

interface ButtonProps{
    isLoading: boolean,
    children: React.ReactNode
    className:string
    email: string
    name: string
    phone: number|any
}

const SubmitButton = ({isLoading , children  , className , email , name , phone} : ButtonProps) => {
   const unSubmit = async (e: FormEvent)=> {
         e.preventDefault()
         console.log(email , name, phone);
         
   }
  return (
    <button onClick={unSubmit} className="mt-4 p-1 bg-dark-400 shadow-xl rounded-xl w-[50%] mt-4 text-green-500">
        get started
      </button>
  );
}

export default SubmitButton;
