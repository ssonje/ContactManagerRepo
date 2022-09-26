import { IconContext } from 'react-icons';
import { Link } from 'react-router-dom';
import { useState } from 'react';

import React from "react";
import SideBarCss from "../CSS/SideBar.module.css";

import * as AiIcons from 'react-icons/ai';
import * as FaIcons from 'react-icons/fa';
import * as MdIcons from 'react-icons/md';

/**
 * @Component
 * `SideBarUIForNonLoggedInUser` component provides the UI for Side in the User Profile Section in Contact Manager Appication.
 */
const SideBarUIForNonLoggedInUser = (props) => {
    const [sidebar, setSidebar] = useState(false);
    const showSidebar = () => {
        setSidebar(!sidebar);
        props.setSideBarForProfileUI(!sidebar);
    };

    return (
        <>
            <IconContext.Provider value={{ color: '#fff' }}>
                <div className={SideBarCss.navbar}>
                    <Link to='#' className={SideBarCss.menuBars}>
                        <FaIcons.FaBars onClick={showSidebar} />
                    </Link>
                </div>
                <nav className={sidebar ? SideBarCss.navMenuActive : SideBarCss.navMenu}>
                    <ul className={SideBarCss.navMenuItems} onClick={showSidebar}>
                        <li className={SideBarCss.navbarToggle}>
                            <Link to='#' className={SideBarCss.menuBarsForToggle}>
                                <AiIcons.AiOutlineClose />
                            </Link>
                        </li>
                        <li className={SideBarCss.navText}>
                            <Link to="/home">
                                <AiIcons.AiFillHome />
                                <span>Home</span>
                            </Link>
                        </li>
                        <li className={SideBarCss.navText}>
                            <Link to="/about">
                                <AiIcons.AiOutlineInfoCircle />
                                <span>About</span>
                            </Link>
                        </li>
                        <li className={SideBarCss.navText}>
                            <Link to="/login">
                                <AiIcons.AiOutlineLogin />
                                <span>Login</span>
                            </Link>
                        </li>
                        <li className={SideBarCss.navText}>
                            <Link to="/signup">
                                <MdIcons.MdOutlineCreate />
                                <span>SignUp</span>
                            </Link>
                        </li>
                    </ul>
                </nav>
            </IconContext.Provider>
        </>
    );
}

export default SideBarUIForNonLoggedInUser;
