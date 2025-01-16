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
      <div className="md:w-[76px] md:h-[76px] w-[45px] h-[45px] flex justify-center items-center bg-[url('/images/splash-foam/save-seal.png')] bg-contain bg-no-repeat bg-center text-white font-bold font-inter text-[12px] md:text-[20px] pt-[0px] md:pt-[8px] leading-[13px] md:leading-[22px] text-center uppercase">
        {`${Math.round((1 - percent) * 100)}%`}
        <br />
        OFF
      </div>
      <div className="pl-[8px]">
        <h3 className="uppercase font-bold text-[14px] md:text-[19px] ">
          <span className="text-red-500 uppercase text-[14px] md:text-[19px] ">
            Hurry!
          </span>{" "}
          Limited To 100 Spots Only!
        </h3>
        <p className="flex items-center space-x-2 ">
          <span className="text-[14px] md:text-[19px]">
            Your spot is reserved for
          </span>
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
