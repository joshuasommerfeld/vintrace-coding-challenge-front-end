import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

import WineDetailsPage from "./Pages/WineDetailsPage";

function App() {
  return (
      <Router>
        <Routes>
          <Route path="/wine/:lotCode" element={<WineDetailsPage />} />
        </Routes>
      </Router>
  );
}

export default App;
