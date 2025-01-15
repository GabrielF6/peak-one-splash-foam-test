import { useEffect, useState } from "react";

export const OfferTimer = ({ percent }: { percent: number }) => {
  const [timeLeft, setTimeLeft] = useState(10 * 60); // 10 minutes in seconds

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => (prevTime > 0 ? prevTime - 1 : 0));
    }, 1000);

    return () => clearInterval(timer); // Cleanup interval on component unmount
  }, []);

  // Format time as MM:SS
  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${String(minutes).padStart(2, "0")}:${String(secs).padStart(
      2,
      "0"
    )}`;
  };

  return (
    <div className="flex items-center">
      <div className="w-[76px] h-[76px] flex justify-center items-center bg-[url('/images/splash-foam/save-seal.png')] bg-contain bg-no-repeat bg-center text-white font-bold font-inter text-[20px] pt-[8px] leading-[22px] text-center uppercase">
        {`${Math.round((1 - percent) * 100)}%`}
        <br />
        OFF
      </div>
      <div className="pl-[8px]">
        <h3 className="uppercase font-bold">
          <span className="text-red-500 uppercase">Hurry!</span> Limited To 100
          Spots Only!
        </h3>
        <p className="flex items-center space-x-2">
          <span>Your spot is reserved for</span>
          <img
            src="/images/splash-foam/clock-icon.png"
            alt=""
            width="15"
            height="18"
          />
          <strong id="stopwatch">{formatTime(timeLeft)}</strong>
        </p>
      </div>
    </div>
  );
};
