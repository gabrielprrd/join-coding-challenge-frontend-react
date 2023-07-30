import Image, { ImageProps } from "next/image";

type Props = ImageProps;

export const BikeCardImage = (props: Props) => {
  return (
    <div className="flex flex-col gap-3">
      <Image height={100} width={100} {...props} />
    </div>
  );
};
