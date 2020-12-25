import React from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/themes/splide-sea-green.min.css';
import '../styles/Cards.css';

const Splider = ({robots}) => {
    const cardSplide = robots.map((robot, i) => {
        return (
            <SplideSlide key={robot.id} className="cards-wrapper dib br3 pa3 ma2">
                <img src={`https://robohash.org/${robots[i].id}?set=set3`} alt="robots"/>
                <h3>{robot.name}</h3>
                <h4>{robot.email}</h4>
            </SplideSlide>
        );
    });

    return(
        <Splide options={{
            rewind: true,
            width: '100%',
            gap: '1rem',
            perPage: 3,
            perMove: 1,
            focus: 'center',
            type: 'loop',
            easing: 'ease',
        }}>
            {cardSplide}
        </Splide>
    );
}

export default S