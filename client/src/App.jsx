import "./styles/index.css";
import { Hero } from "./component/Hero";
import { Navbar } from "./component/Navbar";
import { Footer } from "./component/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Footer />
    </>
  );
}

export default App;
