import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Component/Login/Login";
import Dashboard from "./Component/Dashboard/Dashboard";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
