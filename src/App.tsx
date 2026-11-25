import { GlobalStyle } from "./Globalstyle";
import About from "./components/about/about";
import Hero from "./components/hero/hero";
import Nav from "./components/nav/nav";

function App() {
    return (
        <>
            <GlobalStyle />
            <Nav />
            <main>
                <Hero />
                <About />
            </main>
        </>
    );
}

export default App;
