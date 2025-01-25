/*import React , {useEffect, useState} from 'react';
const Clock = () => {
    const [time,setTime] = useState(new Date())
    useEffect(()=>{
       const intervalId = setInterval(()=>{
            setTime(new Date())
        }, 1000);
        return clearInterval(intervalId);
    },[]);
    const hours = time.getHours();
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();
    return (
        <>
        <p>
         Horloge:{hours}:{minutes}:{seconds}
        </p>
        </>
    );
};

export default Clock;*/

//autre solution 

import React, { useEffect, useState } from "react";

const Clock = () => {
  const [time, setTime] = useState(new Date());
  useEffect(() => {
    const intervalID = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(intervalID);
  }, []); // les [] ici appeler dependence pour stoper le timer

  const hours = time.getHours();
  const minutes = time.getMinutes();
  const seconds = time.getSeconds();

  console.log(hours);

  return (
    <>
      {
        <p>
          Horloge:{hours}: {minutes < 10 ? "0" + minutes : minutes}:
          {seconds < 10 ? "0" + seconds : seconds}
        </p>
      }
    </>
  );
};

export default Clock;