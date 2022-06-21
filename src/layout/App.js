import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Intro from "../pages/Intro";
import SwitchUserType from "../pages/SwitchUserType";
import Login from "../pages/Login";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Intro />} />
          <Route path="/user-type/:action" element={<SwitchUserType />} />
          <Route path="/login" element={<Login />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
