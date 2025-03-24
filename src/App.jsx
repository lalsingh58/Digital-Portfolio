import "./App.css";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar";
import Project from "./components/Project/Project";
import Skill from "./components/Skill/skill";

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Hero />
        <Skill />
        <Project />
        <Navbar />
      </div>
    </>
  );
}

export default App;
