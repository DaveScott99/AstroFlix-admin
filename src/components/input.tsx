import { InputHTMLAttributes, forwardRef } from "react";

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
};

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ name, type = "text", ...props }, ref) => {
    return (
      <div className="w-full min-w-[200px]  flex flex-col ">
        <label className="font-semibold mb-2 text-sm">
          {props.label}
        </label>
        <input
          {...props}
          type={type}
          name={name}
          ref={ref}
          className="border p-2 rounded-md bg-transparent outline-blue-500"
        />
      </div>
    );
  }
);
