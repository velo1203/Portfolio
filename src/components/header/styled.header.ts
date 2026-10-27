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
    height: ${({ theme }) => theme.layout.headerHeight};
    background: ${({ theme }) => theme.colors.background};
    border-bottom: 1px solid ${({ theme }) => theme.colors.border};

    ${({ theme }) => theme.media.mobile} {
        padding: 0 ${({ theme }) => theme.space.xl};
    }

    .logo {
        font-size: 1rem;
        font-weight: 600;
        color: ${({ theme }) => theme.colors.text};
        letter-spacing: -0.01em;
    }

    nav {
        display: flex;
        gap: 40px;

        ${({ theme }) => theme.media.mobile} {
            gap: 20px;
        }

        a {
            font-size: ${({ theme }) => theme.fontSize.sm};
            font-weight: ${({ theme }) => theme.fontWeight.regular};
            color: ${({ theme }) => theme.colors.textSecondary};
            letter-spacing: 0.01em;
            transition: color ${({ theme }) => theme.transition.base};

            &:hover {
                color: ${({ theme }) => theme.colors.text};
            }
        }
    }
`;
