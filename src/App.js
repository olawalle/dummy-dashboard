import { useState } from "react";
import "./App.css";
import Sidenav from "./components/dashboard/sidenav/Sidenav";
import Settings from "./Pages/Settings";

function App() {
  const [open, setOpen] = useState(false);
  const toggleOpen = () => {
    setOpen(!open);
  };

  return (
    <div className="flex md:flex-row flex-col">
      <Sidenav open={open} toggleOpen={toggleOpen} />
      <div
        className={`${
          !open ? "md:flex-1" : "hidden"
        } h-screen overflow-y-auto bg-gray-50 pt-0 md:px-10 relative`}
      >
        <Settings />
      </div>
    </div>
  );
}

export default App;
