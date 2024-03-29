import { Button, Col, Container, Form, FormGroup, Input, Label, Row } from "reactstrap";
import { ModifyContactFormValidation } from "../Form Validation/ModifyContactFormValidation";
import { useNavigate } from "react-router-dom";
import { useRef } from "react";
import { useState } from "react";
import { useUserFormActionErrors } from "../../../Helpers/Hooks/useUserFormActionErrors";
import { useViewSingleContact } from "../../View Single Contact/Hooks/useViewSingleContact";

import BasAppCss from "../../../../CSS/BaseApp.module.css";
import CustomNavbar from "../../Navbar/CustomNavbar";
import LoadingSpinner from "../../Loading Spinner/LoadingSpinner";
import ModifyContactCss from "../CSS/ModifyContact.module.css";
import ModifyContactDBService from "../Database Services/ModifyContactDBService";
import React from "react";
import ViewSingleContactDBService from "../../View Single Contact/Database Services/ViewSingleContactDBService";

import * as ModifyContactFormFieldIDConstants from "../Constants/ModifyContactFormFieldIDConstants";
import * as ModifyContactFormInputNameConstants from "../Constants/ModifyContactFormInputNameConstants";
import * as ModifyContactFormPlaceholderConstants from "../Constants/ModifyContactFormPlaceholderConstants";

/**
 * @Component
 * `ModifyContactUI` component provides the UI for Modifying the User.
 */
const ModifyContactUI = (props) => {

    const [sideBarForProfileUI, setSideBarForProfileUI] = useState(false);
    const [isAPICalled, setIsAPICalled] = useState(false);

    const id = props.id;

    // Fetched the Contact Details with the above id
    const [contact, setContact] = useState([]);
    const isContactFetched = useRef(true);

    // Fetch the Contact details
    const fetchContactDetails = () => {
        if (isContactFetched.current) {
            ViewSingleContactDBService(setContact, setIsAPICalled, id);
            isContactFetched.current = false;
        }
    };

    // Call the useViewSingleContact in-order to skip initial execution of useEffect and fetch contact details.
    useViewSingleContact(fetchContactDetails);

    // Modify the required contact
    const [modifyContactErrors, setModifyContactErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);

    const navigate = useNavigate();

    // Modify the required Contact
    const modifyContact = () => {
        if (window.confirm("Are you sure you want to Modify Contact?")) {
            ModifyContactDBService(navigate, setIsAPICalled, id, contact);
        }
    };

    const handleModifyContactForm = (e) => {
        e.preventDefault();
        setModifyContactErrors(ModifyContactFormValidation(contact));
        setIsSubmit(true);
    }

    // Call the useUserFormActionErrors in-order to skip initial execution of useEffect and modify contact.
    useUserFormActionErrors(modifyContactErrors, contact, isSubmit, modifyContact);

    const handleCancelModifyContactForm = (e) => {
        if (window.confirm("Are you sure you want to cancel Modifying Contact?")) {
            navigate("/user/view/contacts");
        }
    }

    return (
        <div>
            <CustomNavbar
                setSideBarForProfileUI={setSideBarForProfileUI}
                isSideBarShowing={sideBarForProfileUI}>
            </CustomNavbar>
            <div className={"d-flex align-items-center justify-content-center " + (sideBarForProfileUI ? BasAppCss.ContainerWindowForSideBarOn : BasAppCss.ContainerWindowForSideBarOff)}>
                {
                    isAPICalled
                        ?
                            <LoadingSpinner sideBarForProfileUI={sideBarForProfileUI} />
                        :
                            <Container>
                                <Row>
                                    <Col md={2}></Col>
                                    <Col md={8}>
                                        <Form>
                                            <Container>
                                                <h2 className={(ModifyContactCss.ModifyContactText) + " mb-4"}>Modify Contact</h2>

                                                <Row>
                                                    <Col md={6}>
                                                        { /* Contact Name */}
                                                        <FormGroup>
                                                            <Label for={ModifyContactFormFieldIDConstants.MODIFY_CONTACT_NAME_FIELD_ID} style={{ color: "#ffffff" }}>Contact Name</Label>
                                                            <Input
                                                                style={{ border: "none", boxShadow: "none" }}
                                                                id={ModifyContactFormFieldIDConstants.MODIFY_CONTACT_NAME_FIELD_ID}
                                                                name={ModifyContactFormInputNameConstants.MODIFY_CONTACT_NAME_INPUT_NAME}
                                                                placeholder={ModifyContactFormPlaceholderConstants.MODIFY_CONTACT_NAME_PLACEHOLDER}
                                                                type="text"
                                                                value={contact.name}
                                                                onChange={(e) => {
                                                                    setContact({ ...contact, name: e.target.value });
                                                                }}
                                                            />
                                                            <Label style={{ color: 'red', marginTop: 5 }}>{modifyContactErrors.name}</Label>
                                                        </FormGroup>
                                                    </Col>

                                                    <Col md={6}>
                                                        { /* Contact Nickname */}
                                                        <FormGroup>
                                                            <Label for={ModifyContactFormFieldIDConstants.MODIFY_CONTACT_NICK_NAME_FIELD_ID} style={{ color: "#ffffff" }}>Contact Nick Name</Label>
                                                            <Input
                                                                style={{ border: "none", boxShadow: "none" }}
                                                                id={ModifyContactFormFieldIDConstants.MODIFY_CONTACT_NICK_NAME_FIELD_ID}
                                                                name={ModifyContactFormInputNameConstants.MODIFY_CONTACT_NICK_NAME_INPUT_NAME}
                                                                placeholder={ModifyContactFormPlaceholderConstants.MODIFY_CONTACT_NICK_NAME_PLACEHOLDER}
                                                                type="text"
                                                                value={contact.nickname}
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
                                                            <Label for={ModifyContactFormFieldIDConstants.MODIFY_CONTACT_MOBILE_NUMBER_FIELD_ID} style={{ color: "#ffffff" }}>Contact Mobile Number</Label>
                                                            <Input
                                                                style={{ border: "none", boxShadow: "none" }}
                                                                id={ModifyContactFormFieldIDConstants.MODIFY_CONTACT_MOBILE_NUMBER_FIELD_ID}
                                                                name={ModifyContactFormInputNameConstants.MODIFY_CONTACT_MOBILE_NUMBER_INPUT_NAME}
                                                                placeholder={ModifyContactFormPlaceholderConstants.MODIFY_CONTACT_MOBILE_NUMBER_PLACEHOLDER}
                                                                type="text"
                                                                value={contact.mobileNumber}
                                                                onChange={(e) => {
                                                                    setContact({ ...contact, mobileNumber: e.target.value });
                                                                }}
                                                            />
                                                            <Label style={{ color: 'red', marginTop: 5 }}>{modifyContactErrors.mobileNumber}</Label>
                                                        </FormGroup>
                                                    </Col>

                                                    <Col md={6}>
                                                        { /* Contact Work Details */}
                                                        <FormGroup>
                                                            <Label for={ModifyContactFormFieldIDConstants.MODIFY_CONTACT_WORK_DETAILS_FIELD_ID} style={{ color: "#ffffff" }}>Work Details</Label>
                                                            <Input
                                                                style={{ border: "none", boxShadow: "none" }}
                                                                id={ModifyContactFormFieldIDConstants.MODIFY_CONTACT_WORK_DETAILS_FIELD_ID}
                                                                name={ModifyContactFormInputNameConstants.MODIFY_CONTACT_WORK_DETAILS_INPUT_NAME}
                                                                placeholder={ModifyContactFormPlaceholderConstants.MODIFY_CONTACT_WORK_DETAILS_PLACEHOLDER}
                                                                type="text"
                                                                value={contact.work}
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
                                                            <Label for={ModifyContactFormFieldIDConstants.MODIFY_CONTACT_EMAIL_FIELD_ID} style={{ color: "#ffffff" }}>Email</Label>
                                                            <Input
                                                                style={{ border: "none", boxShadow: "none" }}
                                                                id={ModifyContactFormFieldIDConstants.MODIFY_CONTACT_EMAIL_FIELD_ID}
                                                                name={ModifyContactFormInputNameConstants.MODIFY_CONTACT_EMAIL_INPUT_NAME}
                                                                placeholder={ModifyContactFormPlaceholderConstants.MODIFY_CONTACT_EMAIL_PLACEHOLDER}
                                                                type="email"
                                                                value={contact.email}
                                                                onChange={(e) => {
                                                                    setContact({ ...contact, email: e.target.value });
                                                                }}
                                                            />
                                                            <Label style={{ color: 'red', marginTop: 5 }}>{modifyContactErrors.email}</Label>
                                                        </FormGroup>
                                                    </Col>

                                                    <Col md={6}>
                                                        { /* Contact Image Profile Image */}
                                                        <FormGroup>
                                                            <Label for={ModifyContactFormFieldIDConstants.MODIFY_CONTACT_IMAGE_URL_FIELD_ID} style={{ color: "#ffffff" }}>Upload Contact Image</Label>
                                                            <Input
                                                                style={{ border: "none", boxShadow: "none" }}
                                                                id={ModifyContactFormFieldIDConstants.MODIFY_CONTACT_IMAGE_URL_FIELD_ID}
                                                                name={ModifyContactFormInputNameConstants.MODIFY_CONTACT_IMAGE}
                                                                type="file"
                                                                value={contact.imageURL}
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
                                                            <Label for={ModifyContactFormFieldIDConstants.MODIFY_CONTACT_DESCRIPTION_FIELD_ID} style={{ color: "#ffffff" }}>Contact Description</Label>
                                                            <Input
                                                                style={{ border: "none", boxShadow: "none" }}
                                                                id={ModifyContactFormFieldIDConstants.MODIFY_CONTACT_DESCRIPTION_FIELD_ID}
                                                                name={ModifyContactFormInputNameConstants.MODIFY_CONTACT_DESCRIPTION_INPUT_NAME}
                                                                placeholder={ModifyContactFormPlaceholderConstants.MODIFY_CONTACT_DESCRIPTION_PLACEHOLDER}
                                                                type="textarea"
                                                                value={contact.description}
                                                                onChange={(e) => {
                                                                    setContact({ ...contact, description: e.target.value });
                                                                }}
                                                            />
                                                            <Label style={{ color: 'red', marginTop: 5 }}>{modifyContactErrors.description}</Label>
                                                        </FormGroup>
                                                    </Col>
                                                </Row>

                                                <Row>
                                                    <Col>
                                                        <Container className="text-center">
                                                            { /* Modify Contact - Submit */}
                                                            <Button className="btn btn-outline-success m-3" outline onClick={(e) => {
                                                                handleModifyContactForm(e);
                                                            }}>Modify Contact</Button>
                                                            { /* Modify Contact - Cancel */}
                                                            <Button className="btn btn-outline-danger" outline onClick={(e) => {
                                                                handleCancelModifyContactForm(e);
                                                            }}>Cancel</Button>
                                                        </Container>
                                                    </Col>
                                                </Row>
                                            </Container>
                                        </Form>
                                    </Col>
                                    <Col md={2}></Col>
                                </Row>
                            </Container>
                }
            </div>
        </div>
    );
}

export default ModifyContactUI;
