'use client'


import { PrivyProvider } from '@privy-io/react-auth'
import type { ReactNode } from 'react'


type Props = {
    children: ReactNode,
}

export function PrivyContext ({ children }: Props) {

    return (
        <>
            <PrivyProvider
                appId={process.env.NEXT_PUBLIC_PRIVY_APP_ID as string}
                config={{
                    /* Replace this with your desired login methods */
                    loginMethods: ['email', 'discord','sms','google'],
                    /* Replace this with your desired appearance configuration */
                    appearance: {
                        theme: 'light',
                        accentColor: '#92278F', 
                        showWalletLoginFirst: false,

                    },
                    embeddedWallets: {
                        createOnLogin: 'users-without-wallets',
                        noPromptOnSignature: true
                    },    
                }}
            >
                {children}
            </PrivyProvider>
        </>
    )
}