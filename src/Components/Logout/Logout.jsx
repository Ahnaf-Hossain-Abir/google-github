import { logout } from '@/app/actions';
import React from 'react';

const Logout = () => {
    return (
        <form action={logout}>
             <button type="submit" value="logout" className="bg-red-800 px-4 py-2 hover:bg-blue-200 text-white font-bold ml-4">Logout</button>
        </form>
    );
};

export default Logout;