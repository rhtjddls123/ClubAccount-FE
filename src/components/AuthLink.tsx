import { ButtonHTMLAttributes, ReactNode } from "react";

interface AuthLinkProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}
const AuthLink = ({ children, ...props }: AuthLinkProps) => {
  return (
    <button className="caption-med-12 text-grey-03" {...props}>
      <span>{children}</span>
    </button>
  );
};

export default AuthLink;
