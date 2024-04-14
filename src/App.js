import { Route, Routes } from "react-router-dom";

import "./scss/app.scss";
import Home from "./pages/Home";
import Header from "./components/Header";
import LearningTechniques from "./pages/LearningTechniques";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/learning-techniques" element={<LearningTechniques />} />
      </Routes>
    </div>
  );
}

export default App;
