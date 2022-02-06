import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./components/main/home";
import Main from "./components/main";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          {<Route element={<Main />} path="main" />}
          {<Route element={<Home />} path="home" />}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
