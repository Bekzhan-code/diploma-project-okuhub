import React from "react";
import { Route, Routes } from "react-router-dom";
import { useDispatch } from "react-redux";

import "./scss/app.scss";
import Home from "./pages/Home";
import Header from "./components/Header";
import LearningTechniques from "./pages/LearningTechniques";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import Footer from "./components/Footer";
import UserPage from "./pages/UserPage";
import { fetchGetMe } from "./redux/slices/authSlice";

function App() {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(fetchGetMe());
  }, []);

  return (
    <div className="App">
      <Header />
      <div className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/learning-techniques" element={<LearningTechniques />} />
          <Route path="/auth/login" element={<LoginPage />} />
          <Route path="/auth/sign-up" element={<SignUpPage />} />
          <Route path="/user-page" element={<UserPage />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
