//Install socket.io
  // npm install socket.io-client
import { useEffect, useState } from 'react';
import {useNavigate} from "react-router-dom";
import io from 'socket.io-client'
import React from 'react'
import Img from '../Img/Secreate.png'
function Members() {
const [socket, setSocket] = useState(null);
const navigateTo = useNavigate();

useEffect(()=>{
  const socketInstance = io('http://localhost:3000');
  setSocket(socketInstance);
  console.log(socket);
  return()=>{
    socketInstance.disconnect();
  }
},[])

 useEffect(() => {
   if(socket){
    socket.on('nftsUpdated',(data)=>{
      if(data.userNFTs<1){
        navigateTo("/");
        alert("You'hv been logged out because you no longer hald any NFTs.");
      }
    })
   }
 
  
 },[socket,navigateTo])
 
  return (
    <>
      <div>Members</div>
      <img src={Img}></img>
    </>

  )
}

export default Members