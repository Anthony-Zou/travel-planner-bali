import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BaliTripMap from "./components/BaliTripMap";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <main>
          <Routes>
            <Route path="/" element={<BaliTripMap />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
// In App.js
