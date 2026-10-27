import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrophy } from "@fortawesome/free-solid-svg-icons";
import {
    SiPython,
    SiTypescript,
    SiGo,
    SiMysql,
    SiReact,
    SiNextdotjs,
    SiRedux,
    SiNestjs,
    SiFlask,
    SiFastapi,
    SiSwagger,
    SiFigma,
    SiGithub,
    SiDocker,
    SiLatex,
    SiThreedotjs,
    SiTauri,
    SiTailwindcss,
    SiFramer,
    SiAnthropic,
    SiRust,
    SiClaude,
    SiOpenai,
} from "react-icons/si";
import { LuExternalLink } from "react-icons/lu";
import type { IconType } from "react-icons";
import {
    AwardItem,
    AwardList,
    EducationBadge,
    FooterBar,
    GithubButton,
    HeroActions,
    HeroEyebrow,
    HeroGrid,
    HeroLeft,
    HeroName,
    HeroSection,
    LiveDot,
    PreviewCard,
    PreviewStack,
    ProjectCard,
    ProjectGrid,
    PageWrapper,
    Section,
    SectionLabel,
    SkillRow,
    SiteButton,
    SkillTable,
    Tag,
    Thumb,
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
    Rust: SiRust,
    Claude: SiClaude,
    GPT: SiOpenai,
    TypeScript: SiTypescript,
    "Next.js": SiNextdotjs,
    Docker: SiDocker,
    LaTeX: SiLatex,
    "Three.js": SiThreedotjs,
    Tauri: SiTauri,
    Tailwind: SiTailwindcss,
    "Framer Motion": SiFramer,
    "Claude API": SiAnthropic,
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

type Project = (typeof config.Projects)[number];

// 첫 화면 미리보기에는 앞의 세 프로젝트만 겹쳐 보여 준다
const heroProjects = config.Projects.slice(0, 3);

function ProjectThumb({ project }: { project: Project }) {
    return (
        <Thumb $light={project.thumb?.theme === "light"}>
            {project.image ? (
                <img
                    src={project.image}
                    alt={`${project.name} 화면`}
                    loading="lazy"
                />
            ) : (
                <span className="placeholder">
                    {project.thumb?.title ?? project.name}
                    {project.thumb?.caption && (
                        <small>{project.thumb.caption}</small>
                    )}
                </span>
            )}
        </Thumb>
    );
}

export default function Main() {
    return (
        <PageWrapper>
            {/* ── HERO ──────────────────────────────────────────── */}
            <HeroSection id="about" initial="hidden" animate="visible">
                <HeroGrid>
                    <HeroLeft>
                        <HeroEyebrow variants={fadeUp} custom={0}>
                            Product Engineer · Developer
                        </HeroEyebrow>
                        <HeroName variants={fadeUp} custom={1}>
                            심호성
                        </HeroName>
                        <EducationBadge variants={fadeUp} custom={2}>
                            {config.Education.school}
                            <span className="year">{config.Education.day}</span>
                        </EducationBadge>
                        <HeroActions variants={fadeUp} custom={3}>
                            <GithubButton
                                onClick={() =>
                                    window.open("https://github.com/velo1203")
                                }
                            >
                                GitHub →
                            </GithubButton>
                        </HeroActions>
                    </HeroLeft>
                    <PreviewStack variants={fadeUp} custom={4}>
                        {heroProjects.map((p, i) => (
                            <PreviewCard
                                key={p.id}
                                $index={i}
                                href={`#project-${p.id}`}
                            >
                                <ProjectThumb project={p} />
                                <span className="label">
                                    {p.live && <LiveDot />}
                                    {p.name}
                                </span>
                            </PreviewCard>
                        ))}
                    </PreviewStack>
                </HeroGrid>
            </HeroSection>

            {/* ── PROJECTS ─────────────────────────────────────── */}
            <Section
                id="projects"
                variants={sectionAnim}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
            >
                <SectionLabel>
                    <h2>Projects</h2>
                </SectionLabel>
                <ProjectGrid>
                    {config.Projects.map((p, i) => (
                        <ProjectCard
                            key={p.id}
                            id={`project-${p.id}`}
                            variants={fadeUp}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            custom={i}
                        >
                            <ProjectThumb project={p} />
                            <div className="body">
                                <div className="meta">
                                    <span>{p.kind}</span>
                                </div>
                                <h3>{p.name}</h3>
                                <p className="summary">{p.summary}</p>
                                <p className="description">{p.description}</p>
                                <div className="footer">
                                    <div className="tags">
                                        {p.stack.map((sk) => {
                                            const Icon = skillIconMap[sk];
                                            return (
                                                <Tag key={sk}>
                                                    {Icon && <Icon />}
                                                    {sk}
                                                </Tag>
                                            );
                                        })}
                                    </div>
                                    {p.live && (
                                        <SiteButton
                                            href={p.live}
                                            target="_blank"
                                            rel="noreferrer"
                                        >
                                            <LuExternalLink />
                                            사이트 보기
                                        </SiteButton>
                                    )}
                                </div>
                            </div>
                        </ProjectCard>
                    ))}
                </ProjectGrid>
            </Section>

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

            {/* ── FOOTER ───────────────────────────────────────── */}
            <FooterBar>© 2026 심호성 · Built with React + TypeScript</FooterBar>
        </PageWrapper>
    );
}
