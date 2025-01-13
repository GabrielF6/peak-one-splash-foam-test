export const SaveSeal = ({ percent }: { percent: number }) => {
  return (
    <div className="w-[76px] h-[76px] flex justify-center items-center absolute -top-[47px] -right-[26px] bg-[url('/images/splash-foam/save-seal.png')] bg-contain bg-no-repeat bg-center text-white font-bold font-inter text-[20px] pt-[8px] leading-[22px] text-center uppercase">
      {`${Math.round((1 - percent) * 100)}%`}
      <br />
      OFF
    </div>
  );
};
