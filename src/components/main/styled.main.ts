import { motion } from "framer-motion";
import { lighten } from "polished";
import styled from "styled-components";

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.08 },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 12 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

export const Container = styled(motion.main).attrs(() => ({
    initial: "hidden",
    animate: "visible",
    variants: containerVariants,
}))`
    max-width: 1040px;
    margin: 0 auto;
    padding: 40px 0 20px;

    ${(props) => props.theme.media.mobile} {
        padding: 15px 0 30px;
    }
`;

export const PageTitle = styled(motion.header).attrs(() => ({
    variants: itemVariants,
}))`
    span {
        display: block;
        width: 30px;
        height: 10px;
        background-color: ${(props) => props.theme.colors.primary};
    }
    p {
        font-size: ${(props) => props.theme.fontsize.large};
        font-weight: 700;
        color: ${(props) => props.theme.colors.text};

        ${(props) => props.theme.media.mobile} {
            font-size: ${(props) => props.theme.fontsize.medium};
        }
    }
`;

export const MainContent = styled.div`
    display: flex;
    align-items: flex-start;
    gap: 90px;
    margin-top: 48px;

    ${(props) => props.theme.media.tablet} {
        flex-direction: column;
        gap: 36px;
        margin-top: 36px;
    }
`;

export const Aside = styled(motion.div).attrs(() => ({
    variants: itemVariants,
}))`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 22px;
    flex-shrink: 0;

    ${(props) => props.theme.media.tablet} {
        align-items: flex-start;
        gap: 16px;
    }

    .profile {
        display: block;
        width: 240px;
        height: auto;
        border-radius: 5px;

        ${(props) => props.theme.media.tablet} {
            width: 180px;
        }

        ${(props) => props.theme.media.mobile} {
            width: 150px;
        }
    }

    a {
        display: block;
        padding: 4px;
        border-radius: 50%;
        transition: transform 0.2s ease;

        &:hover {
            transform: scale(1.1);
        }

        &:focus-visible {
            outline: 2px solid ${(props) => props.theme.colors.primary};
            outline-offset: 2px;
        }

        img {
            display: block;
            width: 30px;
            height: 30px;
        }
    }
`;

export const Content = styled.div`
    flex: 1;
    min-width: 0;
    display: flex;
    flex-direction: column;
    gap: 38px;

    ${(props) => props.theme.media.tablet} {
        width: 100%;
        gap: 36px;
    }
`;

export const Greeting = styled(motion.h1).attrs(() => ({
    variants: itemVariants,
}))`
    font-weight: 300;
    font-size: ${(props) => props.theme.fontsize.large};
    line-height: 1.45;

    ${(props) => props.theme.media.mobile} {
        font-size: ${(props) => props.theme.fontsize.medium};
    }
`;

export const HeadSpan = styled.span`
    font-weight: 700;
    color: ${(props) => props.theme.colors.primary};
`;

export const Section = styled(motion.section).attrs(() => ({
    variants: itemVariants,
}))`
    .head {
        span {
            display: block;
            width: 20px;
            height: 8px;
            background-color: ${(props) => props.theme.colors.primary};
        }
        h2 {
            font-size: ${(props) => props.theme.fontsize.medium};
            font-weight: 700;
            color: ${(props) => props.theme.colors.text};

            ${(props) => props.theme.media.mobile} {
                font-size: ${(props) => props.theme.fontsize.small};
            }
        }
    }
`;

export const Rows = styled.ul`
    margin-top: 15px;
    display: flex;
    flex-direction: column;
    gap: 10px;
`;

export const Row = styled.li<{ $center?: boolean }>`
    display: flex;
    align-items: ${(props) => (props.$center ? "center" : "baseline")};
    gap: 12px;
    font-size: ${(props) => props.theme.fontsize.small};
    font-weight: 500;
    line-height: 1.5;

    ${(props) => props.theme.media.mobile} {
        gap: 8px;
    }

    /* one label column shared by every section, so rows line up */
    .label {
        flex: 0 0 92px;
        white-space: nowrap;
        color: ${(props) => props.theme.colors.secondary};

        ${(props) => props.theme.media.mobile} {
            flex-basis: 84px;
        }
    }
    p {
        flex: 1;
        min-width: 0;
        color: ${(props) => props.theme.colors.text};
    }
`;

export const Tags = styled.div`
    flex: 1;
    min-width: 0;
    display: flex;
    flex-wrap: wrap;
    gap: 10px 18px;
`;

/* drawn as a mask so every logo takes the same color */
export const SkillIcon = styled.span<{ $src: string }>`
    width: 28px;
    height: 28px;
    background-color: ${(props) => lighten(0.2, props.theme.colors.text)};
    mask: url(${(props) => props.$src}) center / contain no-repeat;
    -webkit-mask: url(${(props) => props.$src}) center / contain no-repeat;
`;
