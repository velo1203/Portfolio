import { createGlobalStyle } from "styled-components";
import { media, tokens } from "./theme";

const variables = Object.entries(tokens)
    .map(([name, value]) => `--${name}: ${value};`)
    .join("\n");

export const GlobalStyle = createGlobalStyle`
  :root {
    ${variables}
    color-scheme: dark;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
    -webkit-text-size-adjust: 100%;

    ${media.reducedMotion} {
      scroll-behavior: auto;
    }
  }

  body {
    min-height: 100svh;
    color: var(--body);
    background-color: var(--canvas);
    /* Inter covers Latin and digits, Pretendard covers Hangul */
    font-family: "Inter", "Pretendard Variable", Pretendard, -apple-system,
      BlinkMacSystemFont, system-ui, sans-serif;
    font-feature-settings: "calt", "kern", "liga", "ss03";
    font-size: 16px;
    line-height: 1.6;
    word-break: keep-all;
    overflow-wrap: anywhere;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  ul,
  ol {
    list-style: none;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  button,
  input {
    font: inherit;
    font-feature-settings: inherit;
    color: inherit;
  }

  img {
    display: block;
    max-width: 100%;
  }

  ::selection {
    color: var(--on-primary);
    background-color: var(--primary);
  }

  :focus-visible {
    outline: 2px solid var(--on-dark);
    outline-offset: 2px;
  }

  .sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    overflow: hidden;
    clip-path: inset(50%);
    white-space: nowrap;
  }
`;
