import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MenuItems, MenuItems2} from './MenuItems';
import './nav.css';
import './Dropdown.css';
import '../../index.css';
import {BiMenu} from 'react-icons/bi'
import {GrFormClose} from 'react-icons/gr'

function Navbar() {
    const [showLinks, setShowLinks] = useState(false);
    const [activeSubMenu, setActiveSubMenu] = useState(null);

    const handleShowLinks = () => {
        setShowLinks(!showLinks);
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
                    <a href='/' className='navbar_logo'>
                        Claquettes-Swing
                    </a>
                    <ul className='navbar_links'>
                        <li className='navbar_link'>
                            <a href='/' className="link" onClick={handleShowLinks}>
                                Professeure
                            </a>
                        </li>
                        <li className='navbar_link'>
                            <a href='cours' className="link" onClick={handleShowLinks}>
                                Cours
                            </a>
                        </li>
                        <li className='navbar_link'>
                            <a href='stages' className="link" onClick={handleShowLinks}>
                                Stages
                            </a>
                        </li>
                        <li className='navbar_link' onMouseEnter={() => handleMouseEnter(0)} onMouseLeave={handleMouseLeave} onClick={handleShowLinks}>
                            <p className='link'>Spectacles</p>
                            {activeSubMenu === 0 &&
                                <ul className='dropdown-menu'>
                                    {MenuItems.map((item, index) => (
                                        <li key={index}>
                                            <a href={item.path} className='dropdown-link' onClick={handleShowLinks}>
                                                {item.title}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            }
                        </li>
                        <li className='navbar_link' onMouseEnter={() => handleMouseEnter(1)} onMouseLeave={handleMouseLeave} onClick={handleShowLinks}>
                            <p className='link'>Contact</p>
                            {activeSubMenu === 1 &&
                                <ul className='dropdown-menu'>
                                    {MenuItems2.map((item, index) => (
                                        <li key={index}>
                                            <a href={item.path} className='dropdown-link' onClick={handleShowLinks}>
                                                {item.title}
                                            </a>
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
