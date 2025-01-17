import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Projets from "./Components/projets";
import Cv from "./Components/cv";
import Contacts from "./Components/contacts";
import Test from "./Components/Test";

const App = () => {
  return (
    <Router>

      {/* Définition des routes */}
      <Routes>
      <Route path="/" element={<Test/>}></Route>
        <Route path="/projets" element={<Projets />} />
        <Route path="/cv" element={<Cv />} />
        <Route path="/contacts" element={<Contacts />} />
        
      </Routes>
    </Router>
  );
};

export default App;
