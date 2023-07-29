import React, { useState } from 'react';
import { Link } from "react-scroll";
import { MenuItems, MenuItems2} from './MenuItems';
import './nav.css';
import './Dropdown.css';
import '../../index.css';
import {BiMenu} from 'react-icons/bi'
import {GrFormClose} from 'react-icons/gr'
function Navbar() {
    const [showLinks, setShowlinks] = useState(false);
    const [activeSubMenu, setActiveSubMenu] = useState(null);

    const handleShowLinks = () => {
        setShowlinks(!showLinks);
    };

    const handleMouseEnter = (index) => {
        setActiveSubMenu(index);
    };

    const handleMouseLeave = () => {
        setActiveSubMenu(null);
    };

    return (
        <>
            <div className={`navbar ${showLinks ? "show-nav" : "hide-nav"}`}>
                <div className="grid-test">
                    <Link to='home' spy={true} smooth={true} offset={0} duration={800} className='navbar_logo'>
                        Claquettes-Swing
                    </Link>
                    <ul className='navbar_links'>
                        <li className='navbar_link'>
                            <Link to='professeure' spy={true} smooth={true} offset={-100} duration={800} className="link" onClick={handleShowLinks}>
                                Professeure
                            </Link>
                        </li>
                        <li className='navbar_link'>
                            <Link to='cours' spy={true} smooth={true} offset={-100} duration={800} className="link" onClick={handleShowLinks}>
                                Cours
                            </Link>
                        </li>
                        <li className='navbar_link'>
                            <Link to='stages' spy={true} smooth={true} offset={-100} duration={800} className="link" onClick={handleShowLinks}>
                                Stages
                            </Link>
                        </li>
                        <li className='navbar_link' onMouseEnter={() => handleMouseEnter(0)} onMouseLeave={handleMouseLeave} onClick={handleShowLinks}>
                        <Link to='spectacles' spy={true} smooth={true} offset={-100} duration={800}>Spectacles</Link>
                            {activeSubMenu === 0 &&
                                <ul className='dropdown-menu'>
                                    {MenuItems.map((item, index) => (
                                        <li key={index}>
                                            <Link to={item.path} spy={true} smooth={true} offset={-100} duration={800} className='dropdown-link' onClick={handleShowLinks}>
                                                {item.title}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            }
                        </li>
                        <li className='navbar_link' onMouseEnter={() => handleMouseEnter(1)} onMouseLeave={handleMouseLeave} onClick={handleShowLinks}>
                            <Link to='contact' spy={true} smooth={true} offset={0} duration={800}>Contact</Link>
                            {activeSubMenu === 1 &&
                                <ul className='dropdown-menu'>
                                    {MenuItems2.map((item, index) => (
                                        <li key={index}>
                                            <Link to={item.path} spy={true} smooth={true} offset={-100} duration={800} className='dropdown-link' onClick={handleShowLinks}>
                                                {item.title}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            }
                        </li>
                </ul>
            </div>
            <div className='navbar_icon' onClick={handleShowLinks}>
                {showLinks ? <GrFormClose/> : <BiMenu/>}
            </div>
        </div>
    </>
);
}

export default Navbar;
