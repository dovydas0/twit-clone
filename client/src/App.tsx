import { Routes, Route, Link } from "react-router-dom";

import "./index.css";
import Home from "./components/Home";
import LoginModal from "./components/modals/LoginModal";
import SignupModal from "./components/modals/SignupModal";
import Footer from "./components/Footer";

function App() {

  return (
    <>
      <div className="max-w-[1440px] mx-auto h-screen sm:grid sm:grid-cols-9">
        <Home />
      </div>
      <Footer />
      <Routes>
        <Route path="/login" element={<LoginModal />} />
        <Route path="/signup" element={<SignupModal />} />
      </Routes>
    </>
  );
}

export default App;
