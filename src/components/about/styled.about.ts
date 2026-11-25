import styled from "styled-components";
import { media } from "../../theme";

export const Section = styled.div`
    max-width: 1008px;
    margin: 96px auto 0;
    padding: 0 24px;

    ${media.mobile} {
        margin-top: 64px;
        padding: 0 16px;
    }
`;

/* heading on the left, its rows on the right; every block shares the two edges */
export const Block = styled.section`
    padding: 40px 0;
    display: grid;
    grid-template-columns: 300px minmax(0, 1fr);
    border-top: 1px solid var(--hairline);
    scroll-margin-top: 0;

    h2 {
        font-size: 22px;
        font-weight: 500;
        line-height: 1.45;
        color: var(--ink);
    }

    ${media.tablet} {
        grid-template-columns: 200px minmax(0, 1fr);
    }

    ${media.mobile} {
        padding: 32px 0;
        grid-template-columns: minmax(0, 1fr);
        gap: 16px;

        h2 {
            font-size: 20px;
        }
    }
`;

export const Rows = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 12px;

    > li {
        min-height: 32px;
        display: flex;
        align-items: baseline;
        gap: 16px;
        line-height: 2;
    }

    /* one label column shared by every block, so rows line up */
    .label {
        flex: 0 0 96px;
        font-size: 14px;
        font-variant-numeric: tabular-nums;
        letter-spacing: 0.2px;
        white-space: nowrap;
        color: var(--mute);
    }

    p {
        flex: 1;
        min-width: 0;
        line-height: 1.6;
        color: var(--ink);
    }

    ${media.mobile} {
        > li {
            gap: 12px;
        }

        .label {
            flex-basis: 84px;
        }

        /* a group of several items gets the full width under its label */
        > li.group {
            flex-direction: column;
            gap: 0;
        }

        > li.group .label {
            flex-basis: auto;
        }
    }
`;

export const Skills = styled.ul`
    flex: 1;
    min-width: 0;
    display: flex;
    flex-wrap: wrap;
    gap: 0 24px;

    /* the icon hangs in the padding, so the row's baseline comes from the name */
    li {
        position: relative;
        padding-left: 26px;
        line-height: 2;
        color: var(--ink);
    }
`;

/* drawn as a mask so every logo takes the same color */
export const SkillIcon = styled.span<{ $src: string }>`
    position: absolute;
    top: calc(50% - 9px);
    left: 0;
    width: 18px;
    height: 18px;
    background-color: var(--mute);
    mask: url(${(props) => props.$src}) center / contain no-repeat;
    -webkit-mask: url(${(props) => props.$src}) center / contain no-repeat;
`;

export const Contact = styled(Rows)`
    .value {
        flex: 1;
        min-width: 0;
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        gap: 8px 16px;
    }

    a {
        min-width: 0;
        line-height: 1.6;
        color: var(--ink);
        text-decoration: underline;
        text-decoration-color: var(--hairline-strong);
        text-decoration-thickness: 1px;
        text-underline-offset: 4px;
        transition: text-decoration-color 150ms ease;

        ${media.hover} {
            &:hover {
                text-decoration-color: var(--on-dark);
            }
        }
    }
`;

export const CopyButton = styled.button`
    height: 28px;
    padding: 0 10px;
    display: inline-flex;
    align-items: center;
    gap: 6px;
    border: 1px solid var(--hairline);
    border-radius: var(--radius-sm);
    background-color: var(--surface-elevated);
    font-size: 13px;
    font-weight: 500;
    line-height: 1;
    color: var(--body);
    cursor: pointer;
    transition:
        transform 140ms var(--ease-out),
        border-color 150ms ease;

    ${media.hover} {
        &:hover {
            border-color: var(--hairline-strong);
        }
    }

    &:active {
        transform: scale(0.97);
    }

    /* the two icons share one spot and trade places when the address is copied */
    .icon {
        display: grid;
        width: 14px;
        height: 14px;

        > * {
            grid-area: 1 / 1;
            transition:
                opacity 160ms ease,
                transform 160ms var(--ease-out),
                filter 160ms ease;
        }

        > :last-child {
            opacity: 0;
            transform: scale(0.8);
            filter: blur(2px);
        }
    }

    &[data-copied="true"] .icon {
        > :first-child {
            opacity: 0;
            transform: scale(0.8);
            filter: blur(2px);
        }

        > :last-child {
            opacity: 1;
            transform: none;
            filter: none;
        }
    }
`;

export const Footer = styled.footer`
    padding: 24px 0 40px;
    display: flex;
    justify-content: space-between;
    gap: 16px;
    border-top: 1px solid var(--hairline);
    font-size: 14px;
    color: var(--mute);

    a {
        border-radius: var(--radius-xs);
        transition: color 150ms ease;

        ${media.hover} {
            &:hover {
                color: var(--on-dark);
            }
        }
    }
`;
