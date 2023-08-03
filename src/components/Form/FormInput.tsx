import type { InputHTMLAttributes } from "react";
import { useFormContext } from "react-hook-form";

type Props = {
  name: string;
  label?: string;
} & InputHTMLAttributes<HTMLInputElement>;

export function FormInput({ name, label, ...props }: Props) {
  const { register } = useFormContext();

  return (
    <label htmlFor={name} className="flex flex-col gap-1">
      {label}
      <input
        id={name}
        className="border-2 border-gray-200 p-2 rounded-sm w-full"
        {...register(name)}
        {...props}
      />
    </label>
  );
}
