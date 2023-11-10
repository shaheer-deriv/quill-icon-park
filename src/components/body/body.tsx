import IconsBrowser from "../icons-browser/icons-browser";
import IconDetails from "../icon-details/icon-details";
import { IconContext, TIconEntry } from "../../context/context";
import { useMemo, useState } from "react";

const Body = () => {
  const [iconSelected, setIconSelected] = useState<TIconEntry>();
  const value = useMemo(
    () => ({ iconSelected, setIconSelected }),
    [iconSelected, setIconSelected]
  );

  return (
    <IconContext.Provider value={value}>
      <div className="grid w-full grid-cols-[3fr_1fr]">
        <IconsBrowser />
        <IconDetails />
      </div>
    </IconContext.Provider>
  );
};

export default Body;
