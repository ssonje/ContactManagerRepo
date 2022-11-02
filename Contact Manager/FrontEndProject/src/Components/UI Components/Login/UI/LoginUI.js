import { AuthenticateUser } from "../Database Services/AuthenticateUser";
import { Button, Col, Container, Form, FormGroup, Input, InputGroup, Label, Row } from "reactstrap";
import { Link } from "react-router-dom";
import { LoginFormValidation } from "../Form Validation/LoginFormValidation";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useUserFormActionErrors } from "../../../Helpers/Hooks/useUserFormActionErrors";

import BasAppCss from "../../../../CSS/BaseApp.module.css";
import CustomNavbar from "../../Navbar/CustomNavbar";
import LoginCss from "../CSS/Login.module.css";
import React from "react";

import * as AiIcons from 'react-icons/ai';
import * as LoginFormFieldIDConstants from "../Constants/LoginFormFieldIDConstants";
import * as LoginFormInputNameConstants from "../Constants/LoginFormInputNameConstants";
import * as LoginFormPlaceholderConstants from "../Constants/LoginFormPlaceholderConstants";

/**
 * @Component
 * `LoginUI` component provides the UI for Login Section.
 */
const LoginUI = () => {

    const [sideBarForProfileUI, setSideBarForProfileUI] = useState(false);

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

    return (
        <div>
            <CustomNavbar
                currentLocation="/login"
                setSideBarForProfileUI={setSideBarForProfileUI}
                isSideBarShowing={sideBarForProfileUI}
            >
            </CustomNavbar>
            <div className={"d-flex align-items-center justify-content-center " + (sideBarForProfileUI ? BasAppCss.ContainerWindowForSideBarOn : BasAppCss.ContainerWindowForSideBarOff)}>
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
                                                        <i style={{ color: "#000000" }}>
                                                            {
                                                                showEnteredPassword
                                                                    ? <AiIcons.AiOutlineEye />
                                                                    : <AiIcons.AiOutlineEyeInvisible />
                                                            }
                                                        </i>
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
                                            { /* Navigate to the Forgot Password Page */}
                                            <Container className="text-center">
                                                <Label>
                                                    <Link to="/forgot/password/email">Forgot Password</Link>
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
