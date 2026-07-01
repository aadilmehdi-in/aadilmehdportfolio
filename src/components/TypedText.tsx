import { useState, useEffect } from 'react';

export default function TypedText({ 
  words, 
  speed = 100, 
  delay = 1500 
}: { 
  words: string[], 
  speed?: number, 
  delay?: number 
}) {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const fullText = words[currentWordIndex];
    
    const tick = () => {
      if (!isDeleting) {
        // Typing
        const nextText = fullText.substring(0, currentText.length + 1);
        setCurrentText(nextText);
        
        if (nextText === fullText) {
          // Finished typing, pause
          const pauseTimer = setTimeout(() => {
            setIsDeleting(true);
          }, delay);
          return () => clearTimeout(pauseTimer);
        }
      } else {
        // Deleting
        const nextText = fullText.substring(0, currentText.length - 1);
        setCurrentText(nextText);
        
        if (nextText === '') {
          setIsDeleting(false);
          setCurrentWordIndex((prev) => (prev + 1) % words.length);
        }
      }
    };

    const speedToUse = isDeleting ? speed / 1.8 : speed;
    const timer = setTimeout(tick, speedToUse);

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentWordIndex, words, speed, delay]);

  return (
    <span className="text-indigo-600 dark:text-indigo-400 font-semibold border-r-3 border-indigo-600 dark:border-indigo-400 pr-1 animate-[pulse_0.8s_infinite]">
      {currentText || "\u00A0"}
    </span>
  );
}
