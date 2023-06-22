import { Routes, Route } from "react-router-dom";

// pages
import Main from "./pages/Main";
import Login from "./pages/Login";

function App() {
  return (
    <Routes>
      <Route index element={<Main />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}

export default App;
