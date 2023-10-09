import { useContext } from "react";
import { Outlet } from "react-router-dom";

import Navigation from "../components/Navigation/Navigation";
import { ThemeContext } from "../context/ThemeContext";

export default function RootLayout() {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={theme.length > 0 ? `app-wrapper ${theme}` : "app-wrapper"}>
      <Navigation />
      <Outlet />
    </div>
  );
}
