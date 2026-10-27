import { motion } from "framer-motion";
import styled from "styled-components";

export const PageWrapper = styled.div`
    max-width: 980px;
    margin: 0 auto;
    padding: 0 40px 160px;

    ${(props) => props.theme.media.mobile} {
        padding: 0 20px 100px;
    }
`;

// ── Hero ──────────────────────────────────────────────────────────────────────

export const HeroSection = styled(motion.section)`
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-top: 52px;
    position: relative;

    &::before {
        content: '';
        position: absolute;
        top: 10%;
        left: -20%;
        width: 600px;
        height: 600px;
        background: radial-gradient(circle, rgba(123, 110, 246, 0.14) 0%, rgba(77, 157, 224, 0.06) 60%, transparent 80%);
        pointer-events: none;
    }
`;

export const HeroEyebrow = styled(motion.p)`
    font-size: 0.9rem;
    letter-spacing: 0.01em;
    color: ${(props) => props.theme.colors.primary};
    font-weight: 500;
    margin-bottom: 18px;
`;

export const HeroName = styled(motion.h1)`
    font-size: clamp(3rem, 7vw, 5.2rem);
    font-weight: 700;
    line-height: 1.05;
    color: ${(props) => props.theme.colors.text};
    margin-bottom: 44px;
    letter-spacing: -0.04em;
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
    gap: 8px;
    padding: 12px 26px;
    background: ${(props) => props.theme.colors.primary};
    color: #fff;
    border: none;
    border-radius: 980px;
    font-size: 0.88rem;
    font-weight: 500;
    cursor: pointer;
    transition: filter 0.2s ease, transform 0.15s ease;
    letter-spacing: -0.01em;

    &:hover {
        filter: brightness(1.1);
        transform: translateY(-1px);
    }

    &:active {
        transform: translateY(0);
        filter: brightness(0.95);
    }
`;

export const EducationBadge = styled(motion.div)`
    align-self: flex-start;
    margin-top: 20px;
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 12px 22px;
    background: ${(props) => props.theme.colors.surface};
    border: 1px solid ${(props) => props.theme.colors.surfaceBorder};
    border-radius: 980px;
    font-size: 0.85rem;
    color: ${(props) => props.theme.colors.textMuted};
    backdrop-filter: blur(10px);
    letter-spacing: -0.01em;

    span.year {
        color: ${(props) => props.theme.colors.primary};
        font-weight: 600;
    }
`;

// ── Section shared ────────────────────────────────────────────────────────────

export const Section = styled(motion.section)`
    margin-top: 120px;
`;

export const SectionLabel = styled.div`
    margin-bottom: 36px;

    h2 {
        font-size: 2rem;
        font-weight: 700;
        color: ${(props) => props.theme.colors.text};
        letter-spacing: -0.03em;
    }
`;

// ── Skills ────────────────────────────────────────────────────────────────────

export const SkillTable = styled.div`
    display: flex;
    flex-direction: column;
`;

export const SkillRow = styled(motion.div)`
    display: flex;
    align-items: flex-start;
    gap: 32px;
    padding: 22px 0;
    border-bottom: 1px solid ${(props) => props.theme.colors.surfaceBorder};

    &:first-child {
        border-top: 1px solid ${(props) => props.theme.colors.surfaceBorder};
    }

    ${(props) => props.theme.media.mobile} {
        flex-direction: column;
        gap: 12px;
    }

    .category {
        flex-shrink: 0;
        width: 96px;
        font-size: 0.78rem;
        font-weight: 600;
        letter-spacing: 0.06em;
        text-transform: uppercase;
        background: linear-gradient(
            135deg,
            ${(props) => props.theme.colors.gradientStart},
            ${(props) => props.theme.colors.gradientEnd}
        );
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        padding-top: 4px;
    }

    .tags {
        display: flex;
        flex-wrap: wrap;
        gap: 8px;
    }
`;

export const Tag = styled.span`
    display: inline-flex;
    align-items: center;
    gap: 6px;
    padding: 5px 14px;
    background: rgba(123, 143, 247, 0.1);
    color: ${(props) => props.theme.colors.text};
    border-radius: 980px;
    font-size: 0.83rem;
    font-weight: 400;
    letter-spacing: -0.01em;
    border: 1px solid rgba(123, 143, 247, 0.2);
    transition: background 0.2s ease, border-color 0.2s ease;

    svg {
        font-size: 0.95rem;
        opacity: 0.85;
        flex-shrink: 0;
    }

    &:hover {
        background: rgba(123, 143, 247, 0.2);
        border-color: rgba(123, 143, 247, 0.4);
    }
`;

// ── Awards ────────────────────────────────────────────────────────────────────

export const AwardList = styled.div`
    display: flex;
    flex-direction: column;
`;

export const AwardItem = styled(motion.div)`
    display: flex;
    align-items: center;
    gap: 24px;
    padding: 22px 0;
    border-bottom: 1px solid ${(props) => props.theme.colors.surfaceBorder};

    &:first-child {
        border-top: 1px solid ${(props) => props.theme.colors.surfaceBorder};
    }

    .medal {
        width: 40px;
        height: 40px;
        background: ${(props) => props.theme.colors.primaryGlow};
        border: 1px solid rgba(41, 151, 255, 0.25);
        border-radius: 12px;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-shrink: 0;
        color: ${(props) => props.theme.colors.primary};
        font-size: 1rem;
    }

    .content {
        .year {
            font-size: 0.75rem;
            color: ${(props) => props.theme.colors.primary};
            font-weight: 500;
            margin-bottom: 4px;
            letter-spacing: 0.02em;
        }
        .title {
            font-size: 0.95rem;
            color: ${(props) => props.theme.colors.text};
            font-weight: 400;
            line-height: 1.5;
            letter-spacing: -0.01em;
        }
    }
`;

// ── Divider ───────────────────────────────────────────────────────────────────

export const FooterBar = styled.footer`
    margin-top: 140px;
    padding-top: 28px;
    border-top: 1px solid ${(props) => props.theme.colors.surfaceBorder};
    text-align: center;
    font-size: 0.78rem;
    color: ${(props) => props.theme.colors.textMuted};
    letter-spacing: -0.01em;
`;

// ── Hero preview ──────────────────────────────────────────────────────────────

export const HeroGrid = styled.div`
    display: grid;
    grid-template-columns: 1fr 1.1fr;
    align-items: center;
    gap: 48px;

    ${(props) => props.theme.media.tablet} {
        grid-template-columns: 1fr;
        gap: 64px;
    }
`;

export const HeroLeft = styled.div`
    display: flex;
    flex-direction: column;
`;

export const PreviewStack = styled(motion.div)`
    position: relative;
    height: 380px;

    ${(props) => props.theme.media.mobile} {
        height: 260px;
    }
`;

export const PreviewCard = styled.a<{ $index: number }>`
    position: absolute;
    width: 78%;
    aspect-ratio: 16 / 10;
    border-radius: 14px;
    overflow: hidden;
    background: #0d0d10;
    border: 1px solid ${(props) => props.theme.colors.surfaceBorder};
    box-shadow: 0 30px 60px rgba(0, 0, 0, 0.6);
    top: ${(props) => props.$index * 52}px;
    left: ${(props) => props.$index * 11}%;
    z-index: ${(props) => 3 - props.$index};
    transform: rotate(${(props) => (props.$index - 1) * 3}deg);
    transition: transform 0.35s ease, top 0.35s ease, border-color 0.2s ease;

    ${PreviewStack}:hover & {
        top: ${(props) => props.$index * 64}px;
        transform: rotate(${(props) => (props.$index - 1) * 4}deg);
    }

    &:hover {
        border-color: rgba(123, 143, 247, 0.5);
        z-index: 4;
    }

    .label {
        position: absolute;
        left: 12px;
        bottom: 12px;
        display: flex;
        align-items: center;
        gap: 8px;
        padding: 6px 12px;
        border-radius: 980px;
        background: rgba(0, 0, 0, 0.7);
        backdrop-filter: blur(8px);
        font-size: 0.78rem;
        color: ${(props) => props.theme.colors.text};
    }
`;

// ── Projects ──────────────────────────────────────────────────────────────────

export const ProjectGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;

    ${(props) => props.theme.media.mobile} {
        grid-template-columns: 1fr;
    }
`;

export const ProjectCard = styled(motion.article)`
    display: flex;
    flex-direction: column;
    border-radius: 18px;
    overflow: hidden;
    background: ${(props) => props.theme.colors.surface};
    border: 1px solid ${(props) => props.theme.colors.surfaceBorder};
    scroll-margin-top: 90px;
    transition: border-color 0.2s ease, transform 0.2s ease;

    &:hover {
        border-color: rgba(123, 143, 247, 0.35);
        transform: translateY(-3px);
    }

    .body {
        display: flex;
        flex-direction: column;
        gap: 12px;
        padding: 22px 24px 24px;
        flex: 1;
    }

    .meta {
        display: flex;
        align-items: center;
        gap: 10px;
        font-size: 0.78rem;
        color: ${(props) => props.theme.colors.textMuted};
    }

    h3 {
        font-size: 1.3rem;
        font-weight: 700;
        letter-spacing: -0.02em;
        color: ${(props) => props.theme.colors.text};
    }

    .summary {
        font-size: 0.95rem;
        color: ${(props) => props.theme.colors.text};
        letter-spacing: -0.01em;
    }

    .description {
        font-size: 0.88rem;
        line-height: 1.7;
        color: ${(props) => props.theme.colors.textMuted};
        letter-spacing: -0.01em;
    }

    .footer {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 12px;
        margin-top: auto;
        padding-top: 8px;
        flex-wrap: wrap;
    }

    .tags {
        display: flex;
        flex-wrap: wrap;
        gap: 6px;
    }

    .link {
        font-size: 0.85rem;
        font-weight: 500;
        color: ${(props) => props.theme.colors.primary};
    }
`;

export const LiveDot = styled.span`
    display: inline-flex;
    align-items: center;
    gap: 6px;
    color: #4ade80;

    &::before {
        content: "";
        width: 6px;
        height: 6px;
        border-radius: 50%;
        background: currentColor;
    }
`;

export const Thumb = styled.div`
    position: relative;
    aspect-ratio: 16 / 10;
    width: 100%;
    background:
        radial-gradient(circle at 30% 20%, rgba(123, 110, 246, 0.25), transparent 60%),
        radial-gradient(circle at 80% 80%, rgba(77, 157, 224, 0.18), transparent 55%),
        #0d0d10;
    display: flex;
    align-items: center;
    justify-content: center;
    border-bottom: 1px solid ${(props) => props.theme.colors.surfaceBorder};

    img {
        position: absolute;
        inset: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: left center;
    }

    .placeholder {
        font-size: 1.6rem;
        font-weight: 700;
        letter-spacing: -0.03em;
        color: rgba(245, 245, 247, 0.85);
    }
`;
