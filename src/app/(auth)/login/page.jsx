"use client";


import { handleFormAction } from "@/server-acitons/formAction";
import {Button, Description, FieldError, Form, Input, Label, TextField} from "@heroui/react";
import Link from "next/link";

import React from 'react';

const LoginPage = () => {

//   const handleSubmit=(e)=>{
//     e.preventDefault()

// const email=e.target.email.value
// const password=e.target.password.value
// console.log({email,password})
//   }

   return (
 <div className="bg-snow rounded border shadow max-w-188 mx-auto w-[90%] py-10 px-5 md:py-20 md:px-16">

<h6 className="text-(--dark-2) text-2xl md:text-4xl font-semibold text-center border-b border-zinc-300 pb-10">Login Your account</h6>
     <Form
      className="flex flex-col gap-4 mt-10 p-2.5 md:p-5"
   action={handleFormAction}
    >
      <TextField
        isRequired
        name="email"
        type="email"
        validate={(value) => {
          if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
            return "Please enter a valid email address";
          }

          return null;
        }}
      >
        <Label className="text-(--dark-2) text-xl font-semibold">Email</Label>
     <Input placeholder="Enter your email address" className=' shadow-none p-4.5 bg-[#F3F3F3] rounded-lg placeholder:text-(--dark-4) placeholder:text-[16px]'/>
        <FieldError />
      </TextField>

      <TextField
        isRequired
        minLength={8}
        name="password"
        type="password"
        validate={(value) => {
          if (value.length < 8) {
            return "Password must be at least 8 characters";
          }
          if (!/[A-Z]/.test(value)) {
            return "Password must contain at least one uppercase letter";
          }
          if (!/[0-9]/.test(value)) {
            return "Password must contain at least one number";
          }

          return null;
        }}
      >
        <Label className="text-(--dark-2) text-xl font-semibold">Password</Label>
      <Input placeholder="Enter your  password" className=' shadow-none p-4.5 bg-[#F3F3F3] rounded-lg placeholder:text-(--dark-4) placeholder:text-[16px]'/>
        <Description>Must be at least 8 characters with 1 uppercase and 1 number</Description>
        <FieldError />
      </TextField>

      <div className="flex gap-2">
        <Button type="submit" className={'w-full text-white font-semibold rounded-lg bg-(--dark-2) p-4.5'}>
          Submit
        </Button>
   
      </div>

      <div>
        <p className="text-center">Don't Have an Account? <Link href={'/register'} className="text-red-500 font-semibold">Register</Link> </p>
      </div>
    </Form>
 </div>

  );
}

export default LoginPage