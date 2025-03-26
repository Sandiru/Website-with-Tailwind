import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Tools from "./pages/Tools";
import McqPage from "./pages/McqPage";
import EssayPage from "./pages/EssayPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/tools" element={<Tools />} />
      <Route path="/mcqPage" element={<McqPage />} />
      <Route path="/essayPage" element={<EssayPage />} />
    </Routes>
  );
}

export default App;
