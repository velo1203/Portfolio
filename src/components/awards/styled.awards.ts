import styled from "styled-components";
import { arrive, media } from "../../theme";

export const Section = styled.section`
    margin-top: 64px;
    ${arrive}
    animation-delay: 120ms;

    h2 {
        font-size: 20px;
        font-weight: 500;
        line-height: 1.4;
        letter-spacing: 0.2px;
        color: var(--ink);
    }

    ${media.mobile} {
        margin-top: 48px;
    }
`;

export const List = styled.ul`
    margin-top: 16px;
    border: 1px solid var(--hairline);
    border-radius: var(--radius-lg);
    background-color: var(--surface);

    li {
        padding: 16px 20px;
        display: flex;
        align-items: baseline;
        justify-content: space-between;
        gap: 24px;
    }

    li + li {
        border-top: 1px solid var(--hairline);
    }

    p {
        min-width: 0;
        color: var(--ink);
    }

    span {
        flex: none;
        font-size: 14px;
        font-variant-numeric: tabular-nums;
        letter-spacing: 0.2px;
        color: var(--mute);
    }

    ${media.mobile} {
        li {
            padding: 14px 16px;
            gap: 16px;
        }
    }
`;
