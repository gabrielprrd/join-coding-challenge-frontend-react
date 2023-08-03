import { BikesService } from "@/services/BikesService";
import { InferGetStaticPropsType } from "next";
import { unixToFullDate as formatDate } from "@/utils/unixToFullDate";
import { getBikeAltText } from "@/utils/getBikeAltText";
import Image from "next/image";
import { ReactElement } from "react";
import DefaultLayout from "@/components/layout/DefaultLayout";
import Center from "@/components/Center";

type Bike = {
  id: number;
  title: string;
  description: string;
  large_img: string | undefined;
  date_stolen: number;
  stolen_location: string;
  frame_mode: string;
};

export const getStaticPaths = async () => {
  const bikes: Bike[] = await BikesService.getAll();

  return {
    paths: bikes.map((bike) => ({
      params: { id: bike.id.toString() },
    })),
    fallback: true,
  };
};

type Params = {
  params: {
    id: string;
  };
};

export const getStaticProps = async ({ params }: Params) => {
  const bike: Bike = await BikesService.getById(+params.id);

  return {
    props: {
      bike,
    },
  };
};

const BikePage = ({ bike }: InferGetStaticPropsType<typeof getStaticProps>) => {
  if (!bike)
    return <Center>"An error ocurrer while fetching bike info."</Center>;

  return (
    <div className="flex flex-col gap-2">
      <p className="uppercase text-red-700 font-bold text-2xl">Stolen</p>
      <h1 className="text-4xl">{bike.title}</h1>
      <p>
        <span className="font-bold">Stolen</span> {formatDate(bike.date_stolen)}{" "}
        <span className="font-bold">from</span> {bike.stolen_location}
      </p>
      <Image
        height={400}
        width={400}
        src={bike.large_img ?? "/assets/images/no-image-available.jpeg"}
        alt={getBikeAltText(bike.large_img, bike.frame_mode)}
      />
      <p>
        <span className="font-bold">Description:</span>{" "}
        {bike.description ?? "No description provided."}
      </p>
    </div>
  );
};

BikePage.getLayout = function getLayout(page: ReactElement) {
  return <DefaultLayout>{page}</DefaultLayout>;
};

export default BikePage;
