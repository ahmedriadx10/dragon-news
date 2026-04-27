'use server'


export const handleFormAction=async (formData)=>{

const formDataObj=Object.fromEntries(formData.entries())

console.log(formDataObj)



}


export const handleRegister=async(formData)=>{


const formDataObj=Object.fromEntries(formData.entries())

console.log(formDataObj)



}