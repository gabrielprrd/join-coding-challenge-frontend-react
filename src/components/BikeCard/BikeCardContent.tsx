import { ReactNode } from "react";

type Props = {
  children: ReactNode | ReactNode[];
};

export const BikeCardContent = ({ children }: Props) => {
  return <div className="flex flex-col gap-2">{children}</div>;
};
