export const SaveSeal = ({ percent }: { percent: number }) => {
  return (
    <div className="w-[54px] h-[54px] md:w-[76px] md:h-[76px] flex justify-center items-center absolute -top-[29px] right-[36px] md:-top-[47px] md:-right-[26px] bg-[url('/images/splash-foam/save-seal.png')] bg-contain bg-no-repeat bg-center text-white font-bold font-inter text-[13px] md:text-[20px] pt-[8px] leading-[15px] md:leading-[22px] text-center uppercase">
      {`${Math.round((1 - percent) * 100)}%`}
      <br />
      OFF
    </div>
  );
};
