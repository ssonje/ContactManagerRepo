import { Button, Col, Container, Form, FormGroup, Input, InputGroup, Label, Row } from "reactstrap";
import { OldPasswordAuthenticationDBService } from "../Database Services/OldPasswordAuthenticationDBService";
import { SettingsFormValidation } from "../Form Validation/SettingsFormValidation";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useUserOldPasswordAuthentication } from "../Hooks/useUserOldPasswordAuthentication";

import BasAppCss from "../../../../CSS/BaseApp.module.css";
import CustomNavbar from "../../Navbar/CustomNavbar";
import React from "react";
import SettingsCss from "../CSS/Settings.module.css";

import * as AiIcons from 'react-icons/ai';
import * as SettingsFormFieldIDConstants from "../Constants/SettingsFormFieldIDConstants";
import * as SettingsFormInputNameConstants from "../Constants/SettingsFormInputNameConstants";
import * as SettingsFormPlaceholderConstants from "../Constants/SettingsFormPlaceholderConstants";

/**
 * @Component
 * `SettingsUI` component provides the UI for User Profile Section in Contact Manager Appication.
 */
const SettingsUI = () => {
    const [sideBarForProfileUI, setSideBarForProfileUI] = useState(false);

    const [userPassword, setUserPassword] = useState({
        oldPassword: null,
        newPassword: null,
        confirmedNewPassword: null
    });

    const [userPasswordAuthentication, setUserPasswordAuthentication] = useState({
        password: null
    });

    const [userSettingsErrors, setUserSettingsErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);
    const navigate = useNavigate();

    const [showEnteredOldPassword, setShowEnteredOldPassword] = useState(false);
    const handleShowEnteredOldPasswordButton = () => {
        setShowEnteredOldPassword(!showEnteredOldPassword);
    }

    const [showEnteredNewPassword, setShowEnteredNewPassword] = useState(false);
    const handleShowEnteredNewPasswordButton = () => {
        setShowEnteredNewPassword(!showEnteredNewPassword);
    }

    const [showEnteredNewConfirmPassword, setShowEnteredNewConfirmPassword] = useState(false);
    const handleShowEnteredConfirmNewPasswordButton = () => {
        setShowEnteredNewConfirmPassword(!showEnteredNewConfirmPassword);
    }

    const handleForm = (e) => {
        e.preventDefault();
        setUserSettingsErrors(SettingsFormValidation(
            userPassword.oldPassword,
            userPassword.newPassword,
            userPassword.confirmedNewPassword));
        setIsSubmit(true);
    }

    // Authenticate user's old password
    const authenticateUserOldPassword = (navigate, userPassword, userPasswordAuthentication) => {
        OldPasswordAuthenticationDBService(navigate, userPassword, userPasswordAuthentication);
    };

    /*
    * Call the useUserOldPasswordAuthentication in-order to skip initial execution of useEffect 
    * and authenticate the user's password followed by changing user's password.
    */
    useUserOldPasswordAuthentication(authenticateUserOldPassword, navigate, isSubmit, userPassword, userPasswordAuthentication, userSettingsErrors);

    return (
        <div>
            <CustomNavbar
                currentLocation="/user/settings"
                setSideBarForProfileUI={setSideBarForProfileUI}
                isSideBarShowing={sideBarForProfileUI}>
            </CustomNavbar>
            <div className={"d-flex align-items-center justify-content-center " + (sideBarForProfileUI ? BasAppCss.ContainerWindowForSideBarOn : BasAppCss.ContainerWindowForSideBarOff)}>
                <Container>
                    <Row>
                        <Col md={2}></Col>
                        <Col md={8}>
                            <Form>
                                <Container>
                                    <h2 className={(SettingsCss.SettingsText) + " mb-4"}>Change Password</h2>
                                    <Row>
                                        <Col>
                                            { /* User's Old Password */}
                                            <FormGroup>
                                                <Label for={SettingsFormFieldIDConstants.SETTINGS_OLD_PASSWORD_FIELD_ID} style={{ color: "#ffffff" }}>Old Password</Label>
                                                <InputGroup>
                                                    <Input
                                                        style={{ border: "none", boxShadow: "none" }}
                                                        id={SettingsFormFieldIDConstants.SETTINGS_OLD_PASSWORD_FIELD_ID}
                                                        name={SettingsFormInputNameConstants.SETTINGS_OLD_PASSWORD_INPUT_NAME}
                                                        placeholder={SettingsFormPlaceholderConstants.SETTINGS_OLD_PASSWORD_PLACEHOLDER}
                                                        type={showEnteredOldPassword ? "text" : "password"}
                                                        onChange={(e) => {
                                                            setUserPassword({ ...userPassword, oldPassword: e.target.value });
                                                            setUserPasswordAuthentication({ ...userPasswordAuthentication, password: e.target.value });
                                                        }}
                                                    />
                                                    <Button style={{ background: "#ffffff", border: "none", boxShadow: "none" }}
                                                        onClick={() => {
                                                            handleShowEnteredOldPasswordButton();
                                                        }}>
                                                        <i style={{ color: "#000000" }}>
                                                            {
                                                                showEnteredOldPassword
                                                                    ? <AiIcons.AiOutlineEye />
                                                                    : <AiIcons.AiOutlineEyeInvisible />
                                                            }
                                                        </i>
                                                    </Button>
                                                </InputGroup>
                                                <Label style={{ color: 'red', marginTop: 5 }}>{userSettingsErrors.oldPassword}</Label>
                                            </FormGroup>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col md={6}>
                                            { /* User's New Password */}
                                            <FormGroup>
                                                <Label for={SettingsFormFieldIDConstants.SETTINGS_NEW_PASSWORD_FIELD_ID} style={{ color: "#ffffff" }}>New Password</Label>
                                                <InputGroup>
                                                    <Input
                                                        style={{ border: "none", boxShadow: "none" }}
                                                        id={SettingsFormFieldIDConstants.SETTINGS_NEW_PASSWORD_FIELD_ID}
                                                        name={SettingsFormInputNameConstants.SETTINGS_PASSWORD_INPUT_NAME}
                                                        placeholder={SettingsFormPlaceholderConstants.SETTINGS_NEW_PASSWORD_PLACEHOLDER}
                                                        type={showEnteredNewPassword ? "text" : "password"}
                                                        onChange={(e) => {
                                                            setUserPassword({ ...userPassword, newPassword: e.target.value });
                                                        }}
                                                    />
                                                    <Button style={{ background: "#ffffff", border: "none", boxShadow: "none" }}
                                                        onClick={() => {
                                                            handleShowEnteredNewPasswordButton();
                                                        }}>
                                                        <i style={{ color: "#000000" }}>
                                                            {
                                                                showEnteredNewPassword
                                                                    ? <AiIcons.AiOutlineEye />
                                                                    : <AiIcons.AiOutlineEyeInvisible />
                                                            }
                                                        </i>
                                                    </Button>
                                                </InputGroup>
                                                <Label style={{ color: 'red', marginTop: 5 }}>{userSettingsErrors.newPassword}</Label>
                                            </FormGroup>
                                        </Col>

                                        <Col md={6}>
                                            { /* User's Confirmed New Password */}
                                            <FormGroup>
                                                <Label for={SettingsFormFieldIDConstants.SETTINGS_CONFIRM_PASSWORD_FIELD_ID} style={{ color: "#ffffff" }}>Confirm New Password</Label>
                                                <InputGroup>
                                                    <Input
                                                        style={{ border: "none", boxShadow: "none" }}
                                                        id={SettingsFormFieldIDConstants.SETTINGS_CONFIRM_PASSWORD_FIELD_ID}
                                                        name={SettingsFormInputNameConstants.SETTINGS_CONFIRM_PASSWORD_INPUT_NAME}
                                                        placeholder={SettingsFormPlaceholderConstants.SETTINGS_NEW_CONFIRM_PASSWORD_PLACEHOLDER}
                                                        type={showEnteredNewConfirmPassword ? "text" : "password"}
                                                        onChange={(e) => {
                                                            setUserPassword({ ...userPassword, confirmedNewPassword: e.target.value });
                                                        }}
                                                    />
                                                    <Button style={{ background: "#ffffff", border: "none", boxShadow: "none" }}
                                                        onClick={() => {
                                                            handleShowEnteredConfirmNewPasswordButton();
                                                        }}>
                                                        <i style={{ color: "#000000" }}>
                                                            {
                                                                showEnteredNewConfirmPassword
                                                                    ? <AiIcons.AiOutlineEye />
                                                                    : <AiIcons.AiOutlineEyeInvisible />
                                                            }
                                                        </i>
                                                    </Button>
                                                </InputGroup>
                                                <Label style={{ color: 'red', marginTop: 5 }}>{userSettingsErrors.confirmedNewPassword}</Label>
                                            </FormGroup>
                                        </Col>
                                    </Row>

                                    <Row>
                                        <Col>
                                            { /* Change User Password Submit */}
                                            <Container className="text-center">
                                                <Button className="btn btn-outline-light" outline onClick={(e) => {
                                                    handleForm(e);
                                                }}>Change Password</Button>
                                                <Button className="btn btn-outline-light m-3" outline type="reset" onClick={() => {
                                                    setUserPassword({
                                                        ...userPassword,
                                                        oldPassword: null,
                                                        newPassword: null,
                                                        confirmedNewPassword: null
                                                    });
                                                    setUserPasswordAuthentication({ ...userPasswordAuthentication, password: null });
                                                }}>
                                                    Clear Data
                                                </Button>
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

export default SettingsUI;
