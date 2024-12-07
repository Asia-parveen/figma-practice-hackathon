"use client";
// components/Timer.tsx
import { useState, useEffect } from "react";

interface TimerProps {
  targetDate: string; // Format: "YYYY-MM-DDTHH:mm:ss"
}

const Timer: React.FC<TimerProps> = ({ targetDate }) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date().getTime();
      const target = new Date(targetDate).getTime();
      const difference = target - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / (1000 * 60)) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    const timer = setInterval(calculateTimeLeft, 1000);
    return () => clearInterval(timer); // Cleanup on component unmount
  }, [targetDate]);

  return (
    <div className="flex justify-center items-center space-x-8  p-4 rounded-md">
      <div className="flex flex-col items-center">
        <span className="text-black font-medium">Days</span>
        <span className="text-black text-xl font-bold">{timeLeft.days}:</span>
      </div>
      <div className="flex flex-col items-center">
        <span className="text-black font-medium">Hours</span>
        <span className="text-black text-xl font-bold">{timeLeft.hours}:</span>
      </div>
      <div className="flex flex-col items-center">
        <span className="text-black font-medium">Minutes</span>
        <span className="text-black text-xl font-bold">{timeLeft.minutes}:</span>
      </div>
      <div className="flex flex-col items-center">
        <span className="text-black font-medium">Seconds</span>
        <span className="text-black text-xl font-bold">{timeLeft.seconds}</span>
      </div>
    </div>
  );
};

export default Timer;







