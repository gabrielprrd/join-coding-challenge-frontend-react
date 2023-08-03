import { ReactNode } from "react";

type Props = {
  children: ReactNode | ReactNode[];
};

export default function Center({ children }: Props) {
  return <div className="w-full h-full flex justify-center">{children}</div>;
}
