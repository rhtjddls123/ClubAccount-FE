import { Outlet } from "react-router-dom";
import MainNavigation from "../features/main/MainNavigation";

const MainLayout = () => {
  return (
    <div className="flex flex-col w-lvw h-lvh">
      <MainNavigation />
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default MainLayout;
