import { Bar, Inner, Wordmark } from "./styled.nav";

export default function Nav() {
    return (
        <Bar>
            <Inner>
                <Wordmark href="/" aria-label="devho 홈">
                    devho.
                </Wordmark>
            </Inner>
        </Bar>
    );
}
