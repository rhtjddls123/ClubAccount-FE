import { Outlet } from "react-router-dom";

const RootLayout = () => {
  return (
    <main className="flex items-center w-lvw h-lvh">
      <Outlet />
    </main>
  );
};

export default RootLayout;
