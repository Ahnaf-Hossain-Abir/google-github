"use server";
import { signIn, signOut } from "@/auth";

export async function login(formdata){
    const action = formdata.get("action");
    await signIn(action, {redirectTo: "/home"})
    console.log(action);
}

export async function logout(){
    await signOut()
}

export async function credentials(formdata){
    try{
        const response = await signIn("credentials", {
            email: formdata.get("email"),
            password: formdata.get("password"),
            redirect: false
        });
        return response
    } catch(err){
        throw new Error(err)
    }
}