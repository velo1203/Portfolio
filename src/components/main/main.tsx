import {
    Container,
    ContainerGrid,
    ContentSubContainer,
    GridBox,
    GridUl,
    HeadSpan,
    ImageSubContainer,
    MainContent,
    MainHeader,
    SkillTag,
} from "./styled.main";

import config from "../../config/config.json";

export default function Main() {
    return (
        <Container>
            <MainHeader>
                <span></span>
                <h1>PROFILE</h1>
            </MainHeader>
            <MainContent>
                <ImageSubContainer>
                    <img src="image/profile.png" alt="profile" />
                    <img
                        src="icon/github.png"
                        alt="github"
                        className="icon"
                        onClick={() => {
                            window.open("https://github.com/velo1203");
                        }}
                    />
                </ImageSubContainer>
                <ContentSubContainer>
                    <div className="content-head">
                        <h1>
                            안녕하세요, <HeadSpan>노력으로 발전하는</HeadSpan>
                        </h1>
                        <h1>
                            <HeadSpan>
                                개발자/프로덕트 엔지니어{" "}
                                <HeadSpan name>심호성 </HeadSpan>
                            </HeadSpan>
                            입니다
                        </h1>
                    </div>
                    <ContainerGrid>
                        <GridBox>
                            <div className="gridhead">
                                <span></span>
                                <h1>TECH STACK</h1>
                            </div>
                            <GridUl>
                                {config.Techstack.map((Ts) => (
                                    <li className="gridli">
                                        <h1>{Ts.type}</h1>
                                        {Ts.stack.map((sk) => (
                                            <SkillTag>{sk}</SkillTag>
                                        ))}
                                    </li>
                                ))}
                            </GridUl>
                        </GridBox>
                        <GridBox>
                            <div className="gridhead">
                                <span></span>
                                <h1>EDUCATION</h1>
                            </div>

                            <GridUl>
                                <li className="gridli">
                                    <h1>{config.Education.day}</h1>
                                    <p>{config.Education.school}</p>
                                </li>
                            </GridUl>
                        </GridBox>
                        <GridBox>
                            <div className="gridhead">
                                <span></span>
                                <h1>Exprience</h1>
                            </div>

                            <GridUl>
                                {config.Experience.map((exp) => (
                                    <li className="gridli">
                                        <h1>{exp.day}</h1>
                                        <p>{exp.content}</p>
                                    </li>
                                ))}
                            </GridUl>
                        </GridBox>
                        <GridBox>
                            <div className="gridhead">
                                <span></span>
                                <h1>Award</h1>
                            </div>

                            <GridUl>
                                {config.Award.map((awd) => (
                                    <li className="gridli">
                                        <h1>{awd.day}</h1>
                                        <p>{awd.content}</p>
                                    </li>
                                ))}
                            </GridUl>
                        </GridBox>
                    </ContainerGrid>
                </ContentSubContainer>
            </MainContent>
        </Container>
    );
}
