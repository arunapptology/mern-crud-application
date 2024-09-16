import "./App.css";

import Home from "./Components/Home";
import Create from "./Components/Create";
import Update from "./Components/Update";

import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/create" element={<Create />} />
          <Route exact path="/update/:id" element={<Update />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
