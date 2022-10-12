import { Button, Table } from "reactstrap";
import { useNavigate } from "react-router-dom";

import React from "react";

import * as AiIcons from 'react-icons/ai';

/**
 * @Component
 * `ContactDetailsTable` component provides the table formatted UI for viewing the contacts.
 */
const ContactDetailsTable = (props) => {

    const contact = props.contact;
    console.log("Contact = ", contact);
    const navigate = useNavigate();

    const handleDeleteButtonClick = () => {
        navigate("/user/delete/contact");
    }

    const handleEditButtonClick = () => {
        navigate("/user/modify/contact");
    }

    return (
        <Table striped bordered hover responsive="md" className="bg-transparent">
            <tbody>
                <tr>
                    <th>Name</th>
                    <td>{contact.name}</td>
                </tr>
                <tr>
                    <th>Nick Name</th>
                    <td>{contact.nickname ? contact.nickname : "-"}</td>
                </tr>
                <tr>
                    <th>Mobile Number</th>
                    <td>{contact.mobileNumber}</td>
                </tr>
                <tr>
                    <th>Email</th>
                    <td>{contact.email}</td>
                </tr>
                <tr>
                    <th>Work</th>
                    <td>{contact.work ? contact.work : "-"}</td>
                </tr>
                <tr>
                    <th>Description</th>
                    <td>{contact.description ? contact.description : "-"}</td>
                </tr>
                <tr>
                    <th>Contact Image</th>
                    <td>{contact.imageURL ? contact.imageURL : "-"}</td>
                </tr>
                <tr>
                    <td colSpan={2}>
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
            </tbody>
        </Table>
    );
}

export default ContactDetailsTable;
