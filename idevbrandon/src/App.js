import Intro from "./components/intro/Intro";
import TopBar from "./components/topbar/Topbar";
import Projects from "./components/projects/Projects";
import Contact from "./components/contact/Contact";

function App() {
  return (
    <div className="App">
      <Intro />
      <TopBar />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
