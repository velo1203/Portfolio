import styled, { keyframes } from "styled-components";
import { media } from "../../theme";

/* below this width the detail opens under its row instead of beside the list */
const stacked = "@media (max-width: 760px)";

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
    padding: 0 24px;
    scroll-margin-top: 24px;
    animation: ${rise} 400ms var(--ease-out) 180ms both;

    ${media.reducedMotion} {
        animation-name: ${fade};
    }

    ${media.mobile} {
        padding: 0 16px;
    }
`;

export const Palette = styled.div`
    overflow: hidden;
    border: 1px solid var(--hairline);
    border-radius: var(--radius-xl);
    background-color: var(--surface);
`;

export const Keycap = styled.kbd`
    min-width: 20px;
    height: 20px;
    padding: 0 6px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border: 1px solid var(--hairline);
    border-radius: var(--radius-xs);
    background: linear-gradient(var(--surface-card), var(--surface));
    font-family: inherit;
    font-size: 12px;
    line-height: 1;
    color: var(--body);
`;

export const SearchRow = styled.label`
    height: 56px;
    padding: 0 20px;
    display: flex;
    align-items: center;
    gap: 12px;
    border-bottom: 1px solid var(--hairline);
    color: var(--mute);
    cursor: text;

    input {
        flex: 1;
        min-width: 0;
        height: 100%;
        border: 0;
        outline: 0;
        background: none;
        font-size: 16px;
        color: var(--on-dark);
        caret-color: var(--on-dark);

        &::placeholder {
            color: var(--mute);
        }
    }

    /* the field has no ring of its own, so the whole row shows focus */
    &:focus-within {
        border-bottom-color: var(--hairline-strong);
        color: var(--on-dark);
    }

    ${media.mobile} {
        padding: 0 16px;
    }
`;

/* the shortcut hint, shown only where there is likely a keyboard */
export const Shortcut = styled.span`
    display: none;

    ${media.hover} {
        display: inline-flex;
        gap: 4px;
    }
`;

export const Body = styled.div`
    display: grid;
    grid-template-columns: 300px minmax(0, 1fr);

    ${media.tablet} {
        grid-template-columns: 280px minmax(0, 1fr);
    }

    ${stacked} {
        display: block;
        min-height: 0;
    }
`;

export const List = styled.ul`
    padding: 8px;
    display: flex;
    flex-direction: column;
    gap: 2px;
    border-right: 1px solid var(--hairline);

    ${stacked} {
        border-right: 0;
    }
`;

export const Row = styled.button`
    width: 100%;
    padding: 8px 10px;
    display: flex;
    align-items: center;
    gap: 12px;
    border: 0;
    border-radius: var(--radius-md);
    background: none;
    text-align: left;
    cursor: pointer;

    ${media.hover} {
        &:hover {
            background-color: var(--surface-hover);
        }
    }

    &[aria-current="true"] {
        background-color: var(--surface-active);
    }

    &:focus-visible {
        outline-offset: -2px;
    }

    .text {
        min-width: 0;
        display: flex;
        flex-direction: column;
    }

    .name {
        font-size: 14px;
        font-weight: 500;
        line-height: 1.45;
        letter-spacing: 0.2px;
        color: var(--on-dark);
    }

    .summary {
        overflow: hidden;
        font-size: 13px;
        line-height: 1.45;
        letter-spacing: 0.1px;
        color: var(--mute);
        text-overflow: ellipsis;
        white-space: nowrap;
    }
`;

export const IconTile = styled.span`
    flex: none;
    width: 32px;
    height: 32px;
    overflow: hidden;
    border-radius: var(--radius-md);
    background-color: var(--surface-card);

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`;

/* the detail of the open row, on narrow screens only */
export const Inline = styled.div`
    display: none;

    ${stacked} {
        display: block;
        padding: 8px 10px 16px;
    }
`;

export const Pane = styled.div`
    padding: 20px;

    ${stacked} {
        display: none;
    }
`;

/* holds the height of a detail while a search matches nothing, so the page does not jump */
export const Placeholder = styled.div`
    padding-bottom: calc(62.5% + 175px);

    ${media.tablet} {
        padding-bottom: calc(62.5% + 201px);
    }
`;

export const Detail = styled.article`
    .head {
        margin-top: 20px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 12px;
    }

    h3 {
        font-size: 20px;
        font-weight: 500;
        line-height: 1.4;
        letter-spacing: 0.2px;
        color: var(--ink);
    }

    /* room for three lines, so the list keeps its height from one project to the next */
    p {
        min-height: 4.8em;
        margin-top: 12px;
        font-size: 16px;
        line-height: 1.6;
        color: var(--body);
    }

    ${media.tablet} {
        p {
            min-height: 6.4em;
        }
    }

    /* under its row: the picture, the text, then the way out last */
    ${stacked} {
        display: flex;
        flex-direction: column;

        .head {
            order: 2;
            margin-top: 16px;
        }

        ul {
            order: 1;
            margin-top: 12px;
        }

        /* the row above already carries the name */
        h3 {
            display: none;
        }

        p {
            min-height: 0;
            margin-top: 12px;
        }
    }
`;

export const Shot = styled.img`
    width: 100%;
    aspect-ratio: 16 / 10;
    object-fit: cover;
    object-position: top;
    border: 1px solid var(--hairline);
    border-radius: var(--radius-md);
    background-color: var(--surface-card);
    animation: ${fade} 160ms ease-out;
`;

export const OpenLink = styled.a`
    flex: none;
    height: 32px;
    padding: 0 12px;
    display: inline-flex;
    align-items: center;
    gap: 6px;
    border: 1px solid var(--hairline-strong);
    border-radius: var(--radius-md);
    font-size: 14px;
    font-weight: 500;
    letter-spacing: 0.2px;
    color: var(--on-dark);
    transition:
        transform 140ms var(--ease-out),
        background-color 150ms ease;

    ${media.hover} {
        &:hover {
            background-color: var(--surface-active);
        }
    }

    &:active {
        transform: scale(0.97);
    }

    ${stacked} {
        flex: 1;
        height: 40px;
        justify-content: center;
    }
`;

export const Chips = styled.ul`
    margin-top: 10px;
    display: flex;
    flex-wrap: wrap;
    gap: 6px;

    li {
        padding: 2px 8px;
        border: 1px solid var(--hairline);
        border-radius: var(--radius-xs);
        font-size: 12px;
        line-height: 1.5;
        letter-spacing: 0.4px;
        color: var(--mute);
    }
`;

export const Empty = styled.li`
    padding: 40px 12px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 12px;
    text-align: center;
    font-size: 14px;
    color: var(--mute);

    button {
        height: 32px;
        padding: 0 12px;
        border: 1px solid var(--hairline-strong);
        border-radius: var(--radius-md);
        background: none;
        font-size: 14px;
        font-weight: 500;
        color: var(--on-dark);
        cursor: pointer;
        transition:
            transform 140ms var(--ease-out),
            background-color 150ms ease;

        ${media.hover} {
            &:hover {
                background-color: var(--surface-active);
            }
        }

        &:active {
            transform: scale(0.97);
        }
    }
`;

export const Footer = styled.div`
    height: 44px;
    padding: 0 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 16px;
    border-top: 1px solid var(--hairline);
    background-color: var(--surface-elevated);
    font-size: 13px;
    letter-spacing: 0.1px;
    color: var(--mute);

    ${media.mobile} {
        padding: 0 16px;
    }
`;

/* keyboard hints, shown only where there is likely a keyboard */
export const Hints = styled.div`
    display: none;

    ${media.hover} {
        display: flex;
        align-items: center;
        gap: 20px;
    }

    span {
        display: inline-flex;
        align-items: center;
        gap: 6px;
    }

    ${stacked} {
        display: none;
    }
`;
