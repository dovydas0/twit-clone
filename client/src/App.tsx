import "./index.css";
import LoginModal from "./components/modals/LoginModal";
import SignupModal from "./components/modals/SignupModal";
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
import ProfilePage from "./components/profile/ProfilePage";
import RightBar from "./components/RightBar";
import Home from "./components/Home";
import ProtectedRoute from "./ProtectedRoute";

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
    <div className="max-w-[1440px] px-4 mx-auto h-full sm:grid sm:grid-cols-9 bg-[#15202B]">
      <LeftBar />
      <Routes>
        {/* Authentication */}
        <Route path="/login" element={<LoginModal />} />
        <Route path="/signup" element={<SignupModal />} />

        {/* Site Navigation */}
        <Route path="/" element={
          <>
            <Home />
            <RightBar />
          </>
        }
        />
        <Route path="/settings" element={<Settings />} />
        {/* Authenticated Pages */}
        <Route element={<ProtectedRoute />}>
          <Route path="/profile" element={
            <>
              <ProfilePage />
              <RightBar />
            </>
          } />
        </Route>
        
        {/* Unexisting Pages */}
        <Route path="*" element={<Error />} />
      </Routes>
      {
        Object.keys(loggedUser).length === 0 ? <Footer /> : ''
      }
    </div>
  );
}

export default App;
