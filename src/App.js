import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AuthenticationPage, { action as authAction } from "./pages/Auth";
import HomePage from "./pages/Home";
import { action as logoutAction } from "./pages/Logout";
import { checkAuthLoader, tokenLoader } from "./components/util/Getauth";
import RootLayout from "./pages/Root";
const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    loader: tokenLoader,
    children: [
      {
        index: true,
        element: <HomePage />,
        id: "Home",
        loader: tokenLoader,
      },
      {
        path: "/auth",
        element: <AuthenticationPage />,
        action: authAction,
        loader: checkAuthLoader,
      },
      {
        path: "/logout",
        element: <AuthenticationPage />,
        action: logoutAction,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}
export default App;
