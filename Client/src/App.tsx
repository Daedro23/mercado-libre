import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { theme } from "./styles/theme";
import { HelmetProvider } from "react-helmet-async";
import { HeadProvider } from "./components/Head/Head";
import Home from "./pages/Home/Home";
import Results from "./pages/Results/Results";
import Description from "./pages/Description/Description";
import PageNotFound from "./pages/PageNotFound/PageNotFound";
import Navbar from "./components/navbar/Navbar";
import GlobalContainer from "./components/globalContainer/GlobalContainer";

const App: React.FC = () => {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <HelmetProvider>
          <HeadProvider> 
            <Navbar />
            <GlobalContainer>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/items" element={<Results />} />
                <Route path="/items/:id" element={<Description />} />
                <Route path="*" element={<PageNotFound />} />
              </Routes>
            </GlobalContainer>
          </HeadProvider>
        </HelmetProvider>
      </ThemeProvider>
    </Router>
  );
};

export default App;
