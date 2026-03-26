import { MainHeader } from "./styled.header";

export default function Header() {
    return (
        <MainHeader>
            <div className="logo">
                devho<span>.</span>
            </div>
            <nav>
                <a href="#about">About</a>
                <a href="#skills">Skills</a>
                <a href="#awards">Awards</a>
                <a href="#experience">Experience</a>
            </nav>
        </MainHeader>
    );
}
