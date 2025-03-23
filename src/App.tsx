import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./pages/RootLayout";
import AuthPage from "./pages/AuthPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [{ path: "auth", element: <AuthPage /> }]
  }
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
