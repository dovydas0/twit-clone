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
import Settings from "./components/Settings";
import LeftBar from "./components/LeftBar";
import Footer from "./components/Footer";

function App() {
  const dispatch = useAppDispatch();
  const loggedUser = useAppSelector(state => state.user);

  useEffect(() => {
    if (document.cookie.indexOf('USER_TOKEN=') === -1) {
      return;
    }    
    
    // Temporary solution to clearing the auth cookie
    const timeout = setTimeout(() => {
      console.log('clearing cookies');
      document.cookie = '';
    }, 1800000)

    const getUserObject = async () => {
      try {
        const userObject = await axios.get(import.meta.env.VITE_API_SERVER_URL + "/auth/user", { withCredentials: true });
        dispatch(setUser(userObject.data))

      } catch (error) {
        
      }
    };

    getUserObject();

    return () => {
      clearTimeout(timeout);
    }
  }, [])
    
  return (
    <div className="max-w-[1440px] px-4 mx-auto h-screen sm:grid sm:grid-cols-9 bg-[#15202B]">
      
      <LeftBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginModal />} />
        <Route path="/signup" element={<SignupModal />} />
        <Route path="/users" element={<Users />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="*" element={<Error />} />
      </Routes>
      {
        Object.keys(loggedUser).length === 0 ? <Footer /> : ''
      }
    </div>
  );
}

export default App;
