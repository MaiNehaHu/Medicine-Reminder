import React from "react";
import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./Index";

function App() {
  return (
    <React.Fragment>
      <BrowserRouter basename="/Medicine-reminder">
        <Routes>
          <Route path="/" element={<Index />} />
        </Routes>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
