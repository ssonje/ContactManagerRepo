import { Button, Col, Container, Form, FormGroup, Input, Label, Row } from "reactstrap";
import { ForgotPasswordOTPAuthenticationFormValidation } from "../Form Validation/ForgotPasswordOTPAuthenticationFormValidation";
import { useForgotPasswordEmailFormActionErrors } from "../Hooks/useForgotPasswordEmailFormActionErrors";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

import BasAppCss from "../../../../../CSS/BaseApp.module.css";
import CustomNavbar from "../../../Navbar/CustomNavbar";
import ForgotPasswordCss from "../../CSS/ForgotPassword.module.css";
import ForgotPasswordOTPAuthenticationDBService from "../Database Services/ForgotPasswordOTPAuthenticationDBService";
import React from "react";

import * as ForgotPasswordOTPAuthFormFieldIDConstants from "../Constants/ForgotPasswordOTPAuthFormFieldIDConstants";
import * as ForgotPasswordOTPAuthFormInputNameConstants from "../Constants/ForgotPasswordOTPAuthFormInputNameConstants";
import * as ForgotPasswordOTPAuthFormPlaceholderConstants from "../Constants/ForgotPasswordOTPAuthFormPlaceholderConstants";

/**
 * @Component
 * `ForgotPasswordOTPAuthUI` component provides the UI for entering Email Section in Contact Manager Appication.
 */
const ForgotPasswordOTPAuthUI = () => {

    const [sideBarForProfileUI, setSideBarForProfileUI] = useState(false);

    const [forgotPasswordOTP, setForgotPasswordOTP] = useState({
        otp: null,
    });

    const navigate = useNavigate();
    const [userForgotPasswordFormErrors, setUserForgotPasswordForm] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);

    // Verify OTP
    const verifyOTP = (forgotPasswordOTP) => {
        ForgotPasswordOTPAuthenticationDBService(navigate, forgotPasswordOTP);
    };

    const handleForm = (e) => {
        e.preventDefault();
        setUserForgotPasswordForm(ForgotPasswordOTPAuthenticationFormValidation(forgotPasswordOTP));
        setIsSubmit(true);
    }

    /* 
    * Call the useForgotPasswordEmailFormActionErrors in-order to skip initial execution of useEffect and 
    * verify OTP send to the entered email ID.
    */
    useForgotPasswordEmailFormActionErrors(userForgotPasswordFormErrors, forgotPasswordOTP, isSubmit, verifyOTP);

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
                                            { /* Forgot Password - OTP Authentication */}
                                            <FormGroup>
                                                <Label for={ForgotPasswordOTPAuthFormFieldIDConstants.FORGOT_PASSWORD_OTP_AUTH_FIELD_ID} style={{ color: "#ffffff" }}>OTP sent on the entered Email ID</Label>
                                                <Input
                                                    style={{ border: "none", boxShadow: "none" }}
                                                    id={ForgotPasswordOTPAuthFormFieldIDConstants.FORGOT_PASSWORD_OTP_AUTH_FIELD_ID}
                                                    name={ForgotPasswordOTPAuthFormInputNameConstants.FORGOT_PASSWORD_OTP_AUTH_INPUT_NAME}
                                                    placeholder={ForgotPasswordOTPAuthFormPlaceholderConstants.FORGOT_PASSWORD_OTP_AUTH_PLACEHOLDER}
                                                    type="text"
                                                    onChange={(e) => {
                                                        setForgotPasswordOTP({ ...forgotPasswordOTP, otp: e.target.value });
                                                    }}
                                                />
                                                <Label style={{ color: 'red', marginTop: 5 }}>{userForgotPasswordFormErrors.otp}</Label>
                                            </FormGroup>
                                        </Col>
                                    </Row>

                                    <Row>
                                        <Col>
                                            { /* User Submit */}
                                            <Container className="text-center">
                                                <Button className="btn btn-outline-light m-3" outline onClick={(e) => {
                                                    handleForm(e);
                                                }}>Verify OTP</Button>
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

export default ForgotPasswordOTPAuthUI;
