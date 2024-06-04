'use client'

import { usePrivy } from '@privy-io/react-auth';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import Image from 'next/image';
import { Button, Flex } from '@chakra-ui/react'

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
        <Flex 
        
        alignItems="center" 
        justifyContent="center"
    >
        <Button 
            colorScheme='blue' 
            onClick={Login}
        >
            Join Mintify
        </Button>
    </Flex>
    );
}