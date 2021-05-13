import Navbar from "./components/Navbar";
import About from "./components/About";
import Technologies from "./components/Technologies";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

function App() {
    return (
        <div className="App">
            <Navbar/>
            <About id="about"/>
            <Technologies id="technologies"/>
            <Skills id="skills"/>
            <Projects id="projects"/>
            <Footer/>
        </div>
    );
}

export default App;