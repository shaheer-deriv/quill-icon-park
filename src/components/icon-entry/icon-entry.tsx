import classNames from "classnames";
import { useContext } from "react";
import { IconContext, TIconEntry } from "../../context/context";

const IconEntry = ({ iconName, icon }: TIconEntry) => {
  const iconContext = useContext(IconContext);
  const iconSelected = iconContext?.iconSelected;
  const setIconSelected = iconContext?.setIconSelected;

  const isIconSelected = iconSelected?.iconName === iconName;
  const Component = icon as unknown as JSX.Element;

  return (
    <div
      onKeyDown={undefined}
      onClick={() => setIconSelected?.({ icon, iconName })}
      className={classNames(
        "flex cursor-pointer flex-col items-center justify-between rounded-xl border-2 p-4 shadow-md",
        isIconSelected
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
