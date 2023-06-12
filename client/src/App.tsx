import "./index.css";
import Home from "./components/Home";
import LoginModal from "./components/modals/LoginModal";
import SignupModal from "./components/modals/SignupModal";
import Users from "./Users";
import axios from "axios";

import { Routes, Route } from "react-router-dom";
import { useAppDispatch } from "./store/store";
import { useEffect } from "react";
import { setUser } from "./store/features/userSlice";
import { useAppSelector } from "./store/store";
import Error from "./components/Error";

function App() {
  const dispatch = useAppDispatch();
  const loggedUser = useAppSelector(state => state.user);

  useEffect(() => {
    if (document.cookie.indexOf('USER_TOKEN=') === -1) {
      return;
    }

    const getUserObject = async () => {
      const userObject = await axios.get(import.meta.env.VITE_API_SERVER_URL + "/auth/user", { withCredentials: true });
      dispatch(setUser(userObject.data))
    };

    getUserObject();
  }, [])
    
  return (
    <div className="bg-[#15202B]">
      {loggedUser.username}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginModal />} />
        <Route path="/signup" element={<SignupModal />} />
        <Route path="/users" element={<Users />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;
