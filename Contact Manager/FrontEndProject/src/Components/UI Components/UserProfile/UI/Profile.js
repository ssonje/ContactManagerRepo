import { Link } from "react-router-dom";
import { Table } from "reactstrap";

import BasAppCss from "../../../../CSS/BaseApp.module.css";
import React from "react";
import UserProfileCss from "../CSS/UserProfile.module.css";

/**
 * @Component
 * `Profile` component provides the UI for User Profile Section in Contact Manager Appication.
 */
const Profile = (props) => {

    const user = props.user;

    return (
        <div className={"d-flex align-items-center justify-content-center " + (props.isSideBarShowing ? BasAppCss.ContainerWindowForSideBarOn : BasAppCss.ContainerWindowForSideBarOff)}>
            <div className={(UserProfileCss.UserProfileText)}>
                <h1>Your Profile</h1>
                <Table striped bordered hover responsive="md" className="bg-transparent">
                    <tbody>
                        <tr>
                            <th>Name</th>
                            <td>{user.name}</td>
                        </tr>
                        <tr>
                            <th>Email</th>
                            <td>{user.email}</td>
                        </tr>
                        <tr>
                            <th>Role</th>
                            <td>{user.role}</td>
                        </tr>
                        <tr>
                            <th>About</th>
                            <td>{user.about ? user.about : "-"}</td>
                        </tr>
                        <tr>
                            <th>Profile Image</th>
                            <td>{user.imageURL ? user.imageURL : "-"}</td>
                        </tr>
                        <tr>
                            <th>View Contacts</th>
                            <td>
                                <Link to='/user/view/contacts'>
                                    Click Here to View Contacts
                                </Link>
                            </td>
                        </tr>
                    </tbody>
                </Table>
            </div>
        </div>
    );
}

export default Profile;
