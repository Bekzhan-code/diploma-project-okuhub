import { Route, Routes } from "react-router-dom";

import "./scss/app.scss";
import Home from "./pages/Home";
import Header from "./components/Header";
import LearningTechniques from "./pages/LearningTechniques";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/learning-techniques" element={<LearningTechniques />} />
          <Route path="/auth/login" element={<LoginPage />} />
          <Route path="/auth/sign-up" element={<SignUpPage />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
