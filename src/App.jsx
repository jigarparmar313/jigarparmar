import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import Skills from "./Pages/Skills";
import Contact from "./Pages/Contact";
import Projects from "./Pages/Projects";
import Experience from "./Pages/Experience";
import Footer from "./Components/Footer";
import ScrollTop from "./Components/ScrollTop";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Home />
      <Experience />
      <Skills />
      <Projects />
      <Contact />
      {/* <Routes> */}
        {/* <Route path="/" element={<Home />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/skills" element={<Skills />} /> */}
      {/* </Routes> */}
      <Footer />
      <ScrollTop />
    </BrowserRouter>
  );
};

export default App;
