import React from "react";
import { BrownRouter, Routes, Route } from "react-router-dom";
import { loginpages } from "./routes/routes";

function App() {
  return (
    <BrownRouter>
      <Routes>
        <Route path="./login" elements={<loginpages />}></Route>
      </Routes>
    </BrownRouter>
  );
}
export default App;
