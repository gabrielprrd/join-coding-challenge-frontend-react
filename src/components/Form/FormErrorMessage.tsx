import { HTMLAttributes } from "react";
import { useFormContext } from "react-hook-form";

type Props = {
  field: string;
  id: string;
} & HTMLAttributes<HTMLParagraphElement>;

export function FormErrorMessage({ id, field, ...rest }: Props) {
  const {
    formState: { errors },
  } = useFormContext();

  const fieldError = errors[field];

  if (!fieldError) return null;

  return (
    <p
      {...rest}
      id={id}
      className="flex gap-2 bg-peach text-sm italic text-red-700"
      aria-live="polite"
    >
      {fieldError.message as string}
    </p>
  );
}
