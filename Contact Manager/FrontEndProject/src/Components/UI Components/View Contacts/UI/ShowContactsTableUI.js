import { Button, Table } from "reactstrap";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

import React from "react";
import SearchContact from "../../Search Contact/SearchContact";
import ViewContactsCss from "../CSS/ViewContacts.module.css";

import "../CSS/ViewContacts.css";

import * as AiIcons from 'react-icons/ai';

/**
 * @Component
 * `ShowContactsTableUI` component provides the table formatted UI for viewing the contacts.
 */
const ShowContactsTableUI = (props) => {

    const contacts = props.contacts;
    const [searchContactQuery, setSearchContactQuery] = useState("");
    const navigate = useNavigate();

    const handleDeleteButtonClick = (contactID) => {
        if (window.confirm("Are you sure you want to Delete this Contact?")) {
            navigate(`/user/delete/contact/${contactID}`);
        }
    }

    const handleEditButtonClick = (contactID) => {
        if (window.confirm("Are you sure you want to Modify this Contact?")) {
            navigate(`/user/modify/contact/${contactID}`);
        }
    }

    return (
        <>
            <SearchContact setSearchContactQuery={setSearchContactQuery} />
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
                        contacts.filter(contact => contact.name.toLowerCase().includes(searchContactQuery)).map((contact) =>
                            <tr>
                                <td>{contact.name}</td>
                                <td>{contact.mobileNumber}</td>
                                <td>
                                    <Link to={`/user/view/contact/${contact.id}`}><a>{contact.email}</a></Link>
                                </td>
                                <td>
                                    <Button outline color="danger" onClick={() => {
                                        handleDeleteButtonClick(contact.id);
                                    }}>
                                        <AiIcons.AiFillDelete />
                                    </Button>
                                    <Button outline color="warning" className="ms-3" onClick={() => {
                                        handleEditButtonClick(contact.id);
                                    }}>
                                        <AiIcons.AiFillEdit />
                                    </Button>
                                </td>
                            </tr>
                        )
                    }
                </tbody>
            </Table>
        </>
    );
}

export default ShowContactsTableUI;
