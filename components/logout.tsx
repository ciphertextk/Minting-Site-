"use client";

import { usePrivy } from '@privy-io/react-auth';
import { useRouter } from 'next/navigation';
import React from 'react';

export function Logout() {
    const router = useRouter();
    const { logout, ready, authenticated } = usePrivy();

    const handleLogout = async () => {
        try {
            if (ready && authenticated) { // Check if ready and authenticated before logging out
                await logout();
                router.push('/');
            }
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <button onClick={handleLogout} className='w-32 py-2 rounded bg-blue-600 cursor-pointer hover:bg-blue-400 text-white'>
            Logout
        </button>
    );
}
