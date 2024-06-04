import React, { useState, useEffect } from 'react';
import Web3 from 'web3';
import { Logout } from '@/components/logout';
import contractABI from '@/MyTokenABI.json';
import { Contract } from 'web3-eth-contract'; 
import { Tabs, TabList, TabPanels, Tab, TabPanel, Box, Button, Flex, VStack , Heading} from '@chakra-ui/react';
const Mintify = () => {
   /* const [web3, setWeb3] = useState<Web3<any> | null>(null); // Fix 1: Specify Web3 type
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
    }; */

    return (
        <Tabs align ='end' variant='enclosed'>
  <TabList mb='1em'>
    <Tab>Mint</Tab>
    <Tab>Logs</Tab>
   <Logout/>
  </TabList>
  <TabPanels>
  <Flex flex="1" justify="center" align="center"  >        
    <TabPanel>
    <Button  colorScheme='green'  size='lg'  > Mint Here</Button>
    </TabPanel>
    </Flex>
      <TabPanel>
      <p>two!</p>
    </TabPanel>
  </TabPanels>
</Tabs>
      );
    }
export default Mintify;
