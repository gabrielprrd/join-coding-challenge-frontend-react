import { BikeCard } from "@/components/BikeCard";
import { unixToFullDate } from "@/utils/unixToFullDate";
import { getBikeAltText } from "@/utils/getBikeAltText";

type Bike = {
  id: number;
  title: string;
  description: string;
  thumb: string | undefined;
  date_stolen: number;
  stolen_location: string;
  frame_mode: string;
};

type Props = {
  bikes: Bike[];
};

export default function BikesList({ bikes }: Props) {
  return (
    <div className="flex flex-col gap-4">
      {bikes.map((bike: Bike) => (
        <BikeCard.Root key={bike.id}>
          <BikeCard.Image
            src={bike.thumb ?? "/assets/images/no-image-available.jpeg"}
            alt={getBikeAltText(bike.thumb, bike.frame_mode)}
          />
          <BikeCard.Content>
            <BikeCard.Title
              href={`${process.env.NEXT_PUBLIC_BASE_URL}/bikes/${bike.id}`}
            >
              {bike.title}
            </BikeCard.Title>
            <p>{bike.description}</p>
            <p className="text-sm">
              {unixToFullDate(bike.date_stolen)} - {bike.stolen_location}
            </p>
          </BikeCard.Content>
        </BikeCard.Root>
      ))}
    </div>
  );
}
