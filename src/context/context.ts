import { Dispatch, SetStateAction, createContext } from "react";

export type TIconEntry = {
  iconName: string;
  icon: JSX.Element;
};
export type TIconContext = {
  iconSelected?: TIconEntry;
  setIconSelected?: Dispatch<SetStateAction<TIconEntry | undefined>>;
} | null;

export const IconContext = createContext<TIconContext>({});
