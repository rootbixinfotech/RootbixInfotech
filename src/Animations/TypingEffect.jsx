import React, { useEffect, useState } from 'react';

const TypingEffect = ({ text, onComplete }) => {
  const [displayedText, setDisplayedText] = useState('');
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(prev => prev + text[index]);
        setIndex(prev => prev + 1);
      }, 150);

      return () => clearTimeout(timeout);
    } else {
      onComplete();
    }
  }, [index, text, onComplete]);

  return <span>{displayedText}</span>;
};

export default TypingEffect;