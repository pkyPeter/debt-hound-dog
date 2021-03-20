import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider } from "@emotion/react";
import { SidebarProvider } from "./context/sidebar";
import theme from "./theme";
import Pages from "./pages";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <SidebarProvider>
        <Router>
          <Pages />
        </Router>
      </SidebarProvider>
    </ThemeProvider>
  );
}

export default App;
