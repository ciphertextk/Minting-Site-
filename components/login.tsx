'use client'

import { usePrivy } from '@privy-io/react-auth';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import Image from 'next/image';

export function Login() {
    const router = useRouter();
    const { login, ready, authenticated } = usePrivy();

    // Automatically redirect when the user becomes authenticated
    useEffect(() => {
        if (ready && authenticated) {
            router.push('/mintify');
        }
    }, [ready, authenticated, router]);

    const Login = async () => {
        try {
            if (!authenticated) {
                await login();
            }
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <button onClick={Login} className='w-48 rounded-full bg-blue-600 cursor-pointer z-20 hover:bg-green-400'>
            <div className='flex w-full justify-between'>
              <p>Join Mintify</p>
              <Image
                src='./LeftArrow.svg'
                alt=''
                width={20}
                height={20}
              />
            </div>
        </button>
    );
}