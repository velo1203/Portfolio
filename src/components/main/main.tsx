import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrophy } from "@fortawesome/free-solid-svg-icons";
import {
    SiPython, SiTypescript, SiGo, SiMysql,
    SiReact, SiNextdotjs, SiRedux,
    SiNestjs, SiFlask, SiFastapi,
    SiSwagger, SiFigma, SiGithub,
} from "react-icons/si";
import type { IconType } from "react-icons";
import {
    AwardItem,
    AwardList,
    EducationBadge,
    FooterBar,
    GithubButton,
    HeroActions,
    HeroDesc,
    HeroEyebrow,
    HeroName,
    HeroSection,
    HeroSub,
    PageWrapper,
    Section,
    SectionLabel,
    SkillRow,
    SkillTable,
    Tag,
    Timeline,
    TimelineItem,
} from "./styled.main";

import config from "../../config/config.json";

const skillIconMap: Record<string, IconType> = {
    Python: SiPython,
    Typescript: SiTypescript,
    Go: SiGo,
    Sql: SiMysql,
    React: SiReact,
    Next: SiNextdotjs,
    Redux: SiRedux,
    Nest: SiNestjs,
    "Flask/FastAPI": SiFastapi,
    Flask: SiFlask,
    Swagger: SiSwagger,
    Figma: SiFigma,
    Github: SiGithub,
};

const fadeUp = {
    hidden: { opacity: 0, y: 24 },
    visible: (i: number = 0) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, delay: i * 0.1 },
    }),
};

const sectionAnim = {
    hidden: { opacity: 0, y: 32 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function Main() {
    return (
        <PageWrapper>
            {/* ── HERO ──────────────────────────────────────────── */}
            <HeroSection
                id="about"
                initial="hidden"
                animate="visible"
            >
                <HeroEyebrow variants={fadeUp} custom={0}>
                    Product Engineer · Developer
                </HeroEyebrow>
                <HeroName variants={fadeUp} custom={1}>
                    심호성
                </HeroName>
                <HeroSub variants={fadeUp} custom={2}>
                    노력으로 발전하는 개발자
                </HeroSub>
                <HeroDesc variants={fadeUp} custom={3}>
                    웹 프론트엔드부터 백엔드, 그리고 제품 설계까지 —<br />
                    아이디어를 실제로 동작하는 제품으로 만드는 것을 좋아합니다.
                </HeroDesc>
                <HeroActions variants={fadeUp} custom={4}>
                    <GithubButton
                        onClick={() =>
                            window.open("https://github.com/velo1203")
                        }
                    >
                        GitHub →
                    </GithubButton>
                    <EducationBadge>
                        <span className="year">{config.Education.day}</span>
                        {config.Education.school}
                    </EducationBadge>
                </HeroActions>
            </HeroSection>

            {/* ── SKILLS ───────────────────────────────────────── */}
            <Section
                id="skills"
                variants={sectionAnim}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
            >
                <SectionLabel>
                    <h2>Tech Stack</h2>
                </SectionLabel>
                <SkillTable>
                    {config.Techstack.map((ts, i) => (
                        <SkillRow
                            key={ts.type}
                            variants={fadeUp}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            custom={i}
                        >
                            <div className="category">{ts.type}</div>
                            <div className="tags">
                                {ts.stack.map((sk) => {
                                    const Icon = skillIconMap[sk];
                                    return (
                                        <Tag key={sk}>
                                            {Icon && <Icon />}
                                            {sk}
                                        </Tag>
                                    );
                                })}
                            </div>
                        </SkillRow>
                    ))}
                </SkillTable>
            </Section>

            {/* ── AWARDS ───────────────────────────────────────── */}
            <Section
                id="awards"
                variants={sectionAnim}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
            >
                <SectionLabel>
                    <h2>Awards</h2>
                </SectionLabel>
                <AwardList>
                    {config.Award.map((awd, i) => (
                        <AwardItem
                            key={i}
                            variants={fadeUp}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            custom={i}
                        >
                            <div className="medal">
                                <FontAwesomeIcon icon={faTrophy} />
                            </div>
                            <div className="content">
                                <div className="year">{awd.day}</div>
                                <div className="title">{awd.content}</div>
                            </div>
                        </AwardItem>
                    ))}
                </AwardList>
            </Section>

            {/* ── EXPERIENCE ───────────────────────────────────── */}
            <Section
                id="experience"
                variants={sectionAnim}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
            >
                <SectionLabel>
                    <h2>Experience</h2>
                </SectionLabel>
                <Timeline>
                    {config.Experience.map((exp, i) => (
                        <TimelineItem
                            key={i}
                            variants={fadeUp}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            custom={i}
                        >
                            <span className="year">{exp.day}</span>
                            <div className="info">
                                <p className="title">{exp.content}</p>
                            </div>
                        </TimelineItem>
                    ))}
                </Timeline>
            </Section>

            {/* ── FOOTER ───────────────────────────────────────── */}
            <FooterBar>
                © 2026 심호성 · Built with React + TypeScript
            </FooterBar>
        </PageWrapper>
    );
}
