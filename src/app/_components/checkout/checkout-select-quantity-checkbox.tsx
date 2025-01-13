const CustomCheckbox = ({
  quantity,
  checked,
}: {
  quantity: number;
  checked: boolean;
}) => {
  return (
    <div className="flex items-center space-x-2">
      <span
        className={`w-[22px] h-[22px] rounded-[4px] border-[${
          checked ? "1px" : "1px"
        }] border-black flex items-center justify-center ${
          checked ? "bg-black" : "bg-white"
        }`}
      >
        {checked && (
          <img
            src="/images/splash-foam/tik-white.svg"
            alt="check"
            width={16}
            height={14}
            className="w-[14px] h-[14px]"
          />
        )}
      </span>
      <label
        htmlFor="custom-checkbox"
        className="text-[20px] font-bold font-inter"
      >
        Buy {quantity}
      </label>
    </div>
  );
};

export default CustomCheckbox;
