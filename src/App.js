import "./App.css";
import About from "./components/About";
import Dashboard from "./components/Dashboard";
import Experience from "./components/Experience";
import MyNavbar from "./components/MyNavbar";
import { Route } from "react-router-dom";

function App() {
  return (
    <>
      <MyNavbar />
      <Route exact path="/">
        <Dashboard />
      </Route>

      <Route path="/about">
        <About />
      </Route>

      <Route path="/experience">
        <Experience />
      </Route>
    </>
  );
}

export default App;
