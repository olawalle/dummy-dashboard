import { useState } from "react";
import "./App.css";
import Sidenav from "./components/dashboard/sidenav/Sidenav";
import Settings from "./Pages/Settings";

function App() {
  return (
    <div className="flex">
      <Sidenav />
      <div className="flex-1 h-screen overflow-y-auto bg-gray-50 pt-0 px-10 relative">
        <Settings />
      </div>
    </div>
  );
}

export default App;
