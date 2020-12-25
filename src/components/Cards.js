import React from 'react'
import '../styles/Cards.css';

const Cards = ({ name, id, email }) => {
    return (
        <div className="cards-wrapper dib br3 pa3 ma2 grow pointer">
            <img className="cent" src={`https://robohash.org/${id}?set=set3`} alt="robots"/>
            <div className="text">
                <h3>{name}</h3>
                <h4>{email}</h4>
            </div>
        </div>  
    )
}

export default Cards;
