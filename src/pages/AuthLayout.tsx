import { Outlet } from "react-router-dom";

const AuthLayout = () => {
  return (
    <main className="flex items-center w-lvw h-lvh">
      <Outlet />
    </main>
  );
};

export default AuthLayout;
