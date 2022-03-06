import NavBar from "./components/NavBar";
import SlideShow from "./components/SlideShow";
import "./styles/App.css";
import { Routers, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <NavBar />
      <SlideShow />
      {/* Body */}
      {/* Footer */}
    </div>
  );
}

export default App;
