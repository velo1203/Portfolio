import { CheckIcon, CopyIcon } from "@animateicons/react/lucide";
import { useEffect, useState } from "react";
import {
    Block,
    Contact,
    CopyButton,
    Footer,
    Rows,
    Section,
    SkillIcon,
    Skills,
} from "./styled.about";

import config from "../../config/config.json";

function CopyEmail() {
    const [copied, setCopied] = useState(false);

    useEffect(() => {
        if (!copied) return;
        const timer = setTimeout(() => setCopied(false), 1600);
        return () => clearTimeout(timer);
    }, [copied]);

    const copy = async () => {
        try {
            await navigator.clipboard.writeText(config.Email);
            setCopied(true);
        } catch {
            // no clipboard access: the address is on screen to select by hand
        }
    };

    return (
        <CopyButton type="button" onClick={copy} data-copied={copied}>
            <span className="icon">
                <CopyIcon size={14} isAnimated={false} />
                <CheckIcon size={14} isAnimated={false} />
            </span>
            <span aria-live="polite">{copied ? "복사됨" : "주소 복사"}</span>
        </CopyButton>
    );
}

export default function About() {
    return (
        <Section>
            <Block id="awards" aria-labelledby="awards-title">
                <h2 id="awards-title">수상</h2>
                <Rows>
                    {config.Award.map((award) => (
                        <li key={award.content}>
                            <span className="label">{award.day}</span>
                            <p>{award.content}</p>
                        </li>
                    ))}
                </Rows>
            </Block>
            <Block id="skills" aria-labelledby="skills-title">
                <h2 id="skills-title">기술</h2>
                <Rows>
                    {config.Techstack.map((group) => (
                        <li key={group.type} className="group">
                            <span className="label">{group.type}</span>
                            <Skills>
                                {group.stack.map((skill) => (
                                    <li key={skill.name}>
                                        <SkillIcon
                                            aria-hidden="true"
                                            $src={`icon/tech/${skill.icon}.svg`}
                                        />
                                        {skill.name}
                                    </li>
                                ))}
                            </Skills>
                        </li>
                    ))}
                </Rows>
            </Block>
            <Block aria-labelledby="education-title">
                <h2 id="education-title">학력</h2>
                <Rows>
                    <li>
                        <span className="label">{config.Education.day}</span>
                        <p>{config.Education.school}</p>
                    </li>
                </Rows>
            </Block>
            <Block id="contact" aria-labelledby="contact-title">
                <h2 id="contact-title">연락처</h2>
                <Contact>
                    <li>
                        <span className="label">이메일</span>
                        <span className="value">
                            <a href={`mailto:${config.Email}`}>
                                {config.Email}
                            </a>
                            <CopyEmail />
                        </span>
                    </li>
                    <li>
                        <span className="label">GitHub</span>
                        <a
                            href={config.Github}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            {config.Github.replace("https://", "")}
                        </a>
                    </li>
                </Contact>
            </Block>
            <Footer>
                <span>© 2026 {config.Name}</span>
                <a href="#top">맨 위로</a>
            </Footer>
        </Section>
    );
}
