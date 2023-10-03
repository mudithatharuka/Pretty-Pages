import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Content from "./collections/Home/Content";
import Header from "./collections/Header";
import NavBar from "./components/NavBar";
import About from "./collections/About/About";
import Contact from "./collections/Contact/Contact";

function App() {
  // Declaration of the variable for the theme: light or dark
  const [theme, setTheme] = useState("light");

  return (
    <div className={`App App-${theme}`}>
      <Header theme={theme} setTheme={setTheme} />
      <BrowserRouter>
        <NavBar theme={theme} />
        <Routes>
          <Route path="/" element={<Content theme={theme} />}></Route>
          <Route path="/about" element={<About theme={theme} />}></Route>
          <Route path="/contact" element={<Contact theme={theme} />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
