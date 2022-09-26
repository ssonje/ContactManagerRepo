import { AuthenticateUser } from "../../../Database Service Components/AuthenticateUser";
import { Button, Col, Container, Form, FormGroup, Input, InputGroup, Label, Row } from "reactstrap";
import { Link } from "react-router-dom";
import { LoginFormValidation } from "../Form Validation/LoginFormValidation";
import { useNavigate } from "react-router-dom";
import { useUserFormActionErrors } from "../../../Helpers/Hooks/useUserFormActionErrors";

import CustomNavbar from "../../Navbar/CustomNavbar";
import LoginCss from "../CSS/Login.module.css";
import React, { useState } from "react";

import * as LoginFormFieldIDConstants from "../Constants/LoginFormFieldIDConstants";
import * as LoginFormInputNameConstants from "../Constants/LoginFormInputNameConstants";
import * as LoginFormPlaceholderConstants from "../Constants/LoginFormPlaceholderConstants";
import * as LoginPasswordIcons from "../Constants/LoginPasswordIcons";

/**
 * @Component
 * `LoginUI` component provides the UI for Login Section.
 */
const LoginUI = () => {
    const [user, setUser] = useState({
        email: null,
        password: null,
    });

    const navigate = useNavigate();
    const [showEnteredPassword, setShowEnteredPassword] = useState(false);
    const [userLoginErrors, setUserLoginErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);

    const handleShowEnteredPasswordButton = () => {
        setShowEnteredPassword(!showEnteredPassword);
    }

    // Authenticate and Login user to the Contact Manager Applciation
    const loginUser = (user) => {
        if (window.confirm("Are you sure you want to Login?")) {
            AuthenticateUser(navigate, user.email, user.password);
        }
    };

    const handleForm = (e) => {
        e.preventDefault();
        setUserLoginErrors(LoginFormValidation(user));
        setIsSubmit(true);
    }

    // Call the useUserFormActionErrors in-order to skip initial execution of useEffect and login user into the Application.
    useUserFormActionErrors(userLoginErrors, user, isSubmit, loginUser);

    const [sideBarForProfileUI, setSideBarForProfileUI] = useState(false);

    return (
        <div>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
            <CustomNavbar
                currentLocation="/login"
                setSideBarForProfileUI={setSideBarForProfileUI}
                isSideBarShowing={sideBarForProfileUI}
            >
            </CustomNavbar>
            <div className={"d-flex align-items-center justify-content-center " + (sideBarForProfileUI ? LoginCss.ContainerWindowForSideBarOn : LoginCss.ContainerWindowForSideBarOff)}>
                <Container>
                    <Row>
                        <Col md={4}></Col>
                        <Col md={4}>
                            <Form>
                                <Container>
                                    <h2 className={(LoginCss.LoginText) + " mb-4"}>Login</h2>
                                    <Row>
                                        <Col>
                                            { /* User Email */}
                                            <FormGroup>
                                                <Label for={LoginFormFieldIDConstants.LOGIN_EMAIL_FIELD_ID} style={{ color: "#ffffff" }}>Email</Label>
                                                <Input
                                                    style={{ border: "none", boxShadow: "none" }}
                                                    id={LoginFormFieldIDConstants.LOGIN_EMAIL_FIELD_ID}
                                                    name={LoginFormInputNameConstants.LOGIN_EMAIL_INPUT_NAME}
                                                    placeholder={LoginFormPlaceholderConstants.LOGIN_EMAIL_PLACEHOLDER}
                                                    type="email"
                                                    onChange={(e) => {
                                                        setUser({ ...user, email: e.target.value });
                                                    }}
                                                />
                                                <Label style={{ color: 'red', marginTop: 5 }}>{userLoginErrors.email}</Label>
                                            </FormGroup>
                                        </Col>
                                    </Row>

                                    <Row>
                                        <Col>
                                            { /* User Password */}
                                            <FormGroup>
                                                <Label for={LoginFormFieldIDConstants.LOGIN_PASSWORD_FIELD_ID} style={{ color: "#ffffff" }}>Password</Label>
                                                <InputGroup>
                                                    <Input
                                                        style={{ border: "none", boxShadow: "none" }}
                                                        id={LoginFormFieldIDConstants.LOGIN_PASSWORD_FIELD_ID}
                                                        name={LoginFormInputNameConstants.LOGIN_PASSWORD_INPUT_NAME}
                                                        placeholder={LoginFormPlaceholderConstants.LOGIN_PASSWORD_PLACEHOLDER}
                                                        type={showEnteredPassword ? "text" : "password"}
                                                        onChange={(e) => {
                                                            setUser({ ...user, password: e.target.value });
                                                        }}
                                                    />
                                                    <Button style={{ background: "#ffffff", border: "none", boxShadow: "none" }}
                                                        onClick={() => {
                                                            handleShowEnteredPasswordButton();
                                                        }}>
                                                        <i className={
                                                            showEnteredPassword
                                                                ? LoginPasswordIcons.LOGIN_SHOW_PASSWORD_ICON
                                                                : LoginPasswordIcons.LOGIN_HIDE_PASSWORD_ICON}
                                                            style={{ color: "#000000" }}></i>
                                                    </Button>
                                                </InputGroup>
                                                <Label style={{ color: 'red', marginTop: 5 }}>{userLoginErrors.password}</Label>
                                            </FormGroup>
                                        </Col>
                                    </Row>

                                    <Row>
                                        <Col>
                                            { /* Navigate to the SignUp Page */}
                                            <Container className="text-center">
                                                <Label className={LoginCss.LoginText}>Do you want to Sign Up? <Link to="/signup">Signup here</Link>
                                                </Label>
                                            </Container>
                                        </Col>
                                    </Row>

                                    <Row>
                                        <Col>
                                            { /* User Submit */}
                                            <Container className="text-center">
                                                <Button className="btn btn-outline-light m-3" outline onClick={(e) => {
                                                    handleForm(e);
                                                }}>Login</Button>
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

export default LoginUI;
