import { IconContext } from 'react-icons';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import React from "react";
import SideBarCss from "./CSS/SideBar.module.css";
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';

/**
 * @Component
 * `SideBar` component provides the UI for Side in the User Profile Section in Contact Manager Appication.
 */
const SideBar = (props) => {
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
                            <Link to="/user/add/contact">
                                <FaIcons.FaPlus />
                                <span>Add Contact</span>
                            </Link>
                        </li>
                        <li className={SideBarCss.navText}>
                            <Link to="/user/view/contacts">
                                <AiIcons.AiOutlineContacts />
                                <span>View Contacts</span>
                            </Link>
                        </li>
                        <li className={SideBarCss.navText}>
                            <Link to="/user/delete/contact">
                                <AiIcons.AiOutlineDelete />
                                <span>Delete Contact</span>
                            </Link>
                        </li>
                        <li className={SideBarCss.navText}>
                            <Link to="/user/modify/contact">
                                <AiIcons.AiOutlineEdit />
                                <span>Modify Contacts</span>
                            </Link>
                        </li>
                        <li className={SideBarCss.navText}>
                            <Link to="/user/profile">
                                <AiIcons.AiOutlineProfile />
                                <span>Your Profile</span>
                            </Link>
                        </li>
                        <li className={SideBarCss.navText}>
                            <Link to="/user/settings">
                                <FaIcons.FaWrench />
                                <span>Settings</span>
                            </Link>
                        </li>
                        <li className={SideBarCss.navText}>
                            <Link to="/logout">
                                <AiIcons.AiOutlineLogout />
                                <span>Logout</span>
                            </Link>
                        </li>
                    </ul>
                </nav>
            </IconContext.Provider>
        </>
    );
}

export default SideBar;
