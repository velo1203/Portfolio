import { MainHeader } from "./styled.header";

export default function Header() {
    return (
        <MainHeader>
            <a className="logo" href="#about">
                devho<span>.</span>
            </a>
            <nav>
                <a className="top" href="#about">
                    About
                </a>
                <a href="#projects">Projects</a>
                <a href="#skills">Skills</a>
                <a href="#awards">Awards</a>
            </nav>
        </MainHeader>
    );
}
