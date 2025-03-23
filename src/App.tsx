import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AuthLayout from "./pages/AuthLayout";
import AuthPage from "./pages/AuthPage";
import { PARAMS_IDS } from "./constants/constants";
import MainPage from "./pages/MainPage";
import MainLayout from "./pages/MainLayout";

const router = createBrowserRouter([
  {
    path: "/auth",
    element: <AuthLayout />,
    children: [{ index: true, element: <AuthPage /> }]
  },
  {
    path: `/:${PARAMS_IDS.CLUB_CODE}`,
    element: <MainLayout />,
    children: [{ index: true, element: <MainPage /> }]
  }
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
