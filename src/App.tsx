import { GlobalStyle } from "./Globalstyle";
import About from "./components/about/about";
import Hero from "./components/hero/hero";
import Nav from "./components/nav/nav";
import Projects from "./components/projects/projects";

function App() {
    return (
        <>
            <GlobalStyle />
            <Nav />
            <main>
                <Hero />
                <Projects />
                <About />
            </main>
        </>
    );
}

export default App;
