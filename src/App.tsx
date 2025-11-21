import Navbar from "./components/Navbar";
import HeroSlider from "./components/HeroSlider";
import About from "./components/About";
import Services from "./components/Services";
import Footer from "./components/Footer";
import Book from "./components/Book";

export default function App() {
  return (
    <div>
      <Navbar />
      <HeroSlider />
      <About />
      <Book />
      <Services />
      <Footer />
    </div>
  );
}
