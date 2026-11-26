import styled, { keyframes } from "styled-components";
import { media } from "../../theme";

const rise = keyframes`
    from {
        opacity: 0;
        transform: translateY(12px);
    }
`;

const fade = keyframes`
    from {
        opacity: 0;
    }
`;

export const Section = styled.section`
    max-width: 1008px;
    margin: 0 auto;
    padding: 96px 24px 64px;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;

    /* the heading, the sentence and the actions arrive one after another */
    > * {
        animation: ${rise} 400ms var(--ease-out) both;
    }
    > *:nth-child(2) {
        animation-delay: 60ms;
    }
    > *:nth-child(3) {
        animation-delay: 120ms;
    }

    ${media.reducedMotion} {
        > * {
            animation-name: ${fade};
        }
    }

    ${media.mobile} {
        padding: 64px 16px 48px;
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

export const Actions = styled.div`
    margin-top: 32px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 8px;
`;

export const Button = styled.a<{ $primary?: boolean }>`
    height: 36px;
    padding: 0 16px;
    display: inline-flex;
    align-items: center;
    gap: 8px;
    border-radius: var(--radius-md);
    font-size: 14px;
    font-weight: 500;
    letter-spacing: 0.2px;
    color: ${(props) =>
        props.$primary ? "var(--on-primary)" : "var(--on-dark)"};
    background-color: ${(props) =>
        props.$primary ? "var(--primary)" : "var(--surface-elevated)"};
    border: 1px solid
        ${(props) => (props.$primary ? "var(--primary)" : "var(--hairline)")};
    transition:
        transform 140ms var(--ease-out),
        background-color 150ms ease,
        border-color 150ms ease;

    ${media.hover} {
        &:hover {
            background-color: ${(props) =>
                props.$primary
                    ? "var(--primary-pressed)"
                    : "var(--surface-card)"};
            border-color: ${(props) =>
                props.$primary
                    ? "var(--primary-pressed)"
                    : "var(--hairline-strong)"};
        }
    }

    &:active {
        transform: scale(0.97);
    }

    /* the icon library wraps each icon in a block of its own */
    > div {
        display: flex;
    }
`;
