"use client"
import Login from "@/Components/Login/Login";
import { credentials } from "./actions";
import { useRouter } from "next/navigation";
import { useState } from "react";
export default function Home() {
 const router = useRouter();
const [error, setError] = useState("")

 async function handleFormSubmit(event){
    event.preventDefault();
    try{
      const formdata = new FormData(event.currentTarget);
      const response = await credentials(formdata)

      if(!!response.error){
        setError(response.error.message)
      } else{
        router.push("/home")
      }
    }
    catch(e){
      console.error(e)
      setError("Check your credentials");
    }
  }
  return (
    <div className="flex flex-col items-center gap-4 m-6">
    <div className="text-xl text-red-500">{error}</div>
      <form className="flex flex-col items-center justify-center" onSubmit={handleFormSubmit}>
      <div className="my-5">
      <label>Email</label>
      <input type="email" name="email" id="email" className="border mx-2 rounded border-gray-500 p-2" />
      </div>
      <div className="">
      <label>Password</label>
      <input type="password" name="password" id="password" className="border mx-2 rounded border-gray-500 p-2" />
      </div>
      <button className="my-5 border bg-green-400 w-36 p-2">Login</button>
      </form>
      <Login />
    </div>
  );
}
