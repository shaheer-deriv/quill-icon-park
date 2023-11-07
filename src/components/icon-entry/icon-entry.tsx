type TIconEntryProps = {
  iconName: string;
  icon: JSX.Element;
};

const IconEntry = ({ iconName, icon }: TIconEntryProps) => {
  let Component = icon as unknown as JSX.Element;
  return (
    <div className="flex flex-col items-center justify-between rounded-xl bg-slate-100 p-4">
      <span />
      <Component />
      <span className="mt-2">{iconName.substring(0, 12) + "..."}</span>
    </div>
  );
};

export default IconEntry;
