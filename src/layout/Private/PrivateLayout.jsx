import { Outlet } from "react-router-dom";
import PrivateNavbar from "../../components/PrivateNavbar/PrivateNavbar";
import PrivateSidebar from "../../components/PrivateSidebar/PrivateSidebar";
import "../../styles/private/private-global.css";

const PrivateLayout = () => {
  return (
    <>
      <div id="private-background"></div>
      <PrivateNavbar />
      <PrivateSidebar />
      <main className="private-main">
        <Outlet />
      </main>
    </>
  );
};

export default PrivateLayout;
