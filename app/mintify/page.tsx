import React, { useState, useEffect } from 'react';
import Web3 from 'web3';
import { Logout } from '@/components/logout';
import contractABI from '@/MyTokenABI.json';
import { Contract } from 'web3-eth-contract'; 

const Mintify = () => {
    const [web3, setWeb3] = useState<Web3<any> | null>(null); // Fix 1: Specify Web3 type
  const [contract, setContract] = useState<Contract | null>(null); // Fix 2: Specify Contract type
    const [accounts, setAccounts] = useState<string[]>([]); // Fix 3: Specify type for accounts

    const contractAddress = "0xa1757942389F42B1213171a98D6551b35D540CE7"; 

    useEffect(() => {
        if (window.ethereum) {
            const web3Instance = new Web3(window.ethereum);
            setWeb3(web3Instance);

            window.ethereum.request({ method: 'eth_requestAccounts' })
                .then((accounts: string[]) => { // Fix 4: Specify type for accounts parameter
                    setAccounts(accounts);
                    const contractInstance = new web3Instance.eth.Contract(contractABI, contractAddress);
                    setContract(contractInstance);
                })
                .catch((err: Error) => console.error(err)); // Fix 5: Specify type for error parameter
        } else {
            console.error("Please install MetaMask!");
        }
    }, []);

    const mintNFT = async () => {
        if (contract && accounts.length > 0) {
            try {
                const tokenId = Math.floor(Math.random() * 10000);
                await contract.methods?.safeMint(accounts[0], tokenId).send({ from: accounts[0] }); // Fix 6: Use optional chaining
                alert("Minting successful!");
            } catch (error) {
                console.error("Minting failed:", error);
                alert("Minting failed!");
            }
        } else {
            alert("Please connect to MetaMask and reload the page.");
        }
    };

    return (
        <div className="h-screen flex flex-col items-center justify-center bg-gray-100 relative">
            <div className="absolute top-4 right-4">
                <Logout />
            </div>
            <button
                onClick={mintNFT}
                className="px-6 py-3 text-lg font-medium text-white bg-green-500 rounded hover:bg-green-600 transition duration-300"
            >
                Mint Here
            </button>
        </div>
    );
};

export default Mintify;
