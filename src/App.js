import React from "react";
import styled from "styled-components";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

import WineDetailsPage from "./Pages/WineDetailsPage";
import theme from "./styles/theme";

const SinglePageAppContainer = styled.div`
  min-height: 100vh;
  min-width: 100vw;
  background-color: ${theme.background};
`

function App() {
  return (
    <SinglePageAppContainer>
      <Router>
        <Routes>
          <Route path="/wine/:lotCode" element={<SinglePageAppContainer><WineDetailsPage /></SinglePageAppContainer>} />
        </Routes>
      </Router>
    </SinglePageAppContainer>
  );
}

export default App;
