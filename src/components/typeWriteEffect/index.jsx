import React, { useState, useEffect } from "react";

const TypingEffect = ({data}) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [typedText, setTypedText] = useState("");
  const delay = 100;

  useEffect(() => {
    let index = 0;
    const word = data[currentWordIndex];
    const typingInterval = setInterval(() => {
      setTypedText(word.slice(0, index + 1));
      index++;

      if (index === word.length) {
        clearInterval(typingInterval);
        setTimeout(() => {
          setCurrentWordIndex((prevIndex) => (prevIndex + 1) % data.length);
          setTypedText("");
        }, 1000); 
      }
    }, delay);

    return () => {
      clearInterval(typingInterval);
    };
  }, [data, currentWordIndex]);

  return (
    <p className="typing-text typeWriteEffect">
      {typedText} <b className="parpadea ">|</b>
    </p>
  );
};

export default TypingEffect;
