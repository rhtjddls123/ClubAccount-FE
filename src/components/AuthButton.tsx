import { ButtonHTMLAttributes, ReactNode } from "react";

interface AuthButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

const AuthButton = ({ children, ...props }: AuthButtonProps) => {
  return (
    <button
      className="w-full px-4 py-3 rounded-lg bg-primary title-semi-18 text-gray-01"
      {...props}
    >
      {children}
    </button>
  );
};

export default AuthButton;
