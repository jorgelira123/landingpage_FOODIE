import './App.css';
import Home from "./components/Home";
import About from "./components/About";
import Work from "./components/Work";
import Comments from "./components/Comments";
import Contacts from "./components/Contacts";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Home/>
      <About/>
      <Work/>
      <Comments/>
      <Contacts />
      <Footer />
    </div>
  );
}

export default App;
