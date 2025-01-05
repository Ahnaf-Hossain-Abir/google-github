import { auth } from "@/auth";
import Logout from "@/Components/Logout/Logout";
import Image from "next/image";
import { redirect } from "next/navigation";

const homePage = async() => {
   const session = await auth();
   if(!session?.user) redirect("/")
    return (
        <div className="flex flex-col gap-4 items-center m-4">
        {
            session.user.image && session.user.name ? (
                <>
                <h1 className="text-3xl"><span className="font-bold">Welcome</span>, {session.user.name}</h1>
            <Image
                src={session.user.image}
                alt={session.user.name}
                width={100}
                height={100}
                className="rounded-full"
            />
                </>
            ) : (
                <h1 className="text-3xl"><span className="font-bold">Welcome</span>, {session.user.email}</h1>
            )
        }
            
            <Logout/>
        </div>
    );
};

export default homePage;