import { Button, Col, Container, Form, FormGroup, Input, InputGroup, Label, Row } from "reactstrap";
import { SettingsDBService } from "../Database Services/SettingsDBService";
import { SettingsFormValidation } from "../Form Validation/SettingsFormValidation";
import { useChangeUserPassword } from "../Hooks/useChangeUserPassword";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

import BasAppCss from "../../../../CSS/BaseApp.module.css";
import CustomNavbar from "../../Navbar/CustomNavbar";
import React from "react";
import SettingsCss from "../CSS/Settings.module.css";

import * as SettingsFormFieldIDConstants from "../Constants/SettingsFormFieldIDConstants";
import * as SettingsFormInputNameConstants from "../Constants/SettingsFormInputNameConstants";
import * as SettingsFormPlaceholderConstants from "../Constants/SettingsFormPlaceholderConstants";
import * as SettingsPasswordIcons from "../Constants/SettingsPasswordIcons";

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

    // Change password of the user
    const changePasswordOfUser = (userPassword) => {
        SettingsDBService(navigate, userPassword);
    };

    const handleForm = (e) => {
        e.preventDefault();
        setUserSettingsErrors(SettingsFormValidation(
            userPassword.oldPassword, 
            userPassword.newPassword, 
            userPassword.confirmedNewPassword));
        setIsSubmit(true);
    }

    // Call the useUserFormActionErrors in-order to skip initial execution of useEffect and add user to the database.
    useChangeUserPassword(changePasswordOfUser, userPassword, userSettingsErrors, isSubmit);

    return (
        <div>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
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
                                                        }}
                                                    />
                                                    <Button style={{ background: "#ffffff", border: "none", boxShadow: "none" }}
                                                        onClick={() => {
                                                            handleShowEnteredOldPasswordButton();
                                                        }}>
                                                        <i className={
                                                            showEnteredOldPassword
                                                                ? SettingsPasswordIcons.SETTINGS_SHOW_PASSWORD_ICON
                                                                : SettingsPasswordIcons.SETTINGS_HIDE_PASSWORD_ICON}
                                                            style={{ color: "#000000" }}></i>
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
                                                        <i className={
                                                            showEnteredNewPassword
                                                                ? SettingsPasswordIcons.SETTINGS_SHOW_PASSWORD_ICON
                                                                : SettingsPasswordIcons.SETTINGS_HIDE_PASSWORD_ICON}
                                                            style={{ color: "#000000" }}></i>
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
                                                        <i className={
                                                            showEnteredNewConfirmPassword
                                                                ? SettingsPasswordIcons.SETTINGS_SHOW_PASSWORD_ICON
                                                                : SettingsPasswordIcons.SETTINGS_HIDE_PASSWORD_ICON}
                                                            style={{ color: "#000000" }}></i>
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
