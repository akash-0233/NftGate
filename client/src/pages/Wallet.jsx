import React from 'react';
import {Web3} from 'web3';
import { useNavigate } from 'react-router-dom';
function Wallet() {
    const navigateTo = useNavigate();
    const connectWallet = async()=>{
        try {
            if(window.ethereum){
                const accounts = await window.ethereum.request({method:'eth_requestAccounts'});
               
                //Navigate to home page after Metamask Connection.
                console.log("Metamask Connected and Address was passed");
                navigateTo("/home",{state:{address:accounts[0]}});;
            }else{
                alert("Install Metamask");
            }
        } catch (error) {
        console.error(error)            ;
        }
    }
  return (
    <>
    <button onClick={connectWallet}>Connect</button>
    </>
   
  )
}

export default Wallet

