import "./styles.css";
import { Routes, Route } from "react-router-dom";
import Header from "./components/header";
import { Home, Welcome, Login, Register } from "./pages/";
export default function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/welcome" element={<Welcome />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/" exact element={<Welcome />}></Route>
      </Routes>
    </div>
  );
}
