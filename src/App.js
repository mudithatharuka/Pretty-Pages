import { useState } from "react";
import "./App.css";
import Content from "./collections/Home/Content";
import Header from "./collections/Header";
import NavBar from "./components/NavBar";

function App() {
  const [theme, setTheme] = useState("light");

  return (
    <div className={`App App-${theme}`}>
      <Header theme={theme} setTheme={setTheme} />
      <NavBar theme={theme} />
      <Content theme={theme} />
    </div>
  );
}

export default App;
