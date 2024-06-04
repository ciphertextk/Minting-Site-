import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { PrivyContext } from "@/providers/privyContext";
import { ChakraProvider } from '@chakra-ui/react'

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mintify",
  description: "Minting with a bit of finance",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <ChakraProvider>
        <PrivyContext>
          {children}
        </PrivyContext>
        </ChakraProvider>
      </body>
    </html>
  );
}
