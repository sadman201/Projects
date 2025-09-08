import { Outlet } from "react-router";
import Navbar from "./components/shared/Navbar";

const App = () => {
  return (
    <div className="">
      <Navbar />
      <Outlet />
    </div>
  );
};

export default App;
