import React from 'react';
import { useState, useEffect } from 'react';
import './Clock.css';

const Clock = () => {
    const presentDate = new Date();
    let sec = presentDate.getSeconds() / 60;
    let min = (sec + presentDate.getMinutes()) / 60;
    let hr = (min + presentDate.getHours()) / 60;

    const [ratios, setRatios] = useState({
        secondRatio: sec,
        minuteRatio: min,
        hourRatio: hr,
    });

    useEffect(() => {
        setInterval(() => {
            const presentDate = new Date();
            let secondRatio = presentDate.getSeconds() / 60;
            let minuteRatio = (secondRatio + presentDate.getMinutes()) / 60;
            let hourRatio = (minuteRatio + presentDate.getHours()) / 60;
            setRatios({ hourRatio, minuteRatio, secondRatio });
        }, 1000);
    }, []);

    const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
    const clockElements = [
        {
            name: 'hourHand',
            transform: `rotate(${ratios.hourRatio * 360}deg) translateX(-50%)`
        },
        {
            name: 'minHand',
            transform: `rotate(${ratios.minuteRatio * 360}deg) translateX(-50%)`
        },
        {
            name: 'secHand',
            transform: `rotate(${ratios.secondRatio * 360}deg) translateX(-50%)`
        },
        {
            name: 'circle',
            transform: 'translateX(-50%) translateY(-50%)',
        }
    ];
    return (
        <>
            <div className='clock'>
                {clockElements.map(el => <div key={clockElements.indexOf(el)}
                    style={{ transform: el.transform }}
                    className={el.name === 'circle' ? `${el.name}` : `hand ${el.name}`}></div>)}
                {num.map(el => <div key={el}
                    className={`number number${el}`}>{el}</div>)}
            </div>
        </>
    );
}

export default Clock;
