import { useState } from "react";
import "./App.css";
import Header from "./collections/Header";

function App() {
  const [theme, setTheme] = useState("light");

  return (
    <div className={`App App-${theme}`}>
      <Header theme={theme} setTheme={setTheme} />
    </div>
  );
}

export default App;
