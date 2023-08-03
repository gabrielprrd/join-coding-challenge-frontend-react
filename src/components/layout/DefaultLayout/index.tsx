import Head from "@/components/Head";
import { ReactElement } from "react";
import Header from "../Header";

type Props = {
  children: ReactElement;
};

export default function DefaultLayout({ children }: Props) {
  return (
    <>
      <Head />
      <div className="min-h-screen max-w-screen flex flex-col">
        <Header />
        <main className="p-5 h-full w-full">{children}</main>
      </div>
    </>
  );
}
