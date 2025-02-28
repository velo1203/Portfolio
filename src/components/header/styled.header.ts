import styled from "styled-components";

export const MainHeader = styled.header`
    h1 {
        font-size: ${(props) => props.theme.fontsize.small};
        color: ${(props) => props.theme.colors.secondary};
    }
`;
