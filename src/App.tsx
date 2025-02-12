import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./core.css";
import Index from "./pages/index";
import CppIndex from "./pages/cpp";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/cpp" element={<CppIndex />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
