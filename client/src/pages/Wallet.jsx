import'./Wallet.css'
import React from 'react';
import { Web3 } from 'web3';
import { useNavigate } from 'react-router-dom';
function Wallet() {
    const navigateTo = useNavigate();
    const connectWallet = async () => {
        try {
            if (window.ethereum) {
                const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });

                //Navigate to home page after Metamask Connection.
                console.log("Metamask Connected and Address was passed");
                navigateTo("/home", { state: { address: accounts[0] } });;
            } else {
                alert("Install Metamask");
            }
        } catch (error) {
            console.error(error);
        }
    }
    return (

        <div className="wallet-container">
            <h2 className="wallet-title">Connect Your Wallet</h2>
            <p className="wallet-description">To access the features, please connect your wallet using Metamask.</p>
            <button className="connect-btn" onClick={connectWallet}>Connect Wallet</button>
        </div>

    )
}

export default Wallet

