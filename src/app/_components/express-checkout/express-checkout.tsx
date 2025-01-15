export const ExpressCheckout = () => {
  return (
    <div className="border-2 border-[#ededed] rounded-[5px] float-left w-full text-center p-[0_18px_18px] mt-[50px]">
      <p className="text-[18px] leading-[20px] bg-white px-[20px] inline-block align-top text-center mt-[-12px]">
        Express Checkout
      </p>
      <button className="h-[70px] bg-[#ffc439] rounded-[5px] flex items-center justify-center  appearance-none outline-none border-none inline-block align-top w-full cursor-pointer p-0">
        <img
          src="/images/splash-foam/pay-pal-icn.png"
          alt=""
          width={155}
          height={39}
        />
      </button>
    </div>
  );
};
