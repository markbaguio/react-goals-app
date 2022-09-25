import "./App.css";
import { Routes, Route } from "react-router-dom";
import Goals from "../src/pages/Goals";
import CreateGoal from "../src/pages/CreateGoal";
import Page404 from "./pages/Page404";
import { CssBaseline, ThemeProvider } from "@mui/material";
import defaultTheme from "./themes/defaultTheme";

function App() {
  return (
    <>
      <ThemeProvider theme={defaultTheme}>
        <CssBaseline />
        <Routes>
          <Route path="/" element={<Goals />} />
          <Route path="/creategoal" element={<CreateGoal />} />
          <Route path="*" element={<Page404 />} />
        </Routes>
      </ThemeProvider>
    </>
  );
}

export default App;
