import { ReactNode } from "react";

type Props = {
  children: ReactNode | ReactNode[];
};

export const BikeCardRoot = ({ children }: Props) => {
  return (
    <div className="items-center p-5 flex flex-col sm:flex-row gap-3 shadow-md">
      {children}
    </div>
  );
};
