'use client';
import { useState, useEffect } from 'react';
import { Typography } from '@mui/material';

const LiveClock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timerId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(timerId);
    };
  }, []);

  return (
    <Typography variant='body2' sx={{ mt: 2 }}>
      {time.toLocaleTimeString()}
      <br />
      {time.toLocaleDateString(undefined, {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      })}
    </Typography>
  );
};

export default LiveClock;
