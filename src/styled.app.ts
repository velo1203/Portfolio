import styled from "styled-components";
import { media } from "./theme";

export const Page = styled.div`
    min-height: 100svh;
    display: flex;
    flex-direction: column;
`;

/* the page is short, so it sits in the middle of a tall window */
export const Main = styled.main`
    flex: 1;
    width: 100%;
    max-width: 688px;
    margin: 0 auto;
    padding: 72px 24px 96px;
    display: flex;
    flex-direction: column;
    justify-content: center;

    ${media.mobile} {
        padding: 48px 16px 64px;
        justify-content: flex-start;
    }
`;

export const Footer = styled.footer`
    padding: 24px;
    border-top: 1px solid var(--hairline);
    text-align: center;
    font-size: 14px;
    color: var(--mute);
`;
