import { ReactElement } from "react";
import Header from "../Header";

type Props = {
  children: ReactElement;
};

export default function DefaultLayout({ children }: Props) {
  return (
    <div className="min-h-screen max-w-screen flex flex-col">
      <Header />
      <main className="p-5">{children}</main>
    </div>
  );
}
