const express = require('express');
const cors = require('cors');
const { Web3 } = require('web3');
const ABI = require('./ABI.json');
const socketIO = require('socket.io');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

const Alchemy = process.env.PROJECT_ID;
const web3 = new Web3(Alchemy);
const contractAddress = '0xef3C9c2a9B3D16302e3e5cdB09Ab78d1eE2d59a0';
const contract = new web3.eth.Contract(ABI, contractAddress);

const fetchNFTs = async (account) => {
    try {
        const nftBalance = await contract.methods.balanceOf(account).call();
        return { userNFTs: Number(nftBalance) };
    } catch (error) {
        console.log('Error fetching NFTs', error);
    }
};

app.post('/members', async (req, res) => {
    try {
        const account = req.body.from;
        console.log(account);
        const numNFTs = await fetchNFTs(account);

        if (numNFTs.userNFTs > 0) {
            res.status(200).json({ status: 200, numNFTs });
        } else {
            res.status(404).json({ status: 404, message: "You don't own any nft", numNFTs });
        }
    } catch (error) {
        res.status(500).json({ status: 500, message: "Internal Server Error" });
    }
});

app.post('/webhook', async (req, res) => {
    try {
        const account = req.body[0].from;
        const numNFTs = await fetchNFTs(account);
        console.log("Nft transfered");
        io.emit('nftsUpdated', { userNFTs: numNFTs.userNFTs });
        res.status(200).json({ status: 200, message: "Webhook Triggered" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ status: 500, message: "Internal Server Error" });
    }
});

const PORT = 3000;
const server = app.listen(PORT, () => {
    console.log(`Server running at ${PORT}`);
});

const io = socketIO(server, {
    cors: {
        origin: '*',
        methods: ['GET', 'POST'],
    }
});

io.on('connection', () => {
    console.log("Connected");
});
