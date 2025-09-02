import { useState, useEffect } from 'react';

interface TypewriterProps {
  texts: string[];
  speed?: number;
  deleteSpeed?: number;
  delay?: number;
  className?: string;
}

export function Typewriter({ 
  texts, 
  speed = 100, 
  deleteSpeed = 50, 
  delay = 2000, 
  className = "" 
}: TypewriterProps) {
  const [displayText, setDisplayText] = useState('');
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentText = texts[textIndex];
    
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (charIndex < currentText.length) {
          setDisplayText(currentText.substring(0, charIndex + 1));
          setCharIndex(charIndex + 1);
        } else {
          setTimeout(() => setIsDeleting(true), delay);
        }
      } else {
        if (charIndex > 0) {
          setDisplayText(currentText.substring(0, charIndex - 1));
          setCharIndex(charIndex - 1);
        } else {
          setIsDeleting(false);
          setTextIndex((textIndex + 1) % texts.length);
        }
      }
    }, isDeleting ? deleteSpeed : speed);

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, textIndex, texts, speed, deleteSpeed, delay]);

  return (
    <span className={className} data-testid="typewriter-text">
      {displayText}
      <span className="border-r-2 border-primary animate-pulse">|</span>
    </span>
  );
}
