import './Home.css';
import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
function Home() {
    const location = useLocation();
    const navigateTo = useNavigate();
    const revealMsg = async () => {
        try {
            const account = location.state.address;
            const res = await fetch(`http://localhost:3000/members`, {
                method: "POST",
                headers: {
                    "content-type": "application/json"
                },
                body: JSON.stringify({ from: account })
            });
            const data = await res.json();
            if (data.status === 200) {
                navigateTo("/members");
            } else {
                window.alert("You currently do not hold any NFTs in Collection");
            }
        } catch (error) {
            console.error(error);
        }
    }
    return (
<div className="home-container">
            <div className="hero-section">
                <h1 className="hero-title">Unlock the <span className="highlight">Hidden</span> Treasures</h1>
                <p className="hero-subtitle">Experience exclusive content with your NFT collection!</p>
            </div>
            <div className="button-container">
                <button className="reveal-btn" onClick={revealMsg}>Unlock Now</button>
            </div>
        </div>

    )
}

export default Home