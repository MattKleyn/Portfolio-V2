import { Routes, Route } from "react-router-dom";
import HomePage from './pages/Home';
import ProjectsPage from './pages/Projects';
import useLenis from "./utils/useLenis";

function App() {
  useLenis();

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/project/:id" element={<ProjectsPage />} />
    </Routes>
  )
}

export default App
