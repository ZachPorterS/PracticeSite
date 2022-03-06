import NavBar from "./components/NavBar";
import SlideShow from "./components/SlideShow";
import { images } from './components/imageData';
import "./styles/App.css";

function App() {
  return (
    <div>
      <NavBar />
      <SlideShow slides={images} />
      {/* Body */}
      {/* Footer */}
    </div>
  );
}

export default App;
