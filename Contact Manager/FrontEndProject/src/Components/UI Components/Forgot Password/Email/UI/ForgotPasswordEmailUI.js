import { Button, Col, Container, Form, FormGroup, Input, Label, Row } from "reactstrap";
import { ForgotPasswordFormValidation } from "../Form Validation/ForgotPasswordFormValidation";
import { useForgotPasswordEmailFormActionErrors } from "../Hooks/useForgotPasswordEmailFormActionErrors";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

import BasAppCss from "../../../../../CSS/BaseApp.module.css";
import CustomNavbar from "../../../Navbar/CustomNavbar";
import ForgotPasswordCss from "../../CSS/ForgotPassword.module.css";
import ForgotPasswordEmailDBService from "../Database Services/ForgotPasswordEmailDBService";
import LoadingSpinner from "../../../Loading Spinner/LoadingSpinner";
import React from "react";

import * as ForgotPasswordEmailFormFieldIDConstants from "../Constants/ForgotPasswordEmailFormFieldIDConstants";
import * as ForgotPasswordEmailFormInputNameConstants from "../Constants/ForgotPasswordEmailFormInputNameConstants";
import * as ForgotPasswordEmailFormPlaceholderConstants from "../Constants/ForgotPasswordEmailFormPlaceholderConstants";

/**
 * @Component
 * `ForgotPasswordEmailUI` component provides the UI for entering Email Section in Contact Manager Appication.
 */
const ForgotPasswordEmailUI = () => {

    const [sideBarForProfileUI, setSideBarForProfileUI] = useState(false);
    const [isAPICalled, setIsAPICalled] = useState(false);

    const [forgotPasswordEmail, setForgotPasswordEmail] = useState({
        email: null,
    });

    const navigate = useNavigate();
    const [userForgotPasswordFormErrors, setUserForgotPasswordForm] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);

    // Send OTP to the entered email ID
    const sendOTP = (forgotPasswordEmail) => {
        ForgotPasswordEmailDBService(navigate, setIsAPICalled, forgotPasswordEmail);
    };

    const handleForm = (e) => {
        e.preventDefault();
        setUserForgotPasswordForm(ForgotPasswordFormValidation(forgotPasswordEmail));
        setIsSubmit(true);
    }

    /* 
    * Call the useForgotPasswordEmailFormActionErrors in-order to skip initial execution of useEffect and 
    * send OTP to the entered email ID.
    */
    useForgotPasswordEmailFormActionErrors(userForgotPasswordFormErrors, forgotPasswordEmail, isSubmit, sendOTP);

    return (
        <div>
            <CustomNavbar
                currentLocation="/login"
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
                                    <Col md={4}></Col>
                                    <Col md={4}>
                                        <Form>
                                            <Container>
                                                <h2 className={(ForgotPasswordCss.ForgotPasswordText) + " mb-4"}>Forgot Password</h2>
                                                <Row>
                                                    <Col>
                                                        { /* Forgot Password - Email */}
                                                        <FormGroup>
                                                            <Label for={ForgotPasswordEmailFormFieldIDConstants.FORGOT_PASSWORD_EMAIL_FIELD_ID} style={{ color: "#ffffff" }}>Email</Label>
                                                            <Input
                                                                style={{ border: "none", boxShadow: "none" }}
                                                                id={ForgotPasswordEmailFormFieldIDConstants.FORGOT_PASSWORD_EMAIL_FIELD_ID}
                                                                name={ForgotPasswordEmailFormInputNameConstants.FORGOT_PASSWORD_EMAIL_INPUT_NAME}
                                                                placeholder={ForgotPasswordEmailFormPlaceholderConstants.FORGOT_PASSWORD_EMAIL_PLACEHOLDER}
                                                                type="email"
                                                                onChange={(e) => {
                                                                    setForgotPasswordEmail({ ...forgotPasswordEmail, email: e.target.value });
                                                                }}
                                                            />
                                                            <Label style={{ color: 'red', marginTop: 5 }}>{userForgotPasswordFormErrors.email}</Label>
                                                        </FormGroup>
                                                    </Col>
                                                </Row>

                                                <Row>
                                                    <Col>
                                                        { /* User Submit */}
                                                        <Container className="text-center">
                                                            <Button className="btn btn-outline-light m-3" outline onClick={(e) => {
                                                                handleForm(e);
                                                            }}>Send OTP</Button>
                                                        </Container>
                                                    </Col>
                                                </Row>
                                            </Container>
                                        </Form>
                                    </Col>
                                    <Col md={4}></Col>
                                </Row>
                            </Container>
                }
            </div>
        </div>
    );
}

export default ForgotPasswordEmailUI;
