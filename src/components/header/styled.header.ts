import styled from "styled-components";

export const MainHeader = styled.header`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 100;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 60px;
    height: 52px;
    background: rgba(0, 0, 0, 0.72);
    backdrop-filter: saturate(180%) blur(20px);
    -webkit-backdrop-filter: saturate(180%) blur(20px);
    border-bottom: 1px solid rgba(255, 255, 255, 0.08);

    ${(props) => props.theme.media.mobile} {
        padding: 0 24px;
    }

    .logo {
        font-size: 1rem;
        font-weight: 600;
        color: ${(props) => props.theme.colors.text};
        letter-spacing: -0.01em;
    }

    nav {
        display: flex;
        gap: 40px;

        ${(props) => props.theme.media.mobile} {
            gap: 20px;
        }

        a {
            font-size: 0.78rem;
            color: ${(props) => props.theme.colors.textMuted};
            letter-spacing: 0.01em;
            transition: color 0.2s ease;
            font-weight: 400;

            &:hover {
                color: ${(props) => props.theme.colors.text};
            }
        }
    }
`;
