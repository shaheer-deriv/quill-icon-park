import * as QuillIcons from "@deriv/quill-icons";

const x = Object.keys(QuillIcons);
const Body = () => (
  <div className="w-full grid grid-cols-[3fr_1fr]">
    <div>{x}</div>
    <div>right</div>
  </div>
);

export default Body;
