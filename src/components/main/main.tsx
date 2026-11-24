import {
    Aside,
    Container,
    Content,
    Greeting,
    HeadSpan,
    MainContent,
    PageTitle,
    Row,
    Rows,
    Section,
    SkillIcon,
    Tags,
} from "./styled.main";

import config from "../../config/config.json";

export default function Main() {
    return (
        <Container>
            <PageTitle>
                <span></span>
                <p>PROFILE</p>
            </PageTitle>
            <MainContent>
                <Aside>
                    <img
                        src="image/profile.png"
                        alt="심호성 프로필 사진"
                        className="profile"
                        width={354}
                        height={472}
                    />
                    <a
                        href={config.Github}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="GitHub"
                    >
                        <img src="icon/github.png" alt="" />
                    </a>
                </Aside>
                <Content>
                    <Greeting>
                        안녕하세요
                        <br />
                        개발을 즐겨하는 학생 <HeadSpan>심호성</HeadSpan>입니다
                    </Greeting>
                    <Section>
                        <div className="head">
                            <span></span>
                            <h2>TECH STACK</h2>
                        </div>
                        <Rows>
                            {config.Techstack.map((Ts) => (
                                <Row key={Ts.type} $center>
                                    <span className="label">{Ts.type}</span>
                                    <Tags>
                                        {Ts.stack.map((sk) => (
                                            <SkillIcon
                                                key={sk.name}
                                                title={sk.name}
                                            >
                                                <img
                                                    src={`icon/tech/${sk.icon}.svg`}
                                                    alt={sk.name}
                                                />
                                            </SkillIcon>
                                        ))}
                                    </Tags>
                                </Row>
                            ))}
                        </Rows>
                    </Section>
                    <Section>
                        <div className="head">
                            <span></span>
                            <h2>AWARD</h2>
                        </div>
                        <Rows>
                            {config.Award.map((awd) => (
                                <Row key={awd.content}>
                                    <span className="label">{awd.day}</span>
                                    <p>{awd.content}</p>
                                </Row>
                            ))}
                        </Rows>
                    </Section>
                    <Section>
                        <div className="head">
                            <span></span>
                            <h2>EDUCATION</h2>
                        </div>
                        <Rows>
                            <Row>
                                <span className="label">
                                    {config.Education.day}
                                </span>
                                <p>{config.Education.school}</p>
                            </Row>
                        </Rows>
                    </Section>
                </Content>
            </MainContent>
        </Container>
    );
}
