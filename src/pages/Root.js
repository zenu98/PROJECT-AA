import { useEffect } from "react";
import { Outlet, useLoaderData, useSubmit } from "react-router-dom";
import SideMenu from "../components/UI/SideMenu/SideMenu";
import { getTokenDuration } from "../components/util/Getauth";

function RootLayout() {
  const token = useLoaderData();
  const submit = useSubmit();
  console.log(submit);
  useEffect(() => {
    if (!token) {
      return;
    }
    if (token === "EXPIRED") {
      submit(null, { action: "/logout", method: "post" });
      return;
    }

    const tokenDuration = getTokenDuration();
    console.log(tokenDuration);

    setTimeout(() => {
      submit(null, { action: "/logout", method: "post" });
    }, tokenDuration);
  }, [token, submit]);
  return (
    <>
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default RootLayout;
