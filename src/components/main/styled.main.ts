import { motion } from "framer-motion";
import { lighten } from "polished";
import styled from "styled-components";

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.2 },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export const Container = styled(motion.div).attrs(() => ({
    initial: "hidden",
    animate: "visible",
    variants: containerVariants,
}))`
    width: 80%;
    margin: 0 auto;
    padding-top: 50px;

    ${(props) => props.theme.media.mobile} {
        width: 100%;
        padding-top: 30px;
    }
`;

export const MainHeader = styled(motion.header).attrs(() => ({
    initial: "hidden",
    animate: "visible",
    variants: itemVariants,
}))`
    span {
        display: block;
        width: 30px;
        height: 10px;
        background-color: ${(props) => props.theme.colors.primary};
    }
    h1 {
        font-size: ${(props) => props.theme.mobileFontSize.large};
        color: ${(props) => props.theme.colors.text};

        ${(props) => props.theme.media.tablet} {
            font-size: ${(props) => props.theme.mobileFontSize.large};
        }

        ${(props) => props.theme.media.mobile} {
            font-size: ${(props) => props.theme.mobileFontSize.medium};
        }
    }
`;

export const MainContent = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 50px;

    ${(props) => props.theme.media.tablet} {
        flex-direction: column;
        align-items: center;
        gap: 30px;
    }
`;
export const ImageSubContainer = styled(motion.div).attrs(() => ({
    initial: "hidden",
    animate: "visible",
    variants: itemVariants,
}))`
    display: flex;
    flex-direction: column;
    align-items: center;

    img {
        width: 240px;
        margin-top: 100px;
        border-radius: 5px;

        ${(props) => props.theme.media.tablet} {
            width: 250px;
            margin-top: 70px;
        }
    }

    .icon {
        width: 30px;
        margin-top: 25px;
        cursor: pointer;
        transition: transform 0.2s ease;

        &:hover {
            transform: scale(1.1);
        }

        ${(props) => props.theme.media.tablet} {
            width: 25px;
            margin-top: 20px;
        }

        ${(props) => props.theme.media.mobile} {
            width: 20px;
            margin-top: 15px;
        }
    }
`;

export const ContentSubContainer = styled(motion.div).attrs(() => ({
    initial: "hidden",
    animate: "visible",
    variants: itemVariants,
}))`
    flex: 1;
    padding: 25px;
    margin-left: 50px;
    display: flex;
    flex-direction: column;
    gap: 25px;

    ${(props) => props.theme.media.tablet} {
        margin-left: 0;
        text-align: center;
        align-items: center;
        padding: 0;
    }

    .content-head {
        h1 {
            font-weight: 300;
            font-size: ${(props) => props.theme.mobileFontSize.large};

            ${(props) => props.theme.media.mobile} {
                font-size: ${(props) => props.theme.mobileFontSize.medium};
            }
        }
    }
`;

export const HeadSpan = styled.span<{ name?: boolean }>`
    font-weight: 700;
    color: ${(props) =>
        props.name ? props.theme.colors.primary : props.theme.colors.text};
`;

export const ContainerGrid = styled(motion.div).attrs(() => ({
    initial: "hidden",
    animate: "visible",
    variants: containerVariants,
}))`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;

    ${(props) => props.theme.media.tablet} {
        grid-template-columns: 1fr;
    }
`;

export const GridBox = styled(motion.div).attrs(() => ({
    initial: "hidden",
    animate: "visible",
    variants: itemVariants,
}))`
    padding: 20px;
    border-radius: 10px;
    ${(props) => props.theme.media.tablet} {
        min-height: 300px;
        padding: 0px;
    }
    .gridhead {
        span {
            display: block;
            width: 20px;
            height: 8px;
            background-color: ${(props) => props.theme.colors.primary};
        }
        h1 {
            font-size: ${(props) => props.theme.mobileFontSize.medium};
            color: ${(props) => props.theme.colors.text};

            ${(props) => props.theme.media.mobile} {
                font-size: ${(props) => props.theme.mobileFontSize.small};
            }
        }
    }
`;

export const GridUl = styled.ul`
    margin-top: 15px;
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 10px;

    .gridli {
        display: flex;
        align-items: center;

        gap: 5px;
        ${(props) => props.theme.media.mobile} {
            flex-direction: row;
            align-items: flex-start;
            gap: 10px;
        }

        h1 {
            font-size: ${(props) => props.theme.mobileFontSize.small};
            color: ${(props) => props.theme.colors.secondary};
            font-weight: 500;
            margin-right: 4px;
        }
        p {
            flex-grow: 1;
            text-align: left;
            font-size: ${(props) => props.theme.mobileFontSize.small};
            font-weight: 500;
            color: ${(props) => props.theme.colors.text};
        }
        .grade {
            width: 25px;
            height: 25px;
        }
    }
`;

export const SkillTag = styled(motion.span).attrs(() => ({
    initial: "hidden",
    animate: "visible",
    variants: itemVariants,
}))`
    display: inline-block;
    padding: 5px 10px;
    border: 1.5px solid ${(props) => lighten(0.3, props.theme.colors.primary)};
    color: ${(props) => lighten(0.2, props.theme.colors.text)};
    border-radius: 7px;
    transition: background-color 0.15s ease, transform 0.2s ease;

    &:hover {
        background-color: ${(props) =>
            lighten(0.4, props.theme.colors.primary)};
        transform: scale(1.1);
    }
`;
