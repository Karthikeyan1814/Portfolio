import { useState } from "react";
import "./Nav.css";

function Nav() {

    const [open, setOpen] = useState(false);

    return (
        <div id="top" className="nav-class">

            <h1 id="title">Full Stack Developer</h1>

            {/* hamburger */}
            <div id="menu-btn" onClick={() => setOpen(!open)}>
                ☰
            </div>

            <nav className={open ? "open" : ""}>
                <ul onClick={() => setOpen(false)}>
                    <a href="#home"><li>HOME</li></a>
                    <a href="#about"><li>ABOUT</li></a>
                    <a href="#skill"><li>SKILLS</li></a>
                    <a href="#exp"><li>EXPERIENCE</li></a>
                    <a href="#project"><li>PROJECTS</li></a>
                    <a href="#contact"><li>CONTACT</li></a>
                    <li>
                        <button className="grab-resume" id="hire">
                            <a href="/Updated _Karthikeyan_Resume.pdf" download>
                                Hire Me
                            </a>
                        </button>
                    </li>
                </ul>
            </nav>

        </div>
    );
}

export default Nav;
