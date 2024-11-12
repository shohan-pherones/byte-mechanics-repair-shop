import { PropsWithChildren } from "react";

const Template = ({ children }: PropsWithChildren) => {
  return <div className="animate-appear">{children}</div>;
};

export default Template;
