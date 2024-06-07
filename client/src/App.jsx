import "./App.css";
import Grid from "./components/grid/cssGrid";
import {
  Distribute25252525,
  Distribute5050,
  Distribute2575,
  Distribute255025,
  Distribute100,
} from "./components/grid/distribution/gridDistribution";
import Logo from "./components/logo/logo";
import Navbar from "./components/navbar/navbar";
import Home from "./pages/home";

import { useState } from "react";
import CreateNew from "./pages/createNew";
import Overview from "./pages/overview";

function App() {
  const [view, setView] = useState(<Home />);

  return (
    <>
      <Grid>
        <Distribute2575
          one={<Logo />}
          two={
            <Navbar
              viewCallback={setView}
              content={[
                { title: "Home", view: <Home /> },
                { title: "Create New", view: <CreateNew/>},
                { title: "Overview", view: <Overview/>}
              ]}
            />
          }
        />
        {view}
      </Grid>
    </>
  );
}

export default App;
