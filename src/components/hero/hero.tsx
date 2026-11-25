import { useIconHover } from "@animateicons/react";
import { GithubIcon, MailIcon } from "@animateicons/react/lucide";
import { Actions, Button, Intro, Name, Section } from "./styled.hero";

import config from "../../config/config.json";

export default function Hero() {
    const mail = useIconHover();
    const github = useIconHover();

    return (
        <Section>
            <Name>{config.Name}</Name>
            <Intro>
                {config.Intro.map((sentence) => (
                    <span key={sentence}>{sentence} </span>
                ))}
            </Intro>
            <Actions>
                <Button
                    $primary
                    href={`mailto:${config.Email}`}
                    {...mail.triggerProps}
                >
                    <MailIcon ref={mail.ref} size={16} />
                    Contact
                </Button>
                <Button
                    href={config.Github}
                    target="_blank"
                    rel="noopener noreferrer"
                    {...github.triggerProps}
                >
                    <GithubIcon ref={github.ref} size={16} />
                    GitHub
                </Button>
            </Actions>
        </Section>
    );
}
