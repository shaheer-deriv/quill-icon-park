import * as QuillIcons from "@deriv/quill-icons";
import IconEntry from "../icon-entry/icon-entry";

const IconsBrowser = () => {
  const iconNames = Object.entries(QuillIcons);

  return (
    <div className="grid grid-cols-6 gap-4 p-8">
      {iconNames
        .filter(([iconName, _]) => iconName.endsWith("Icon"))
        .map(([iconName, icon]) => (
          <IconEntry
            key={iconName}
            iconName={iconName}
            Icon={
              icon as React.ForwardRefExoticComponent<
                Omit<QuillIcons.QuillSvgProps, "ref">
              >
            }
          />
        ))}
    </div>
  );
};

export default IconsBrowser;
