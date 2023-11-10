import { BrandDerivLogoCoralIcon } from "@deriv/quill-icons";
import Search from "../search/search";

const Header = () => (
  <div className="sticky top-0 flex h-20 items-center bg-white px-8 shadow-sm">
    <div className="grid w-full grid-cols-[1fr_2fr_1fr]">
      <div className="flex items-center gap-2 font-bold">
        <BrandDerivLogoCoralIcon width="32" />
        <span>Quill Icons</span>
      </div>
      <Search />
      <div />
    </div>
  </div>
);

export default Header;
