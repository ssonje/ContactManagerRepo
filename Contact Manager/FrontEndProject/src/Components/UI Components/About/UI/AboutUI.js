import { useState } from "react";

import AboutCss from "../CSS/About.module.css";
import BasAppCss from "../../../../CSS/BaseApp.module.css";
import CustomNavbar from "../../Navbar/CustomNavbar";
import React from "react";

import * as AiIcons from 'react-icons/ai';
import * as BsIcons from 'react-icons/bs';
import * as SiIcons from 'react-icons/si';
import * as SocialMediaURLs from '../../../../Constants/SocialMediaURLs';

/**
 * @Component
 * `AboutUI` component provides the UI for About Section in Contact Manager Appication.
 */
const AboutUI = () => {

    const [sideBarForProfileUI, setSideBarForProfileUI] = useState(false);

    return (
        <div>
            <CustomNavbar
                currentLocation="/about"
                setSideBarForProfileUI={setSideBarForProfileUI}
                isSideBarShowing={sideBarForProfileUI}>
            </CustomNavbar>
            <div className={"d-flex align-items-center justify-content-center " + (sideBarForProfileUI ? BasAppCss.ContainerWindowForSideBarOn : BasAppCss.ContainerWindowForSideBarOff)}>
                <div className={(AboutCss.AboutText)}>
                    <h2>About us</h2>
                    <p className="lead">This website is created by Mr. Sanket Sonje.</p>
                    <p className="mb-0"><em>Sanket is currently working as a Full Stack Engineer.</em></p>
                    <p className="mb-0"><em>He has a two years of Industry Experience as of now.</em></p>
                    <p className="mb-0"><em>In the backend, he uses the Spring Boot.</em></p>
                    <p ><em>In the frontend, he uses the React JS.</em></p>

                    <a href={SocialMediaURLs.LINKEDIN_URL} target="_blank">
                        <i className="me-3"><AiIcons.AiFillLinkedin size={30} /></i>
                    </a>

                    <a href={SocialMediaURLs.MEDIUM_URL} target="_blank">
                        <i className="me-3"><BsIcons.BsMedium size={30} /></i>
                    </a>

                    <a href={SocialMediaURLs.GITHUB_URL} target="_blank">
                        <i className="me-3"><AiIcons.AiFillGithub size={30} /></i>
                    </a>

                    <a href={SocialMediaURLs.COMPOSE_MAIL_URL} target="_blank">
                        <i className="me-3"><SiIcons.SiGmail size={30} /></i>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default AboutUI;
