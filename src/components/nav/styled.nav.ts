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
