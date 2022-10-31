import { Button, Col, Container, Form, FormGroup, Input, InputGroup, Label, Row } from "reactstrap";
import { ForgotPasswordUpdatePasswordFormValidation } from "../Form Validation/ForgotPasswordUpdatePasswordFormValidation";
import { useForgotPasswordUpdatePasswordFormActionErrors } from "../Hooks/useForgotPasswordUpdatePasswordFormActionErrors";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

import BasAppCss from "../../../../../CSS/BaseApp.module.css";
import CustomNavbar from "../../../Navbar/CustomNavbar";
import ForgotPasswordCss from "../../CSS/ForgotPassword.module.css";
import ForgotPasswordUpdatePasswordDBService from "../Database Services/ForgotPasswordUpdatePasswordDBService";
import React from "react";

import * as AiIcons from 'react-icons/ai';
import * as ForgotPasswordUpdatePasswordFormFieldIDConstants from "../Constants/ForgotPasswordUpdatePasswordFormFieldIDConstants";
import * as ForgotPasswordUpdatePasswordFormInputNameConstants from "../Constants/ForgotPasswordUpdatePasswordFormInputNameConstants";
import * as ForgotPasswordUpdatePasswordFormPlaceholderConstants from "../Constants/ForgotPasswordUpdatePasswordFormPlaceholderConstants";

/**
 * @Component
 * `ForgotPasswordUpdatePasswordUI` component provides the UI for verifying the new password.
 */
const ForgotPasswordUpdatePasswordUI = () => {

    const [sideBarForProfileUI, setSideBarForProfileUI] = useState(false);

    const [forgotPasswordUpdatePassword, setForgotPasswordUpdatePassword] = useState({
        newPassword: null,
        confirmedNewPassword: null
    });

    const [showEnteredPassword, setShowEnteredPassword] = useState(false);
    const handleShowEnteredPasswordButton = () => {
        setShowEnteredPassword(!showEnteredPassword);
    }

    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const handleShowConfirmPasswordButton = () => {
        setShowConfirmPassword(!showConfirmPassword);
    }

    const navigate = useNavigate();
    const [userForgotPasswordUpdatePasswordFormErrors, setUserForgotPasswordUpdatePasswordFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);

    // Verify OTP
    const verifyUpdatedPassword = (forgotPasswordUpdatePassword) => {
        ForgotPasswordUpdatePasswordDBService(navigate, forgotPasswordUpdatePassword);
    };

    const handleForm = (e) => {
        e.preventDefault();
        setUserForgotPasswordUpdatePasswordFormErrors(ForgotPasswordUpdatePasswordFormValidation(forgotPasswordUpdatePassword));
        setIsSubmit(true);
    }

    /* 
    * Call the useForgotPasswordUpdatePasswordFormActionErrors in-order to skip initial execution of useEffect and 
    * verify entered passwords and update the user's password.
    */
    useForgotPasswordUpdatePasswordFormActionErrors(userForgotPasswordUpdatePasswordFormErrors, forgotPasswordUpdatePassword, isSubmit, verifyUpdatedPassword);

    return (
        <div>
            <CustomNavbar
                currentLocation="/login"
                setSideBarForProfileUI={setSideBarForProfileUI}
                isSideBarShowing={sideBarForProfileUI}>
            </CustomNavbar>
            <div className={"d-flex align-items-center justify-content-center " + (sideBarForProfileUI ? BasAppCss.ContainerWindowForSideBarOn : BasAppCss.ContainerWindowForSideBarOff)}>
                <Container>
                    <Row>
                        <Col md={4}></Col>
                        <Col md={4}>
                            <Form>
                                <Container>
                                    <h2 className={(ForgotPasswordCss.ForgotPasswordText) + " mb-4"}>Forgot Password</h2>
                                    <Row>
                                        <Col>
                                            { /* Forgot Password - New Password */}
                                            <FormGroup>
                                                <Label for={ForgotPasswordUpdatePasswordFormFieldIDConstants.FORGOT_PASSWORD_UPDATED_NEW_PASSWORD_AUTH_FIELD_ID} style={{ color: "#ffffff" }}>New Password</Label>
                                                <InputGroup>
                                                    <Input
                                                        style={{ border: "none", boxShadow: "none" }}
                                                        id={ForgotPasswordUpdatePasswordFormFieldIDConstants.FORGOT_PASSWORD_UPDATED_NEW_PASSWORD_AUTH_FIELD_ID}
                                                        name={ForgotPasswordUpdatePasswordFormInputNameConstants.FORGOT_PASSWORD_UPDATED_NEW_PASSWORD_AUTH_INPUT_NAME}
                                                        placeholder={ForgotPasswordUpdatePasswordFormPlaceholderConstants.FORGOT_PASSWORD_UPDATED_NEW_PASSWORD_AUTH_PLACEHOLDER}
                                                        type={showEnteredPassword ? "text" : "password"}
                                                        onChange={(e) => {
                                                            setForgotPasswordUpdatePassword({ ...forgotPasswordUpdatePassword, newPassword: e.target.value });
                                                        }}
                                                    />
                                                    <Button style={{ background: "#ffffff", border: "none", boxShadow: "none" }}
                                                        onClick={() => {
                                                            handleShowEnteredPasswordButton();
                                                        }}>
                                                        <i style={{ color: "#000000" }}>
                                                            {
                                                                showEnteredPassword
                                                                    ? <AiIcons.AiOutlineEye />
                                                                    : <AiIcons.AiOutlineEyeInvisible />
                                                            }
                                                        </i>
                                                    </Button>
                                                </InputGroup>
                                                <Label style={{ color: 'red', marginTop: 5 }}>{userForgotPasswordUpdatePasswordFormErrors.newPassword}</Label>
                                            </FormGroup>
                                        </Col>
                                    </Row>

                                    <Row>
                                        <Col>
                                            { /* Forgot Password - Confirmed New Password */}
                                            <FormGroup>
                                                <Label for={ForgotPasswordUpdatePasswordFormFieldIDConstants.FORGOT_PASSWORD_UPDATED_CONFIRMED_NEW_PASSWORD_AUTH_FIELD_ID} style={{ color: "#ffffff" }}>Confirmed New Password</Label>
                                                <InputGroup>
                                                    <Input
                                                        style={{ border: "none", boxShadow: "none" }}
                                                        id={ForgotPasswordUpdatePasswordFormFieldIDConstants.FORGOT_PASSWORD_UPDATED_CONFIRMED_NEW_PASSWORD_AUTH_FIELD_ID}
                                                        name={ForgotPasswordUpdatePasswordFormInputNameConstants.FORGOT_PASSWORD_UPDATED_CONFIRMED_NEW_PASSWORD_AUTH_INPUT_NAME}
                                                        placeholder={ForgotPasswordUpdatePasswordFormPlaceholderConstants.FORGOT_PASSWORD_UPDATED_CONFIRMED_NEW_PASSWORD_AUTH_PLACEHOLDER}
                                                        type={showConfirmPassword ? "text" : "password"}
                                                        onChange={(e) => {
                                                            setForgotPasswordUpdatePassword({ ...forgotPasswordUpdatePassword, confirmedNewPassword: e.target.value });
                                                        }}
                                                    />
                                                    <Button style={{ background: "#ffffff", border: "none", boxShadow: "none" }}
                                                        onClick={() => {
                                                            handleShowConfirmPasswordButton();
                                                        }}>
                                                        <i style={{ color: "#000000" }}>
                                                            {
                                                                showConfirmPassword
                                                                    ? <AiIcons.AiOutlineEye />
                                                                    : <AiIcons.AiOutlineEyeInvisible />
                                                            }
                                                        </i>
                                                    </Button>
                                                </InputGroup>
                                                <Label style={{ color: 'red', marginTop: 5 }}>{userForgotPasswordUpdatePasswordFormErrors.confirmedNewPassword}</Label>
                                            </FormGroup>
                                        </Col>
                                    </Row>

                                    <Row>
                                        <Col>
                                            { /* User Submit */}
                                            <Container className="text-center">
                                                <Button className="btn btn-outline-light m-3" outline onClick={(e) => {
                                                    handleForm(e);
                                                }}>Update Password</Button>
                                            </Container>
                                        </Col>
                                    </Row>
                                </Container>
                            </Form>
                        </Col>
                        <Col md={4}></Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
}

export default ForgotPasswordUpdatePasswordUI;
