import { BrandDerivLogoCoralIcon } from "@deriv/quill-icons";

const Header = () => (
  <div className="px-8 py-8 sticky">
    <div className="w-full grid grid-cols-[1fr_2fr_1fr]">
      <div className="flex items-center gap-2 font-bold">
        <BrandDerivLogoCoralIcon width="32" />
        <span>Quill Icons</span>
      </div>
      <div className="w-full flex justify-center items-center">
        <input
          className="px-4 py-2 border rounded-xl shadow-xl min-w-[20rem] outline-rose-500"
          type="text"
          placeholder="Search"
        />
      </div>
      <div />
    </div>
  </div>
);

export default Header;