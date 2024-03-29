import { Button, Col, Container, Form, FormGroup, Input, InputGroup, Label, Row } from "reactstrap";
import { SignUpFormValidation } from "../Form Validation/SignUpFormValidation";
import { useNavigate } from "react-router-dom";
import { useUserFormActionErrors } from "../../../Helpers/Hooks/useUserFormActionErrors";

import BasAppCss from "../../../../CSS/BaseApp.module.css";
import CustomNavbar from "../../Navbar/CustomNavbar";
import LoadingSpinner from "../../Loading Spinner/LoadingSpinner";
import React, { useState } from "react";
import SignUpCss from "../CSS/SignUp.module.css";
import SignUpUserDBService from "../Database Services/SignUpUserDBService";

import * as AiIcons from 'react-icons/ai';
import * as SignUpFormFieldIDConstants from "../Constants/SignUpFormFieldIDConstants";
import * as SignUpFormInputNameConstants from "../Constants/SignUpFormInputNameConstants.js";
import * as SignUpFormPlaceholderConstants from "../Constants/SignUpFormPlaceholderConstants";

/**
 * @Component
 * `SignupUI` component provides the UI for Signup Section in Contact Manager Appication.
 */
const SignupUI = () => {

    const [sideBarForProfileUI, setSideBarForProfileUI] = useState(false);
    const [isAPICalled, setIsAPICalled] = useState(false);

    const [user, setUser] = useState({
        name: null,
        email: null,
        password: null,
        about: null,
        imageURL: null,
    });

    const navigate = useNavigate();
    const [confirmPassword, setConfirmPassword] = useState("");
    const [showEnteredPassword, setShowEnteredPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [userSignupErrors, setUserSignupErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);

    const handleShowEnteredPasswordButton = () => {
        setShowEnteredPassword(!showEnteredPassword);
    }

    const handleShowConfirmPasswordButton = () => {
        setShowConfirmPassword(!showConfirmPassword);
    }

    // Add user into the database.
    const addUser = (user) => {
        if (window.confirm("Are you sure you want to continue?")) {
            SignUpUserDBService(navigate, setIsAPICalled, user);
        }
    };

    const handleForm = (e) => {
        e.preventDefault();
        setUserSignupErrors(SignUpFormValidation(user, confirmPassword));
        setIsSubmit(true);
    }

    // Call the useUserFormActionErrors in-order to skip initial execution of useEffect and add user to the database.
    useUserFormActionErrors(userSignupErrors, user, isSubmit, addUser);

    return (
        <div>
            <CustomNavbar
                currentLocation="/signup"
                setSideBarForProfileUI={setSideBarForProfileUI}
                isSideBarShowing={sideBarForProfileUI}
            >
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
                                                <h2 className={(SignUpCss.SignUpText) + " mb-4"}>Sign Up</h2>
                                                <Row>
                                                    <Col md={6}>
                                                        { /* User Name */}
                                                        <FormGroup>
                                                            <Label for={SignUpFormFieldIDConstants.SIGNUP_NAME_FIELD_ID} style={{ color: "#ffffff" }}>Name</Label>
                                                            <Input
                                                                style={{ border: "none", boxShadow: "none" }}
                                                                id={SignUpFormFieldIDConstants.SIGNUP_NAME_FIELD_ID}
                                                                name={SignUpFormInputNameConstants.SIGNUP_NAME_INPUT_NAME}
                                                                placeholder={SignUpFormPlaceholderConstants.SIGNUP_NAME_PLACEHOLDER}
                                                                type="text"
                                                                onChange={(e) => {
                                                                    setUser({ ...user, name: e.target.value });
                                                                }}
                                                            />
                                                            <Label style={{ color: 'red', marginTop: 5 }}>{userSignupErrors.name}</Label>
                                                        </FormGroup>
                                                    </Col>

                                                    <Col md={6}>
                                                        { /* User Email */}
                                                        <FormGroup>
                                                            <Label for={SignUpFormFieldIDConstants.SIGNUP_EMAIL_FIELD_ID} style={{ color: "#ffffff" }}>Email</Label>
                                                            <Input
                                                                style={{ border: "none", boxShadow: "none" }}
                                                                id={SignUpFormFieldIDConstants.SIGNUP_EMAIL_FIELD_ID}
                                                                name={SignUpFormInputNameConstants.SIGNUP_EMAIL_INPUT_NAME}
                                                                placeholder={SignUpFormPlaceholderConstants.SIGNUP_EMAIL_PLACEHOLDER}
                                                                type="email"
                                                                onChange={(e) => {
                                                                    setUser({ ...user, email: e.target.value });
                                                                }}
                                                            />
                                                            <Label style={{ color: 'red', marginTop: 5 }}>{userSignupErrors.email}</Label>
                                                        </FormGroup>
                                                    </Col>
                                                </Row>

                                                <Row>
                                                    <Col md={6}>
                                                        { /* User Password */}
                                                        <FormGroup>
                                                            <Label for={SignUpFormFieldIDConstants.SIGNUP_PASSWORD_FIELD_ID} style={{ color: "#ffffff" }}>Password</Label>
                                                            <InputGroup>
                                                                <Input
                                                                    style={{ border: "none", boxShadow: "none" }}
                                                                    id={SignUpFormFieldIDConstants.SIGNUP_PASSWORD_FIELD_ID}
                                                                    name={SignUpFormInputNameConstants.SIGNUP_PASSWORD_INPUT_NAME}
                                                                    placeholder={SignUpFormPlaceholderConstants.SIGNUP_PASSWORD_PLACEHOLDER}
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
                                                            <Label style={{ color: 'red', marginTop: 5 }}>{userSignupErrors.password}</Label>
                                                        </FormGroup>
                                                    </Col>

                                                    <Col md={6}>
                                                        { /* User Confirm Password */}
                                                        <FormGroup>
                                                            <Label for={SignUpFormFieldIDConstants.SIGNUP_CONFIRM_PASSWORD_FIELD_ID} style={{ color: "#ffffff" }}>Confirm Password</Label>
                                                            <InputGroup>
                                                                <Input
                                                                    style={{ border: "none", boxShadow: "none" }}
                                                                    id={SignUpFormFieldIDConstants.SIGNUP_CONFIRM_PASSWORD_FIELD_ID}
                                                                    name={SignUpFormInputNameConstants.SIGNUP_CONFIRM_PASSWORD_INPUT_NAME}
                                                                    placeholder={SignUpFormPlaceholderConstants.SIGNUP_CONFIRM_PASSWORD_PLACEHOLDER}
                                                                    type={showConfirmPassword ? "text" : "password"}
                                                                    onChange={(e) => {
                                                                        setConfirmPassword(e.target.value);
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
                                                            <Label style={{ color: 'red', marginTop: 5 }}>{userSignupErrors.confirmPassword}</Label>
                                                        </FormGroup>
                                                    </Col>
                                                </Row>

                                                <Row>
                                                    <Col>
                                                        { /* User About */}
                                                        <FormGroup>
                                                            <Label for={SignUpFormFieldIDConstants.SIGNUP_ABOUT_FIELD_ID} style={{ color: "#ffffff" }}>About you</Label>
                                                            <Input
                                                                style={{ border: "none", boxShadow: "none" }}
                                                                id={SignUpFormFieldIDConstants.SIGNUP_ABOUT_FIELD_ID}
                                                                name={SignUpFormInputNameConstants.SIGNUP_ABOUT_INPUT_NAME}
                                                                placeholder={SignUpFormPlaceholderConstants.SIGNUP_ABOUT_PLACEHOLDER}
                                                                type="textarea"
                                                                onChange={(e) => {
                                                                    setUser({ ...user, about: e.target.value });
                                                                }}
                                                            />
                                                            <Label style={{ color: 'red', marginTop: 5 }}>{userSignupErrors.about}</Label>
                                                        </FormGroup>
                                                    </Col>
                                                </Row>

                                                <Row>
                                                    <Col>
                                                        { /* User Profile Image */}
                                                        <FormGroup>
                                                            <Label for={SignUpFormFieldIDConstants.SIGNUP_PROFILE_IMAGE_FIELD_ID} style={{ color: "#ffffff" }}>Upload your Profile Image</Label>
                                                            <Input
                                                                style={{ border: "none", boxShadow: "none" }}
                                                                id={SignUpFormFieldIDConstants.SIGNUP_PROFILE_IMAGE_FIELD_ID}
                                                                type="file"
                                                                onChange={(e) => {
                                                                    setUser({ ...user, imageURL: e.target.value });
                                                                }}
                                                            />
                                                        </FormGroup>
                                                    </Col>
                                                </Row>

                                                <Row>
                                                    <Col>
                                                        { /* User Submit */}
                                                        <Container className="text-center">
                                                            <Button className="btn btn-outline-light" outline onClick={(e) => {
                                                                handleForm(e);
                                                            }}>Sign Up</Button>
                                                            <Button className="btn btn-outline-light m-3" outline type="reset" onClick={() => {
                                                                setUser({
                                                                    ...user,
                                                                    name: null,
                                                                    email: null,
                                                                    password: null,
                                                                    about: null,
                                                                    imageURL: null
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
                }
            </div>
        </div>
    );
}

export default SignupUI;
