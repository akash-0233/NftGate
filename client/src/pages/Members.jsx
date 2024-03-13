//Install socket.io
// npm install socket.io-client
import './Members.css'
import { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import io from 'socket.io-client'
import React from 'react'
import Img from '../Img/Secreate.png'
function Members() {
  const [socket, setSocket] = useState(null);
  const navigateTo = useNavigate();

  useEffect(() => {
    const socketInstance = io('http://localhost:3000');
    setSocket(socketInstance);
    console.log(socket);
    return () => {
      socketInstance.disconnect();
    }
  }, [])

  useEffect(() => {
    if (socket) {
      socket.on('nftsUpdated', (data) => {
        if (data.userNFTs < 1) {
          alert("You've been logged out because you no longer hold any NFTs in collection");
          setTimeout(() => {
            navigateTo("/");
          }, 300);
        }
      })
    }


  }, [socket, navigateTo])

  return (
    <div className="members-container">
      <h2 className="members-title">Exclusive Content for NFT Holders</h2>
      <div className="image-container">
        <img src={Img} alt="Secret Image" className="secret-image" />
      </div>
    </div>

  )
}

export default Members