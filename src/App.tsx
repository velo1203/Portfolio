import { GlobalStyle } from "./Globalstyle";
import Awards from "./components/awards/awards";
import Hero from "./components/hero/hero";
import Nav from "./components/nav/nav";
import { Footer, Main, Page } from "./styled.app";

import config from "./config/config.json";

function App() {
    return (
        <Page>
            <GlobalStyle />
            <Nav />
            <Main>
                <Hero />
                <Awards />
            </Main>
            <Footer>© 2026 {config.Name}</Footer>
        </Page>
    );
}

export default App;
