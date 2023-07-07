import "./index.css";
import LoginModal from "./components/modals/LoginModal";
import SignupModal from "./components/modals/SignupModal";
import axios from "axios";

import { Routes, Route } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "./store/store";
import { useEffect } from "react";
import { setUser } from "./store/features/userSlice";
import { setDark } from "./store/features/ThemeSlice";
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
  const darkTheme = useAppSelector(state => state.theme.dark);
  const loggedUser = useAppSelector(state => state.user);  

  useEffect(() => {
    if (document.cookie.indexOf('USER_TOKEN=') === -1) {
      return;
    }

    if (localStorage.getItem('dark') === 'on') {
      dispatch(setDark({ dark: true }));
      document.body.classList.add('dark');
      document.body.style.background = '#15202B';
    }
    
    // Temporary solution to clearing the auth cookie
    const timeout = setTimeout(() => {
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
    <div className="
      max-w-[1440px]
      overflow-x-hidden
      sm:px-4
      mx-auto
      h-full
      lg:grid
      lg:grid-cols-9
      dark:bg-[#15202B]
      bg-white
    ">
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
            {
              Object.keys(loggedUser).length === 0 ? <Footer /> : ''
            }
          </>
        } />

        <Route path="/settings" element={
          <>
            <Settings darkTheme={darkTheme} />
            {
              Object.keys(loggedUser).length === 0 ? <Footer /> : ''
            }
          </>
        } />
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
        <Route path="*" element={
          <>
            <Error />
            {
              Object.keys(loggedUser).length === 0 ? <Footer /> : ''
            }
          </>
        } />
      </Routes>
    </div>
  );
}

export default App;
