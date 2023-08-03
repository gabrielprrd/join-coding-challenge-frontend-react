import type { HTMLAttributes } from "react";

type Props = HTMLAttributes<HTMLDivElement>;

export function FormField(props: Props) {
  return <div className="flex flex-col gap-2" {...props} />;
}
