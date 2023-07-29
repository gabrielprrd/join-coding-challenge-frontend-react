import DefaultLayout from "@/components/layout/DefaultLayout";
import type { ReactElement } from "react";
import type { NextPageWithLayout } from "./_app";

const Home: NextPageWithLayout = () => {
  return <></>;
};

Home.getLayout = function getLayout(page: ReactElement) {
  return <DefaultLayout>{page}</DefaultLayout>;
};

export default Home;
