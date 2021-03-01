import React from 'react';
import './EachPlayer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserPlus } from '@fortawesome/free-solid-svg-icons'

const EachPlayer = (props) => {
    const {img, name, salary,role} = props.player;
    return (
        <div className="EachPlayer shadow bg-white rounded">
            <div>
                <img src={img} alt="" />
            </div>
            <div className="info">
                <h3>Name: {name}</h3>
                <h3><small>Salary: {salary} lakh taka</small></h3>
                <h3><small>Role: {role}</small></h3>
                <button className= "add-btn" onClick={()=>props.handleAddPlayer(props.player)}><FontAwesomeIcon icon={faUserPlus} /> Add to club</button>
            </div>
        </div>
    );
};

export default EachPlayer;