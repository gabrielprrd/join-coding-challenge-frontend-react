import { ButtonHTMLAttributes } from "react";

type Props = ButtonHTMLAttributes<HTMLButtonElement>;

export function FormButton({ children, ...rest }: Props) {
  return (
    <button
      {...rest}
      className="bg-blue-700 text-white p-2 rounded-sm shadow-sm"
    >
      {children}
    </button>
  );
}
