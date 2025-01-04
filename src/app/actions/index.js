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