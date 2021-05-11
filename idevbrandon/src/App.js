import Intro from "./components/intro/Intro";
import TopBar from "./components/topbar/Topbar";
import Projects from "./components/projects/Projects";
import Contact from "./components/contact/Contact";
import Navigator from "./components/UI/Navigator";

function App() {
  return (
    <div className="App">
      <Navigator />
      <Intro />
      <TopBar />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
