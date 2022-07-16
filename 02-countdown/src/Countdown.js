import React, {useEffect, useState} from 'react';

const calculateSeconds = (targetDate) => {
    const currentDate = Date.now();
    const deltaDate = targetDate - currentDate;
    const seconds = Math.floor(deltaDate / 1000);
    return seconds > 0 ? seconds : 0;
};

const secondsToTime = (secs) => {
    const days = Math.floor(secs / (60 * 60 * 24));
    const hours = Math.floor((secs % (60 * 60 * 24)) / (60 * 60));
    const minutes = Math.floor((secs % (60 * 60)) / 60);
    const seconds = Math.floor(secs % 60);

    return {
      d: days.toString().padStart(3, '0'),
      h: hours.toString().padStart(2, '0'),
      m: minutes.toString().padStart(2, '0'),
      s: seconds.toString().padStart(2, '0')
    };
}

const Countdown = ({date}) => {
    const [seconds, setSeconds] = useState(calculateSeconds(date));
    const [time, setTime] = useState(secondsToTime(seconds));

    useEffect(() => {
        seconds > 0 && setTimeout(() => setSeconds(seconds - 1), 1000);          
        setTime(secondsToTime(seconds));
    }, [seconds]);

    return (
      <div className='countdown'>
        <span className='cd-days'>{time.d}</span>
        <span className='delimeter'></span>
        <span className='cd-hours'>{time.h}</span>
        <span className='delimeter'></span>
        <span className='cd-minutes'>{time.m}</span>
        <span className='delimeter'></span>
        <span className='cd-seconds'>{time.s}</span>
      </div>
    );
}

export default Countdown;