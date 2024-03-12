const express = require('express');
const { Web3 } = require("web3")
const ABI = require("./ABI.json")

require('dotenv').config();

const app = express();

//To accept json request.
app.use(express.json());

const Key = process.env.MNEMONIC;
const Alchemy = process.env.PROJECT_ID;
const Address = "0xef3C9c2a9B3D16302e3e5cdB09Ab78d1eE2d59a0";
// console.log(`Private key is ${Key}`);
// console.log(`Alchemy key is ${Alchemy}`);
// console.log(Web3);

const web3 = new Web3(Alchemy)
const contract = new web3.eth.Contract(ABI, Address);
// console.log(contract);

const fetchNFTs = async (account) => {

    try {
        const nftBalance = await contract.methods.balanceOf(account).call();
        console.log("Number of nft is :",Number(nftBalance));
        return {userNFTs:Number(nftBalance)};
    } catch (error) {
        console.error("Error while fetchin nft", error)
    }
}

app.post('/members',async(req,res)=>{
    try {
        const account = req.body.from;
        const numNFTs = await fetchNFTs(account)
        console.log(numNFTs);
        if(numNFTs.userNFTs > 0){
            res.status(200).json({status: 200, numNFTs});
        }else{
            res.status(400).json({status: 400, message: "You have 0 NFT"});
        }
    } catch (error) {
        res.status(500).json({error:'Internal Server Error'});
    }
})
















const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server is running at ${PORT}`)
})