import * as QuillIcons from "@deriv/quill-icons";

const IconsBrowser = () => {
  const iconNames = Object.entries(QuillIcons);

  return (
    <div className="p-4">
      {iconNames
        .filter(([key, value]) => key.startsWith("Deriv"))
        .map(([key, value]) => {
          console.log(">>>", typeof value);

          let Component = value as unknown as React.ReactNode;
          if (Component) return <Component />;
          return <QuillIcons.BrandDerivLogoCoralIcon />;
        })}
    </div>
  );
};

export default IconsBrowser;
