import IconsBrowser from "../icons-browser/icons-browser";
import IconDetails from "../icon-details/icon-details";
import { IconContext, TIconEntry } from "../../context/context";
import { useState } from "react";

const Body = () => {
  const [iconSelected, setIconSelected] = useState<TIconEntry>();

  return (
    <IconContext.Provider value={{ iconSelected, setIconSelected }}>
      <div className="grid w-full grid-cols-[3fr_1fr]">
        <IconsBrowser />
        <IconDetails />
      </div>
    </IconContext.Provider>
  );
};

export default Body;
