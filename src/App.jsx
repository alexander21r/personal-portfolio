import "./App.css";
import About from "./components/About/About";
import Home from "./components/Home/Home";
import Project from "./components/Project/Project";
import Skills from "./components/Skills/Skills";
import Contact from "./components/Contact/Contact";

function App() {
  return (
    <div className="App">
      <Home />
      <About />
      <Skills />
      <Project />
      <Contact />
    </div>
  );
}

export default App;
