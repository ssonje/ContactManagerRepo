import { Button, Table } from "reactstrap";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import React from "react";
import ViewContactsCss from "../CSS/ViewContacts.module.css";

import "../CSS/ViewContacts.css";

import * as AiIcons from 'react-icons/ai';

/**
 * @Component
 * `ShowContactsTableUI` component provides the table formatted UI for viewing the contacts.
 */
const ShowContactsTableUI = (props) => {

    const contacts = props.contacts;
    const navigate = useNavigate();

    const handleDeleteButtonClick = () => {
        navigate("/user/delete/contact");
    }

    const handleEditButtonClick = () => {
        navigate("/user/modify/contact");
    }

    return (
        <Table striped bordered hover responsive="md" className="bg-transparent">
            <thead>
                <tr>
                    <th className={(ViewContactsCss.ViewContactsTableHeaderText)}>Name</th>
                    <th className={(ViewContactsCss.ViewContactsTableHeaderText)}>Mobile Number</th>
                    <th className={(ViewContactsCss.ViewContactsTableHeaderText)}>Email</th>
                    <th className={(ViewContactsCss.ViewContactsTableHeaderText)}>Action</th>
                </tr>
            </thead>
            <tbody>
                {
                    contacts.map((contact) =>
                        <tr>
                            <td>{contact.name}</td>
                            <td>{contact.mobileNumber}</td>
                            <td>
                                <Link to={`/user/view/contact/${contact.id}`}><a>{contact.email}</a></Link>
                            </td>
                            <td>
                                <Button outline color="danger" onClick={() => {
                                    handleDeleteButtonClick();
                                }}>
                                    <AiIcons.AiFillDelete />
                                </Button>
                                <Button outline color="warning" className="ms-3" onClick={() => {
                                    handleEditButtonClick();
                                }}>
                                    <AiIcons.AiFillEdit />
                                </Button>
                            </td>
                        </tr>
                    )
                }
            </tbody>
        </Table>
    );
}

export default ShowContactsTableUI;
