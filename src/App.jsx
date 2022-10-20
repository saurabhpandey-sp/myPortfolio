import Hero from "./Components/Hero";
import Cards from "./Components/Cards";
import Abouts from "./Components/About";
import Skills from "./Components/Skills";
import Contacts from "./Components/Contact";
import Footers from "./Components/Footer";

import { BrowserRouter as Router, Routes , Route } from "react-router-dom";

import React from 'react'

function App() {

  return (
    <>
    <Router>
        <Routes>
         <Route path="/myPortfolio" element={<><Hero/><Abouts/><Cards/><Skills/><Contacts/><Footers/></>} />
       </Routes>
     </Router>
    </>
  );
}

export default App ;
