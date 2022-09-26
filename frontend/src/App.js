import "./App.css";
import { Routes, Route } from "react-router-dom";
import Goals from "../src/pages/Goals";
import CreateGoal from "../src/pages/CreateGoal";
import Page404 from "./pages/Page404";
import { CssBaseline, ThemeProvider } from "@mui/material";
import defaultTheme from "./themes/defaultTheme";
import Layout from "./components/Layout";
import aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    aos.init({
      duration: 1000,
    });
  }, []);

  return (
    <>
      <ThemeProvider theme={defaultTheme}>
        <CssBaseline />
        <Layout>
          <Routes>
            <Route path="/" element={<Goals />} />
            <Route path="/creategoal" element={<CreateGoal />} />
            <Route path="*" element={<Page404 />} />
          </Routes>
        </Layout>
      </ThemeProvider>
    </>
  );
}

export default App;
