import { Intro, Name, Section } from "./styled.hero";

import config from "../../config/config.json";

export default function Hero() {
    return (
        <Section>
            <Name>{config.Name}</Name>
            <Intro>
                {config.Intro.map((sentence) => (
                    <span key={sentence}>{sentence} </span>
                ))}
            </Intro>
        </Section>
    );
}
