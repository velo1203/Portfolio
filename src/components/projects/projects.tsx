import {
    ArrowDownIcon,
    ArrowUpIcon,
    ArrowUpRightIcon,
    CommandIcon,
    CornerDownLeftIcon,
    SearchIcon,
} from "@animateicons/react/lucide";
import { useEffect, useLayoutEffect, useMemo, useRef, useState } from "react";
import {
    Body,
    Chips,
    Detail,
    Empty,
    Footer,
    Hints,
    IconTile,
    Inline,
    Keycap,
    List,
    OpenLink,
    Palette,
    Pane,
    Placeholder,
    Row,
    SearchRow,
    Section,
    Shortcut,
    Shot,
} from "./styled.projects";

import config from "../../config/config.json";

type Project = (typeof config.Projects)[number];

const projects = config.Projects;

const isMac = /Mac|iPhone|iPad/.test(navigator.platform);

function matches(project: Project, query: string) {
    const haystack = [
        project.name,
        project.summary,
        project.host,
        ...project.stack,
    ]
        .join(" ")
        .toLowerCase();
    return query
        .toLowerCase()
        .split(/\s+/)
        .every((word) => haystack.includes(word));
}

function ProjectDetail({ project }: { project: Project }) {
    return (
        <Detail>
            <Shot
                key={project.id}
                src={project.image}
                alt={`${project.name} 화면`}
            />
            <div className="head">
                <h3>{project.name}</h3>
                <OpenLink
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    {project.host}
                    <ArrowUpRightIcon size={14} isAnimated={false} />
                    <span className="sr-only">(새 탭에서 열림)</span>
                </OpenLink>
            </div>
            <Chips aria-label="사용 기술">
                {project.stack.map((name) => (
                    <li key={name}>{name}</li>
                ))}
            </Chips>
            <p>{project.description}</p>
        </Detail>
    );
}

export default function Projects() {
    const [query, setQuery] = useState("");
    const [activeId, setActiveId] = useState(projects[0].id);
    const input = useRef<HTMLInputElement>(null);
    const tapped = useRef<{ row: HTMLElement; top: number } | null>(null);

    const results = useMemo(
        () => projects.filter((project) => matches(project, query.trim())),
        [query],
    );
    const active =
        results.find((project) => project.id === activeId) ?? results[0];

    // every screenshot is small, so fetch them up front and switching never waits
    useEffect(() => {
        projects.forEach((project) => {
            new Image().src = project.image;
        });
    }, []);

    // ⌘K (Ctrl K elsewhere) jumps to the search field
    useEffect(() => {
        const onKeyDown = (event: KeyboardEvent) => {
            if (event.key.toLowerCase() !== "k") return;
            if (!(isMac ? event.metaKey : event.ctrlKey)) return;
            event.preventDefault();
            input.current?.focus();
            input.current?.select();
        };
        window.addEventListener("keydown", onKeyDown);
        return () => window.removeEventListener("keydown", onKeyDown);
    }, []);

    // On narrow screens the open detail sits between the rows, so closing it moves
    // every row below. Scroll by the same amount and the tapped row stays under the finger.
    useLayoutEffect(() => {
        if (!tapped.current) return;
        const { row, top } = tapped.current;
        tapped.current = null;
        const shift = row.getBoundingClientRect().top - top;
        if (shift) window.scrollBy({ top: shift, behavior: "instant" });
    }, [activeId]);

    const move = (step: number) => {
        if (!active) return;
        const index = results.indexOf(active) + step;
        const next = results[Math.max(0, Math.min(results.length - 1, index))];
        setActiveId(next.id);
    };

    const onInputKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.nativeEvent.isComposing) return;
        if (event.key === "ArrowDown") {
            event.preventDefault();
            move(1);
        } else if (event.key === "ArrowUp") {
            event.preventDefault();
            move(-1);
        } else if (event.key === "Enter" && active) {
            window.open(active.url, "_blank", "noopener,noreferrer");
        } else if (event.key === "Escape" && query) {
            setQuery("");
        }
    };

    return (
        <Section id="projects" aria-labelledby="projects-title">
            <h2 id="projects-title" className="sr-only">
                프로젝트
            </h2>
            <Palette>
                <SearchRow>
                    <SearchIcon size={18} isAnimated={false} />
                    <input
                        ref={input}
                        type="text"
                        inputMode="search"
                        enterKeyHint="go"
                        autoComplete="off"
                        spellCheck={false}
                        placeholder="프로젝트 검색"
                        aria-label="프로젝트 검색"
                        aria-controls="project-list"
                        value={query}
                        onChange={(event) => setQuery(event.target.value)}
                        onKeyDown={onInputKeyDown}
                    />
                    <Shortcut aria-hidden="true">
                        <Keycap>
                            {isMac ? (
                                <CommandIcon size={12} isAnimated={false} />
                            ) : (
                                "Ctrl"
                            )}
                        </Keycap>
                        <Keycap>K</Keycap>
                    </Shortcut>
                </SearchRow>
                <Body>
                    <List id="project-list">
                        {results.map((project) => {
                            const selected = project === active;
                            return (
                                <li key={project.id}>
                                    <Row
                                        type="button"
                                        aria-current={selected}
                                        aria-expanded={selected}
                                        onClick={(event) => {
                                            const row = event.currentTarget;
                                            tapped.current = {
                                                row,
                                                top: row.getBoundingClientRect()
                                                    .top,
                                            };
                                            setActiveId(project.id);
                                        }}
                                    >
                                        <IconTile>
                                            <img
                                                src={project.icon}
                                                alt=""
                                                width={32}
                                                height={32}
                                            />
                                        </IconTile>
                                        <span className="text">
                                            <span className="name">
                                                {project.name}
                                            </span>
                                            <span className="summary">
                                                {project.summary}
                                            </span>
                                        </span>
                                    </Row>
                                    {selected && (
                                        <Inline>
                                            <ProjectDetail project={project} />
                                        </Inline>
                                    )}
                                </li>
                            );
                        })}
                        {results.length === 0 && (
                            <Empty>
                                <p>
                                    ‘{query.trim()}’에 맞는 프로젝트가 없습니다.
                                </p>
                                <button
                                    type="button"
                                    onClick={() => {
                                        setQuery("");
                                        input.current?.focus();
                                    }}
                                >
                                    검색 지우기
                                </button>
                            </Empty>
                        )}
                    </List>
                    <Pane>
                        {active ? (
                            <ProjectDetail project={active} />
                        ) : (
                            <Placeholder />
                        )}
                    </Pane>
                </Body>
                <Footer>
                    <span aria-live="polite">프로젝트 {results.length}개</span>
                    <Hints aria-hidden="true">
                        <span>
                            <Keycap>
                                <ArrowUpIcon size={12} isAnimated={false} />
                            </Keycap>
                            <Keycap>
                                <ArrowDownIcon size={12} isAnimated={false} />
                            </Keycap>
                            이동
                        </span>
                        <span>
                            <Keycap>
                                <CornerDownLeftIcon
                                    size={12}
                                    isAnimated={false}
                                />
                            </Keycap>
                            사이트 열기
                        </span>
                    </Hints>
                </Footer>
            </Palette>
        </Section>
    );
}
