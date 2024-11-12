import Header from "@/components/Header";
import { PropsWithChildren } from "react";

const BMLayout = ({ children }: PropsWithChildren) => {
  return (
    <div className="mx-auto w-full max-w-7xl">
      <Header />
      <div className="px-4 py-2">{children}</div>
    </div>
  );
};

export default BMLayout;
