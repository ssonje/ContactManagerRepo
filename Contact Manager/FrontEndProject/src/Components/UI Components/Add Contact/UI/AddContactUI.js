import { AddContact } from "../../../Database Service Components/AddContact";
import { AddContactFormValidation } from "../Form Validation/AddContactFormValidation";
import { Button, Col, Container, Form, FormGroup, Input, Label, Row } from "reactstrap";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useUserFormActionErrors } from "../../../Helpers/Hooks/useUserFormActionErrors"; 

import AddContactCss from "../CSS/AddContact.module.css";
import CustomNavbar from "../../Navbar/CustomNavbar";
import React from "react";

import * as AddContactFormFieldIDConstants from "../Constants/AddContactFormFieldIDConstants";
import * as AddContactFormInputNameConstants from "../Constants/AddContactFormInputNameConstants";
import * as AddContactFormPlaceholderConstants from "../Constants/AddContactFormPlaceholderConstants";

/**
 * @Component
 * `AddContactUI` component provides the UI for Adding the contact.
 */
const AddContactUI = () => {

    const [sideBarForProfileUI, setSideBarForProfileUI] = useState(false);

    const [contact, setContact] = useState({
        description: null,
        email: null,
        imageURL: null,
        mobileNumber: null,
        name: null,
        nickname: null,
        work: null,
    });

    const navigate = useNavigate();
    const [addContactErrors, setAddContactErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);

    // Add Contact for the particular User
    const addContact = () => {
        if (window.confirm("Are you sure you want to Add Contact?")) {
            AddContact(navigate, contact);
        }
    };

    const handleForm = (e) => {
        e.preventDefault();
        setAddContactErrors(AddContactFormValidation(contact));
        setIsSubmit(true);
    }

    // Call the useUserFormActionErrors in-order to skip initial execution of useEffect and login user into the Application.
    useUserFormActionErrors(addContactErrors, contact, isSubmit, addContact);

    return (
        <div>
            <CustomNavbar
                currentLocation="/user/add/contact"
                setSideBarForProfileUI={setSideBarForProfileUI}
                isSideBarShowing={sideBarForProfileUI}>
            </CustomNavbar>
            <div className={"d-flex align-items-center justify-content-center " + (sideBarForProfileUI ? AddContactCss.ContainerWindowForSideBarOn : AddContactCss.ContainerWindowForSideBarOff)}>
                <Container>
                    <Row>
                        <Col md={2}></Col>
                        <Col md={8}>
                            <Form>
                                <Container>
                                    <h2 className={(AddContactCss.AddContactText) + " mb-4"}>Add Contact</h2>

                                    <Row>
                                        <Col md={6}>
                                            { /* Contact Name */}
                                            <FormGroup>
                                                <Label for={AddContactFormFieldIDConstants.ADD_CONTACT_NAME_FIELD_ID} style={{ color: "#ffffff" }}>Contact Name</Label>
                                                <Input
                                                    style={{ border: "none", boxShadow: "none" }}
                                                    id={AddContactFormFieldIDConstants.ADD_CONTACT_NAME_FIELD_ID}
                                                    name={AddContactFormInputNameConstants.ADD_CONTACT_NAME_INPUT_NAME}
                                                    placeholder={AddContactFormPlaceholderConstants.ADD_CONTACT_NAME_PLACEHOLDER}
                                                    type="text"
                                                    onChange={(e) => {
                                                        setContact({ ...contact, name: e.target.value });
                                                    }}
                                                />
                                                <Label style={{ color: 'red', marginTop: 5 }}>{addContactErrors.name}</Label>
                                            </FormGroup>
                                        </Col>

                                        <Col md={6}>
                                            { /* Contact Nickname */}
                                            <FormGroup>
                                                <Label for={AddContactFormFieldIDConstants.ADD_CONTACT_NICK_NAME_FIELD_ID} style={{ color: "#ffffff" }}>Contact Nick Name</Label>
                                                <Input
                                                    style={{ border: "none", boxShadow: "none" }}
                                                    id={AddContactFormFieldIDConstants.ADD_CONTACT_NICK_NAME_FIELD_ID}
                                                    name={AddContactFormInputNameConstants.ADD_CONTACT_NICK_NAME_INPUT_NAME}
                                                    placeholder={AddContactFormPlaceholderConstants.ADD_CONTACT_NICK_NAME_PLACEHOLDER}
                                                    type="text"
                                                    onChange={(e) => {
                                                        setContact({ ...contact, nickname: e.target.value });
                                                    }}
                                                />
                                            </FormGroup>
                                        </Col>
                                    </Row>

                                    <Row>
                                        <Col md={6}>
                                            { /* Contact Mobile Number */}
                                            <FormGroup>
                                                <Label for={AddContactFormFieldIDConstants.ADD_CONTACT_MOBILE_NUMBER_FIELD_ID} style={{ color: "#ffffff" }}>Contact Mobile Number</Label>
                                                <Input
                                                    style={{ border: "none", boxShadow: "none" }}
                                                    id={AddContactFormFieldIDConstants.ADD_CONTACT_MOBILE_NUMBER_FIELD_ID}
                                                    name={AddContactFormInputNameConstants.ADD_CONTACT_MOBILE_NUMBER_INPUT_NAME}
                                                    placeholder={AddContactFormPlaceholderConstants.ADD_CONTACT_MOBILE_NUMBER_PLACEHOLDER}
                                                    type="text"
                                                    onChange={(e) => {
                                                        setContact({ ...contact, mobileNumber: e.target.value });
                                                    }}
                                                />
                                                <Label></Label>
                                            </FormGroup>
                                        </Col>

                                        <Col md={6}>
                                            { /* Contact Work Details */}
                                            <FormGroup>
                                                <Label for={AddContactFormFieldIDConstants.ADD_CONTACT_WORK_DETAILS_FIELD_ID} style={{ color: "#ffffff" }}>Work Details</Label>
                                                <Input
                                                    style={{ border: "none", boxShadow: "none" }}
                                                    id={AddContactFormFieldIDConstants.ADD_CONTACT_WORK_DETAILS_FIELD_ID}
                                                    name={AddContactFormInputNameConstants.ADD_CONTACT_WORK_DETAILS_INPUT_NAME}
                                                    placeholder={AddContactFormPlaceholderConstants.ADD_CONTACT_WORK_DETAILS_PLACEHOLDER}
                                                    type="text"
                                                    onChange={(e) => {
                                                        setContact({ ...contact, work: e.target.value });
                                                    }}
                                                />
                                            </FormGroup>
                                        </Col>
                                    </Row>

                                    <Row>
                                        <Col md={6}>
                                            { /* Contact Email */}
                                            <FormGroup>
                                                <Label for={AddContactFormFieldIDConstants.ADD_CONTACT_EMAIL_FIELD_ID} style={{ color: "#ffffff" }}>Email</Label>
                                                <Input
                                                    style={{ border: "none", boxShadow: "none" }}
                                                    id={AddContactFormFieldIDConstants.ADD_CONTACT_EMAIL_FIELD_ID}
                                                    name={AddContactFormInputNameConstants.ADD_CONTACT_EMAIL_INPUT_NAME}
                                                    placeholder={AddContactFormPlaceholderConstants.ADD_CONTACT_EMAIL_PLACEHOLDER}
                                                    type="email"
                                                    onChange={(e) => {
                                                        setContact({ ...contact, email: e.target.value });
                                                    }}
                                                />
                                                <Label style={{ color: 'red', marginTop: 5 }}>{addContactErrors.email}</Label>
                                            </FormGroup>
                                        </Col>

                                        <Col md={6}>
                                            { /* Contact Image Profile Image */}
                                            <FormGroup>
                                                <Label for={AddContactFormFieldIDConstants.ADD_CONTACT_IMAGE_URL_FIELD_ID} style={{ color: "#ffffff" }}>Upload Contact Image</Label>
                                                <Input
                                                    style={{ border: "none", boxShadow: "none" }}
                                                    id={AddContactFormFieldIDConstants.ADD_CONTACT_IMAGE_URL_FIELD_ID}
                                                    type="file"
                                                    onChange={(e) => {
                                                        setContact({ ...contact, imageURL: e.target.value });
                                                    }}
                                                />
                                                <Label></Label>
                                            </FormGroup>
                                        </Col>
                                    </Row>

                                    <Row>
                                        <Col>
                                            { /* Contact Description */}
                                            <FormGroup>
                                                <Label for={AddContactFormFieldIDConstants.ADD_CONTACT_DESCRIPTION_FIELD_ID} style={{ color: "#ffffff" }}>Contact Description</Label>
                                                <Input
                                                    style={{ border: "none", boxShadow: "none" }}
                                                    id={AddContactFormFieldIDConstants.ADD_CONTACT_DESCRIPTION_FIELD_ID}
                                                    name={AddContactFormInputNameConstants.ADD_CONTACT_DESCRIPTION_INPUT_NAME}
                                                    placeholder={AddContactFormPlaceholderConstants.ADD_CONTACT_DESCRIPTION_PLACEHOLDER}
                                                    type="textarea"
                                                    onChange={(e) => {
                                                        setContact({ ...contact, description: e.target.value });
                                                    }}
                                                />
                                                <Label style={{ color: 'red', marginTop: 5 }}>{addContactErrors.description}</Label>
                                            </FormGroup>
                                        </Col>
                                    </Row>

                                    <Row>
                                        <Col>
                                            { /* Add Contact - Submit */}
                                            <Container className="text-center">
                                                <Button className="btn btn-outline-light m-3" outline onClick={(e) => {
                                                    handleForm(e);
                                                }}>Add Contact</Button>
                                            </Container>
                                        </Col>
                                    </Row>
                                </Container>
                            </Form>
                        </Col>
                        <Col md={2}></Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
}

export default AddContactUI;
