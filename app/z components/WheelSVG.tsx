import '../globals.css';
import { useEffect, useState } from 'react';

// interface WheelSVGProps {
//   TireDia: boolean;
//   WheelDia: string;
//   isVisible: boolean;
// }

export default function WheelSVG() {
  const [radius, setRadius] = useState(80);

  useEffect(() => {
    const animation = setInterval(() => {
      if (radius === 70) {
        clearInterval(animation);
      } else {
        setRadius((prevRadius) => prevRadius - 1);
      }
    }, 50);

    return () => clearInterval(animation);
  }, []);

  return (
    <svg width="200" height="200" xmlns="http://www.w3.org/2000/svg">
      <circle
        cx="100"
        cy="100"
        r={radius}
        fill="blue"
        stroke="black"
        strokeWidth="2"
        strokeDasharray="62.8319"
      />
    </svg>
  );
}
