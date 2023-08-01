import BikesTable from "@/components/BikesTable";
import DefaultLayout from "@/components/layout/DefaultLayout";
import { ReactElement } from "react";

const HomePage = () => {
  return <BikesTable />;
};

HomePage.getLayout = function getLayout(page: ReactElement) {
  return <DefaultLayout>{page}</DefaultLayout>;
};

export default HomePage;
