import IconsBrowser from "../icons-browser/icons-browser";
import IconDetails from "../icon-details/icon-details";

const Body = () => (
  <div className="w-full grid grid-cols-[3fr_1fr]">
    <IconsBrowser />
    <IconDetails />
  </div>
);

export default Body;
