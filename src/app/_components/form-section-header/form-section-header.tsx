export const FormSectionHeader = ({
  icon,
  title,
  subtitle,
}: {
  icon: string;
  title: string;
  subtitle: string;
}) => {
  return (
    <div className="flex flex-row items-center self-start mb-[25px]">
      <img
        src={`/images/splash-foam/${icon}.png`}
        alt={title}
        className="w-[40px] h-[32px] md:w-[50px] md:h-[40px] mr-2"
      />
      <div className="flex flex-col items-start">
        <h2 className="text-[23px] md:text-[26px] font-bold">{title}</h2>
        <p className="text-[12px] md:text-[14px] text-left">{subtitle}</p>
      </div>
    </div>
  );
};
