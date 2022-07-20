import Anakiytics from "./components/Anakiytics";
import Cards from "./components/Cards";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import NewsLetter from "./components/NewsLetter";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Hero/>
      <Anakiytics/>
      <NewsLetter/>
      <Cards/>
      <Footer/>
    </div>
  );
}

export default App;
