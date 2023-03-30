import { NavermapsProvider } from "react-naver-maps";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Map from "./components/Map";
import AuthenticationPage, { action as authAction } from "./pages/Auth";
import HomePage from "./pages/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/auth",
    element: <AuthenticationPage />,
    action: authAction,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}
export default App;
