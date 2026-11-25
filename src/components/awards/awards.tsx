import { List, Section } from "./styled.awards";

import config from "../../config/config.json";

export default function Awards() {
    return (
        <Section aria-labelledby="awards-title">
            <h2 id="awards-title">수상</h2>
            <List>
                {config.Award.map((award) => (
                    <li key={award.content}>
                        <p>{award.content}</p>
                        <span>{award.day}</span>
                    </li>
                ))}
            </List>
        </Section>
    );
}
