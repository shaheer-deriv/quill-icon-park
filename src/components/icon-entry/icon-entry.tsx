import classNames from "classnames";
import { useState } from "react";

type TIconEntryProps = {
  iconName: string;
  icon: JSX.Element;
};

const IconEntry = ({ iconName, icon }: TIconEntryProps) => {
  const [selected, setSelected] = useState(false);

  const Component = icon as unknown as JSX.Element;
  return (
    <div
      onKeyDown={undefined}
      onClick={() => setSelected((selected) => !selected)}
      className={classNames(
        "flex cursor-pointer flex-col items-center justify-between rounded-xl border-2 p-4 shadow-md",
        selected
          ? "border-rose-500 bg-rose-50"
          : "border-transparent hover:border-slate-400 hover:bg-slate-50",
      )}
    >
      <span />
      <Component />
      <span className="mt-2">{iconName.substring(0, 12).concat("...")}</span>
    </div>
  );
};

export default IconEntry;
