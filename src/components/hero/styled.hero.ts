import styled from "styled-components";
import { arrive, media } from "../../theme";

export const Section = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;

    /* the name, then the sentences; the awards follow in their own file */
    > * {
        ${arrive}
    }
    > *:nth-child(2) {
        animation-delay: 60ms;
    }
`;

export const Name = styled.h1`
    font-size: 64px;
    font-weight: 600;
    line-height: 1.1;
    color: var(--ink);

    ${media.mobile} {
        font-size: 44px;
    }
`;

export const Intro = styled.p`
    margin-top: 20px;
    font-size: 18px;
    line-height: 1.6;
    color: var(--body);

    /* one sentence to a line where the screen is wide enough to hold it */
    span {
        display: block;
    }

    ${media.tablet} {
        max-width: 480px;
        text-wrap: balance;

        span {
            display: inline;
        }
    }

    ${media.mobile} {
        margin-top: 16px;
    }
`;
