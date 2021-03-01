import React, { useEffect, useState } from 'react';
import playerData from '../../../src/data/data.json';
import Cart from '../Cart/Cart';
import EachPlayer from './eachPlayer/EachPlayer';
import './Player.css';

const Player = () => {
    const [playerInfo, setPlayer] = useState([]);
    useEffect(() => {
        setPlayer(playerData);
    }, []);
    const [cart, setCart] = useState([]);
    const handleAddPlayer = (player) => {
        /*need to work for added item skip*/
        if (cart.indexOf(player) > -1);
        else {
            const newCart = [...cart, player];
            setCart(newCart);
        }
    }
    return (
        <div className="players-container">
            <div className="player-container">

                {
                    playerInfo.map(player => <EachPlayer handleAddPlayer={handleAddPlayer} key={player.id} player={player}></EachPlayer>)
                }

            </div>
            <div className="cart-container shadow bg-white rounded">
                <div className="container">
                    <Cart cart={cart}></Cart>
                </div>

            </div>
        </div>
    );
};

export default Player;