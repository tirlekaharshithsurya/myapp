import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Card from "./pages/Card";
function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/card" element={<Card />} />
    </Routes>
  );
}

export default App;
