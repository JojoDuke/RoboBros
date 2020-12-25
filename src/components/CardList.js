import React from 'react';
import Cards from './Cards';

const CardList = ({robots}) => {
    const cardComponent = robots.map((robot, i) => {
        return <Cards key={i} id={robots[i].id} name={robots[i].name} email={robots[i].email}/>;
    })

    return(
        <div>
            {cardComponent}
        </div>
    );
}

export default CardList;