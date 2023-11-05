import React from "react";
import NavBar from "./components/NavBar";
import Hero from './components/Hero'
import Description from "./components/Description";
import NewsLetter from "./components/NewsLetter";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CalculatorRoute from "./components/CalculatorRoute";

function App() {

  return (
    <BrowserRouter>
      <div>
        <NavBar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <Description />
                <NewsLetter />
              </>
            }
          />
          <Route path="/calculator" element={<CalculatorRoute />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
