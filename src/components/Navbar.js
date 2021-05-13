import {Link} from 'react-scroll';

function Navbar() {
    return (
        <div className="navbar">
            <ul className="sm-direction-col">
                <li>
                    <Link
                        className="nav-underline"
                        to="about"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                    >
                        About me
                    </Link>
                </li>
                <li>
                    <Link
                        className="nav-underline"
                        to="technologies"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                    >
                        Technologies
                    </Link>
                </li>
                <li>
                    <Link
                        className="nav-underline"
                        to="skills"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                    >
                        Skills
                    </Link></li>
                <li>
                    <Link
                        className="nav-underline"
                        to="projects"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                    >
                        Projects
                    </Link></li>
            </ul>
        </div>
    );
}

export default Navbar;