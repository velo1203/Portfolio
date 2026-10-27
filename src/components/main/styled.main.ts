import { motion } from "framer-motion";
import styled, { css } from "styled-components";

export const PageWrapper = styled.div`
    max-width: ${({ theme }) => theme.layout.maxWidth};
    margin: 0 auto;
    padding: 0 40px 160px;

    ${({ theme }) => theme.media.mobile} {
        padding: 0 20px 100px;
    }
`;

// ── Shared ────────────────────────────────────────────────────────────────────

// 줄 단위 목록(Skills, Awards)의 구분선
const listRow = css`
    padding: 22px 0;
    border-bottom: 1px solid ${({ theme }) => theme.colors.border};

    &:first-child {
        border-top: 1px solid ${({ theme }) => theme.colors.border};
    }
`;

export const Section = styled(motion.section)`
    margin-top: ${({ theme }) => theme.space.section};
    scroll-margin-top: 80px;
`;

export const SectionLabel = styled.div`
    margin-bottom: 36px;

    h2 {
        font-size: ${({ theme }) => theme.fontSize["2xl"]};
        font-weight: ${({ theme }) => theme.fontWeight.bold};
        color: ${({ theme }) => theme.colors.text};
        letter-spacing: -0.03em;
    }
`;

export const Tag = styled.span`
    display: inline-flex;
    align-items: center;
    gap: 6px;
    padding: 5px 14px;
    background: ${({ theme }) => theme.colors.accentSubtle};
    color: ${({ theme }) => theme.colors.text};
    border: 1px solid ${({ theme }) => theme.colors.accentBorder};
    border-radius: ${({ theme }) => theme.radius.pill};
    font-size: ${({ theme }) => theme.fontSize.sm};
    font-weight: ${({ theme }) => theme.fontWeight.regular};
    letter-spacing: -0.01em;
    transition: border-color ${({ theme }) => theme.transition.base};

    svg {
        font-size: 0.95rem;
        flex-shrink: 0;
        color: ${({ theme }) => theme.colors.textSecondary};
    }

    &:hover {
        border-color: ${({ theme }) => theme.colors.accent};
    }
`;

export const LiveDot = styled.span`
    display: inline-flex;
    align-items: center;
    gap: 6px;
    color: ${({ theme }) => theme.colors.success};

    &::before {
        content: "";
        width: 6px;
        height: 6px;
        border-radius: 50%;
        background: currentColor;
    }
`;

// ── Hero ──────────────────────────────────────────────────────────────────────

export const HeroSection = styled(motion.section)`
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-top: ${({ theme }) => theme.layout.headerHeight};
`;

export const HeroGrid = styled.div`
    display: grid;
    grid-template-columns: 1fr 1.1fr;
    align-items: center;
    gap: ${({ theme }) => theme.space["3xl"]};

    ${({ theme }) => theme.media.tablet} {
        grid-template-columns: 1fr;
        gap: ${({ theme }) => theme.space["4xl"]};
    }
`;

export const HeroLeft = styled.div`
    display: flex;
    flex-direction: column;
`;

export const HeroEyebrow = styled(motion.p)`
    font-size: ${({ theme }) => theme.fontSize.md};
    font-weight: ${({ theme }) => theme.fontWeight.medium};
    color: ${({ theme }) => theme.colors.accent};
    letter-spacing: 0.01em;
    margin-bottom: 18px;
`;

export const HeroName = styled(motion.h1)`
    font-size: ${({ theme }) => theme.fontSize.display};
    font-weight: ${({ theme }) => theme.fontWeight.bold};
    line-height: 1.05;
    color: ${({ theme }) => theme.colors.text};
    letter-spacing: -0.04em;
    margin-bottom: 18px;
`;

export const EducationBadge = styled(motion.p)`
    display: flex;
    align-items: baseline;
    gap: ${({ theme }) => theme.space.md};
    margin-bottom: 40px;
    font-size: ${({ theme }) => theme.fontSize.lg};
    color: ${({ theme }) => theme.colors.textSecondary};
    letter-spacing: -0.01em;

    span.year {
        font-size: ${({ theme }) => theme.fontSize.md};
        color: ${({ theme }) => theme.colors.textTertiary};
    }
`;

export const HeroActions = styled(motion.div)`
    display: flex;
    gap: 14px;
    flex-wrap: wrap;
    align-items: center;
`;

export const GithubButton = styled.button`
    display: flex;
    align-items: center;
    gap: ${({ theme }) => theme.space.sm};
    padding: 12px 26px;
    background: ${({ theme }) => theme.colors.accent};
    color: ${({ theme }) => theme.colors.onAccent};
    border: none;
    border-radius: ${({ theme }) => theme.radius.pill};
    font-size: ${({ theme }) => theme.fontSize.md};
    font-weight: ${({ theme }) => theme.fontWeight.medium};
    letter-spacing: -0.01em;
    cursor: pointer;
    transition:
        background ${({ theme }) => theme.transition.base},
        transform ${({ theme }) => theme.transition.fast};

    &:hover {
        background: ${({ theme }) => theme.colors.accentHover};
        transform: translateY(-1px);
    }

    &:active {
        transform: translateY(0);
    }
`;

export const PreviewStack = styled(motion.div)`
    position: relative;
    height: 380px;

    ${({ theme }) => theme.media.mobile} {
        height: 260px;
    }
`;

export const PreviewCard = styled.a<{ $index: number }>`
    position: absolute;
    width: 78%;
    aspect-ratio: 16 / 10;
    border-radius: ${({ theme }) => theme.radius.md};
    overflow: hidden;
    background: ${({ theme }) => theme.colors.surface};
    border: 1px solid ${({ theme }) => theme.colors.border};
    box-shadow: ${({ theme }) => theme.shadow.card};
    top: ${(props) => props.$index * 52}px;
    left: ${(props) => props.$index * 11}%;
    z-index: ${(props) => 3 - props.$index};
    transform: rotate(${(props) => (props.$index - 1) * 3}deg);
    transition:
        transform ${({ theme }) => theme.transition.slow},
        top ${({ theme }) => theme.transition.slow},
        border-color ${({ theme }) => theme.transition.base};

    ${PreviewStack}:hover & {
        top: ${(props) => props.$index * 64}px;
        transform: rotate(${(props) => (props.$index - 1) * 4}deg);
    }

    &:hover {
        border-color: ${({ theme }) => theme.colors.accent};
        z-index: 4;
    }

    .label {
        position: absolute;
        left: ${({ theme }) => theme.space.md};
        bottom: ${({ theme }) => theme.space.md};
        display: flex;
        align-items: center;
        gap: ${({ theme }) => theme.space.sm};
        padding: 6px 12px;
        border-radius: ${({ theme }) => theme.radius.pill};
        background: ${({ theme }) => theme.colors.background};
        border: 1px solid ${({ theme }) => theme.colors.border};
        font-size: ${({ theme }) => theme.fontSize.sm};
        color: ${({ theme }) => theme.colors.text};
    }
`;

// ── Projects ──────────────────────────────────────────────────────────────────

export const ProjectGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;

    ${({ theme }) => theme.media.mobile} {
        grid-template-columns: 1fr;
    }
`;

export const ProjectCard = styled(motion.article)`
    display: flex;
    flex-direction: column;
    border-radius: ${({ theme }) => theme.radius.lg};
    overflow: hidden;
    background: ${({ theme }) => theme.colors.surface};
    border: 1px solid ${({ theme }) => theme.colors.border};
    scroll-margin-top: 90px;
    transition:
        border-color ${({ theme }) => theme.transition.base},
        transform ${({ theme }) => theme.transition.base};

    &:hover {
        border-color: ${({ theme }) => theme.colors.borderStrong};
        transform: translateY(-3px);
    }

    .body {
        display: flex;
        flex-direction: column;
        gap: ${({ theme }) => theme.space.md};
        padding: 22px ${({ theme }) => theme.space.xl} ${({ theme }) => theme.space.xl};
        flex: 1;
    }

    .meta {
        display: flex;
        align-items: center;
        gap: 10px;
        font-size: ${({ theme }) => theme.fontSize.xs};
        color: ${({ theme }) => theme.colors.textTertiary};
    }

    h3 {
        font-size: ${({ theme }) => theme.fontSize.xl};
        font-weight: ${({ theme }) => theme.fontWeight.bold};
        color: ${({ theme }) => theme.colors.text};
        letter-spacing: -0.02em;
    }

    .summary {
        font-size: ${({ theme }) => theme.fontSize.md};
        color: ${({ theme }) => theme.colors.text};
        letter-spacing: -0.01em;
    }

    .description {
        font-size: ${({ theme }) => theme.fontSize.sm};
        line-height: 1.7;
        color: ${({ theme }) => theme.colors.textSecondary};
        letter-spacing: -0.01em;
    }

    .footer {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: ${({ theme }) => theme.space.lg};
        margin-top: auto;
        padding-top: ${({ theme }) => theme.space.sm};
    }

    .tags {
        display: flex;
        flex-wrap: wrap;
        gap: 6px;
    }
`;

export const SiteButton = styled.a`
    display: inline-flex;
    align-items: center;
    gap: ${({ theme }) => theme.space.sm};
    padding: 10px 18px;
    background: ${({ theme }) => theme.colors.accent};
    color: ${({ theme }) => theme.colors.onAccent};
    border-radius: ${({ theme }) => theme.radius.pill};
    font-size: ${({ theme }) => theme.fontSize.sm};
    font-weight: ${({ theme }) => theme.fontWeight.medium};
    transition: background ${({ theme }) => theme.transition.base};

    svg {
        font-size: 1rem;
    }

    &:hover {
        background: ${({ theme }) => theme.colors.accentHover};
    }
`;

export const Thumb = styled.div<{ $light?: boolean }>`
    position: relative;
    aspect-ratio: 16 / 10;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${({ theme, $light }) =>
        $light ? theme.colors.paper : theme.colors.surfaceRaised};
    border-bottom: 1px solid ${({ theme }) => theme.colors.border};

    img {
        position: absolute;
        inset: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: left center;
    }

    .placeholder {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: ${({ theme }) => theme.space.sm};
        font-size: 1.6rem;
        font-weight: ${({ theme }) => theme.fontWeight.bold};
        letter-spacing: -0.03em;
        color: ${({ theme, $light }) =>
            $light ? theme.colors.onPaper : theme.colors.text};

        small {
            font-size: ${({ theme }) => theme.fontSize.sm};
            font-weight: ${({ theme }) => theme.fontWeight.regular};
            letter-spacing: -0.01em;
            color: ${({ theme }) => theme.colors.textTertiary};
        }
    }
`;

// ── Skills ────────────────────────────────────────────────────────────────────

export const SkillTable = styled.div`
    display: flex;
    flex-direction: column;
`;

export const SkillRow = styled(motion.div)`
    ${listRow}
    display: flex;
    align-items: flex-start;
    gap: ${({ theme }) => theme.space["2xl"]};

    ${({ theme }) => theme.media.mobile} {
        flex-direction: column;
        gap: ${({ theme }) => theme.space.md};
    }

    .category {
        flex-shrink: 0;
        width: 96px;
        padding-top: ${({ theme }) => theme.space.xs};
        font-size: ${({ theme }) => theme.fontSize.xs};
        font-weight: ${({ theme }) => theme.fontWeight.medium};
        letter-spacing: 0.06em;
        text-transform: uppercase;
        color: ${({ theme }) => theme.colors.accent};
    }

    .tags {
        display: flex;
        flex-wrap: wrap;
        gap: ${({ theme }) => theme.space.sm};
    }
`;

// ── Awards ────────────────────────────────────────────────────────────────────

export const AwardList = styled.div`
    display: flex;
    flex-direction: column;
`;

export const AwardItem = styled(motion.div)`
    ${listRow}
    display: flex;
    align-items: center;
    gap: ${({ theme }) => theme.space.xl};

    .medal {
        width: 40px;
        height: 40px;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-shrink: 0;
        background: ${({ theme }) => theme.colors.accentSubtle};
        border: 1px solid ${({ theme }) => theme.colors.accentBorder};
        border-radius: ${({ theme }) => theme.radius.md};
        color: ${({ theme }) => theme.colors.accent};
        font-size: 1rem;
    }

    .content {
        .year {
            font-size: ${({ theme }) => theme.fontSize.xs};
            font-weight: ${({ theme }) => theme.fontWeight.medium};
            color: ${({ theme }) => theme.colors.accent};
            letter-spacing: 0.02em;
            margin-bottom: ${({ theme }) => theme.space.xs};
        }

        .title {
            font-size: ${({ theme }) => theme.fontSize.md};
            line-height: 1.5;
            color: ${({ theme }) => theme.colors.text};
            letter-spacing: -0.01em;
        }
    }
`;

// ── Footer ────────────────────────────────────────────────────────────────────

export const FooterBar = styled.footer`
    margin-top: 140px;
    padding-top: 28px;
    border-top: 1px solid ${({ theme }) => theme.colors.border};
    text-align: center;
    font-size: ${({ theme }) => theme.fontSize.xs};
    color: ${({ theme }) => theme.colors.textTertiary};
    letter-spacing: -0.01em;
`;
