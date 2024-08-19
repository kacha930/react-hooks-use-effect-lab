import React, { useState, useEffect } from 'react';



function Question({ onAnswered }) {

  const [timeRemaining, setTimeRemaining] = useState(10);

  useEffect(() => {
    const timer = setTimeout(() => {

      setTimeRemaining(prevTime => {

        if (prevTime <= 1) {
          onAnswered(false);
          return 10; // Reset the timer
        }
        return prevTime - 1;
      }); //decreaments the timer by 1 every seconds 
    }, 1000);


    return () => clearTimeout(timer); // implement  Cleanup function
  }, [timeRemaining, onAnswered]);

  return (
    <div>
      <h1>Question</h1>
      <p>{timeRemaining} seconds remaining</p>
   
    </div>
  );
}

export default Question