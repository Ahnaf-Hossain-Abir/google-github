import { login } from "@/app/actions";

const Login = () => {
    return (
        <form action={login}>
            <button type="submit" name="action" value="google" className="bg-blue-400 px-4 py-2 hover:bg-blue-200 text-white font-bold">Google</button>
            <button type="submit" name="action" value="github" className="bg-red-400 px-4 py-2 hover:bg-blue-200 text-white font-bold ml-4">Github</button>
        </form>
    );
};

export default Login;