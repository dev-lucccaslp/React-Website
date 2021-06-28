import React, {useState} from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Navbar.css';


function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if(window.innerWidth <= 960){
            setButton(false);
        } else {
            setButton(true);
        }
    };

    window.addEventListener('resize', showButton);

    return (
        <>
        <nav className="navbar">
            <div className="navbar-container">
                <Link to="/" className='navbar-logo'  onClick={closeMobileMenu}>
                    LUCAS DEV 
                    <i class="fab fa-react"></i>
                </Link>
                <div className="menu-icon" onClick={handleClick}>
                    <i className= {click ? 'fas fa-times' : 'fas fa-bars'} />
                </div>
                <ul className = {click ? 'nav-menu active' : 'nav-menu'} >
                    <li className='nav-item'>
                        <Link to="/" 
                        className="nav-links" 
                        onclick={closeMobileMenu}>
                            Home
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to="/projects" 
                        className="nav-links"
                        onclick={closeMobileMenu}>
                            Projects
                        </Link> 
                    </li>
                    <li className='nav-item'>
                        <Link to="/skills"
                         className="nav-links"
                         onclick={closeMobileMenu}>
                            Skills
                        </Link>
                    </li>    
                    <li className='nav-item'>
                        <Link to="/talk-to-me" 
                        className="nav-links-mobile"
                        onclick={closeMobileMenu}>
                            TALK TO ME
                        </Link>
                    </li>
                </ul>
                { button && <Button buttonStyle ='btn--outline'>TALK TO ME</Button>}
            </div>     
        </nav>
        </>
    )
}

export default Navbar
