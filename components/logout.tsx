"use client";

import { usePrivy } from '@privy-io/react-auth';
import { useRouter } from 'next/navigation';
import React from 'react';
import { Button, Flex } from '@chakra-ui/react';

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
        <Flex 
        
        alignItems="center" 
        justifyContent="center"
    >
        <Button 
            colorScheme='blue' 
            onClick={handleLogout}
        >
            Logout
        </Button>
    </Flex>
    );
}
