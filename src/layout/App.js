import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Intro from "../pages/Intro";
import SwitchUserType from "../pages/SwitchUserType";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Intro />} />
          <Route path="/user-type/:action" element={<SwitchUserType />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
