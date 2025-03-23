import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AuthLayout from "./pages/AuthLayout";
import AuthPage from "./pages/AuthPage";

const router = createBrowserRouter([
  {
    path: "/auth",
    id: "root",
    element: <AuthLayout />,
    children: [{ index: true, element: <AuthPage /> }]
  }
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
