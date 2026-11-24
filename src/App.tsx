import { MotionConfig } from "framer-motion";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./Globalstyle";
import { theme } from "./theme";
import Main from "./components/main/main";

function App() {
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyle />
            <MotionConfig reducedMotion="user">
                <Main />
            </MotionConfig>
        </ThemeProvider>
    );
}

export default App;
