import './Navbar.css'
import logo from './logos/logo.png'


function Navbar(){

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ 
                behavior: 'smooth',
                block: 'start'
            });
        }
    };

    return(
        <div className='nav-container'>
            <img src={logo} alt='logo' className='logo-web'></img>
            <h2 style={{marginLeft:"150px",position:"absolute",top:"50px",color:"gray"}} className='dev'>Full Stack Devloper</h2>
            <ul typeof='*' >
                <li className='neon-running' onClick={() => scrollToSection('skills')}>
                    Skills
                </li>
                <li className='neon-running' onClick={() => scrollToSection('projects')}>
                    Projects 
                </li>
                <li className='neon-running' onClick={() => scrollToSection('about')}>
                    About
                </li>
                <li className='neon-running' onClick={() => scrollToSection('contact')}>
                    Contact
                </li>
            </ul>
        </div>
    )
}
export default Navbar;