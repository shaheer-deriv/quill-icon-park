import { useContext } from "react";
import { IconContext } from "../../context/context";

const IconDetails = () => {
  const iconContext = useContext(IconContext);
  const iconSelected = iconContext?.iconSelected;
  const Icon = iconSelected?.Icon;

  return (
    <div className="pr-8 pt-8">
      <div className="sticky top-28 flex flex-col gap-4 rounded-xl p-4 shadow-xl">
        Icon Details
        <div className="flex items-center justify-center">
          {Icon && <Icon />}
        </div>
      </div>
    </div>
  );
};

export default IconDetails;
