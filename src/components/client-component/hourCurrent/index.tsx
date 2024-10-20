'use client'
import { useState, useEffect } from "react";

const DateHourCurrent = () => {
  const [ hourCurrent, setHourCurrent ] = useState<string>("");

  const HourCurrent = (): string => {
    const dataCurrent:Date = new Date();
    const dataHour:string = dataCurrent.getHours().toString().padStart(2, '0');
    const dataMin:string = dataCurrent.getMinutes().toString().padStart(2, '0');
    const newTime:string = `${dataHour}:${dataMin}`;

    setHourCurrent((prevTime) => {
      if(prevTime != newTime)
        return newTime;
      return prevTime;
    });
  };

  useEffect(() => {
    const timerId:NodeJS.Timeout = setInterval(HourCurrent, 1000);
    HourCurrent();
    
    return () => clearInterval(timerId);
  }, []); 

  return (
    <span>{hourCurrent}</span>
  );
};

export default DateHourCurrent;