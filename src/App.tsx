import "./App.css";
import MainPageComponent from "./components/MainPageComponent";
import NavbarComponent from "./components/NavbarComponent";
import ProjectsPageComponent from "./components/ProjectsPageComponent";

function App() {
  return (
    <div className="relative w-screen h-screen flex flex-col max-w-full">
      <NavbarComponent />
      <MainPageComponent />
      <ProjectsPageComponent />
    </div>
  );
}

export default App;
