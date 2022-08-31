import { AddUserToTheDatabase } from "../Database Service Components/AddUserToTheDatabase";
import { Button, Col, Container, Form, FormGroup, Input, InputGroup, Label, Row } from "reactstrap";
import { HIDE_PASSWORD_ICON, SHOW_PASSWORD_ICON } from "../../Constants/SignUp/SignUpPasswordIcons";
import { SignUpFormValidation } from "../Helpers/Components/SignUpFormValidation";
import {
    SIGNUP_ABOUT_FIELD_ID,
    SIGNUP_CONFIRM_PASSWORD_FIELD_ID,
    SIGNUP_EMAIL_FIELD_ID,
    SIGNUP_NAME_FIELD_ID,
    SIGNUP_PASSWORD_FIELD_ID,
    SIGNUP_PROFILE_IMAGE_FIELD_ID
} from "../../Constants/SignUp/SignUpFormFieldIDConstants";
import {
    SIGNUP_ABOUT_INPUT_NAME,
    SIGNUP_CONFIRM_PASSWORD_INPUT_NAME,
    SIGNUP_EMAIL_INPUT_NAME,
    SIGNUP_NAME_INPUT_NAME,
    SIGNUP_PASSWORD_INPUT_NAME
} from "../../Constants/SignUp/SignUpFormInputNameConstants.js";
import {
    SIGNUP_ABOUT_PLACEHOLDER,
    SIGNUP_CONFIRM_PASSWORD_PLACEHOLDER,
    SIGNUP_EMAIL_PLACEHOLDER,
    SIGNUP_NAME_PLACEHOLDER,
    SIGNUP_PASSWORD_PLACEHOLDER
} from "../../Constants/SignUp/SignUpFormPlaceholderConstants";
import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import BaseAppCss from "../../CSS/BaseApp.module.css";
import CustomNavbar from "../Navbar/CustomNavbar";
import SignUpCss from "../../CSS/SignUp.module.css";
import useUserFormErrors from "../Helpers/Hooks/useUserSignUpFormErrors";

/**
 * @Component
 * `Signup` component provides the UI for Signup Section in Contact Manager Appication.
 */
const Signup = () => {
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
            AddUserToTheDatabase(navigate, user);
        }
    };

    const handleForm = (e) => {
        e.preventDefault();
        setUserSignupErrors(SignUpFormValidation(user, confirmPassword));
        setIsSubmit(true);
    }

    // Call the useUserFormErrors in-order to skip initial execution of useEffect and add user to the database.
    useUserFormErrors(userSignupErrors, user, isSubmit, addUser);

    return (
        <div>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
            <CustomNavbar currentLocation="/signup"></CustomNavbar>
            <div>
                <div className={"d-flex justify-content-center " + (BaseAppCss.ComponentHeight) + " " + (BaseAppCss.ComponentWidth) + " " + (BaseAppCss.BackgroundImage)}>
                    <Container>
                        <Row>
                            <Col md={2}></Col>
                            <Col md={8}>
                                <Form>
                                    <Container className={SignUpCss.SignUp}>
                                        <h2 className={(BaseAppCss.HomeText) + " mb-3"}>Sign Up</h2>
                                        <Row>
                                            <Col md={6}>
                                                { /* User Name */}
                                                <FormGroup>
                                                    <Label for={SIGNUP_NAME_FIELD_ID} style={{ color: "#ffffff" }}>Name</Label>
                                                    <Input
                                                        style={{ border: "none", boxShadow: "none" }}
                                                        id={SIGNUP_NAME_FIELD_ID}
                                                        name={SIGNUP_NAME_INPUT_NAME}
                                                        placeholder={SIGNUP_NAME_PLACEHOLDER}
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
                                                    <Label for={SIGNUP_EMAIL_FIELD_ID} style={{ color: "#ffffff" }}>Email</Label>
                                                    <Input
                                                        style={{ border: "none", boxShadow: "none" }}
                                                        id={SIGNUP_EMAIL_FIELD_ID}
                                                        name={SIGNUP_EMAIL_INPUT_NAME}
                                                        placeholder={SIGNUP_EMAIL_PLACEHOLDER}
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
                                                    <Label for={SIGNUP_PASSWORD_FIELD_ID} style={{ color: "#ffffff" }}>Password</Label>
                                                    <InputGroup>
                                                        <Input
                                                            style={{ border: "none", boxShadow: "none" }}
                                                            id={SIGNUP_PASSWORD_FIELD_ID}
                                                            name={SIGNUP_PASSWORD_INPUT_NAME}
                                                            placeholder={SIGNUP_PASSWORD_PLACEHOLDER}
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
                                                                    ? SHOW_PASSWORD_ICON
                                                                    : HIDE_PASSWORD_ICON}
                                                                style={{ color: "#000000" }}></i>
                                                        </Button>
                                                    </InputGroup>
                                                    <Label style={{ color: 'red', marginTop: 5 }}>{userSignupErrors.password}</Label>
                                                </FormGroup>
                                            </Col>

                                            <Col md={6}>
                                                { /* User Confirm Password */}
                                                <FormGroup>
                                                    <Label for={SIGNUP_CONFIRM_PASSWORD_FIELD_ID} style={{ color: "#ffffff" }}>Confirm Password</Label>
                                                    <InputGroup>
                                                        <Input
                                                            style={{ border: "none", boxShadow: "none" }}
                                                            id={SIGNUP_CONFIRM_PASSWORD_FIELD_ID}
                                                            name={SIGNUP_CONFIRM_PASSWORD_INPUT_NAME}
                                                            placeholder={SIGNUP_CONFIRM_PASSWORD_PLACEHOLDER}
                                                            type={showConfirmPassword ? "text" : "password"}
                                                            onChange={(e) => {
                                                                setConfirmPassword(e.target.value);
                                                            }}
                                                        />
                                                        <Button style={{ background: "#ffffff", border: "none", boxShadow: "none" }}
                                                            onClick={() => {
                                                                handleShowConfirmPasswordButton();
                                                            }}>
                                                            <i className={
                                                                showConfirmPassword
                                                                    ? SHOW_PASSWORD_ICON
                                                                    : HIDE_PASSWORD_ICON}
                                                                style={{ color: "#000000" }}></i>
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
                                                    <Label for={SIGNUP_ABOUT_FIELD_ID} style={{ color: "#ffffff" }}>About you</Label>
                                                    <Input
                                                        style={{ border: "none", boxShadow: "none" }}
                                                        id={SIGNUP_ABOUT_FIELD_ID}
                                                        name={SIGNUP_ABOUT_INPUT_NAME}
                                                        placeholder={SIGNUP_ABOUT_PLACEHOLDER}
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
                                                    <Label for={SIGNUP_PROFILE_IMAGE_FIELD_ID} style={{ color: "#ffffff" }}>Upload your Profile Image</Label>
                                                    <Input
                                                        style={{ border: "none", boxShadow: "none" }}
                                                        id={SIGNUP_PROFILE_IMAGE_FIELD_ID}
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

                                                        user.name = null;
                                                        user.email = null;
                                                        user.password = null;
                                                        user.about = null;
                                                        user.imageURL = null;
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
        </div>
    );
}

export default Signup;
