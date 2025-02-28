import { ThemeProvider } from "styled-components";
import Header from "./components/header/header";
import { GlobalStyle } from "./Globalstyle";
import { theme } from "./theme";
import Main from "./components/main/main";

function App() {
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyle />
            <>
                <Header />
                <Main />
            </>
        </ThemeProvider>
    );
}

export default App;
