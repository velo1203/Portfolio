import styled from "styled-components";
import { media } from "../../theme";

export const Bar = styled.header`
    border-bottom: 1px solid var(--hairline);
`;

export const Inner = styled.div`
    max-width: 1008px;
    height: 56px;
    margin: 0 auto;
    padding: 0 24px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 16px;

    ${media.mobile} {
        padding: 0 16px;
    }
`;

export const Wordmark = styled.a`
    font-size: 16px;
    font-weight: 600;
    letter-spacing: 0.2px;
    color: var(--ink);
    border-radius: var(--radius-xs);
`;

/* pulled out by the padding of its last link, so the text ends on the page margin */
export const Links = styled.nav`
    margin-right: -12px;
    display: flex;
    align-items: center;
    gap: 4px;

    ${media.mobile} {
        margin-right: -8px;
    }

    a {
        display: flex;
        align-items: center;
        height: 36px;
        padding: 0 12px;
        border-radius: var(--radius-md);
        font-size: 14px;
        font-weight: 500;
        letter-spacing: 0.2px;
        color: var(--mute);
        transition: color 150ms ease;

        ${media.hover} {
            &:hover {
                color: var(--on-dark);
            }
        }

        ${media.mobile} {
            padding: 0 8px;
        }
    }
`;
