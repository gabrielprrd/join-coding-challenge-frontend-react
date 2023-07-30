import Link, { LinkProps } from "next/link";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
} & LinkProps;

export const BikeCardTitle = ({ children, ...rest }: Props) => {
  return (
    <Link className="text-2xl underline" {...rest}>
      {children}
    </Link>
  );
};
