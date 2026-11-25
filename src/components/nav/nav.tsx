import { Bar, Inner, Links, Wordmark } from "./styled.nav";

export default function Nav() {
    return (
        <Bar id="top">
            <Inner>
                <Wordmark href="/" aria-label="devho 홈">
                    devho.
                </Wordmark>
                <Links aria-label="섹션">
                    <a href="#awards">수상</a>
                    <a href="#skills">기술</a>
                    <a href="#contact">연락처</a>
                </Links>
            </Inner>
        </Bar>
    );
}
