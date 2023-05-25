import { Routes, Route } from "react-router-dom";

import "./index.css";
import Home from "./components/Home";
import LoginModal from "./components/modals/LoginModal";

function App() {

  return (
    <>
      <div className=" sm:grid sm:grid-cols-6 sm:gap-2 bg-[#15202B]">
        <Home />
      </div>
      <Routes>
        <Route path="/login" element={<LoginModal />} />
      </Routes>
    </>
  );
}

export default App;
