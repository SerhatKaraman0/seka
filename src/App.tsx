import "./App.css";
import BackgroundComponent from "./components/BackgroundComponent";
import MainContentComponent from "./components/MainContentComponent";
import NavbarComponent from "./components/NavbarComponent";
import ProjectsComponent from "./components/ProjectsComponent";

function App() {
  return (
    <div className="bg-black relative w-screen h-screen max-w-full">
      <NavbarComponent />
      <MainContentComponent />
      <BackgroundComponent />
      <ProjectsComponent />
    </div>
  );
}

export default App;
