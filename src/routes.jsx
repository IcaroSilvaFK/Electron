import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Home } from "./screens/Home";

export function RoutesApplication() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}
