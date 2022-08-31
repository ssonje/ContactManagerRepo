import { AddUserToTheDatabase } from "../Database Service Components/AddUserToTheDatabase";
import { Container, Row, Col, FormGroup, Label, Input, Form, Button } from "reactstrap";
import { HIDE_PASSWORD_ICON, SHOW_PASSWORD_ICON } from "../../Constants/SignUp/SignUpPasswordIcons";
import { SignUpFormValidation } from "../Helpers/Components/SignUpFormValidation";
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

    const [showEnteredPassword, setShowEnteredPassword] = useState(false);

    const handleShowEnteredPasswordButton = () => {
        setShowEnteredPassword(!showEnteredPassword);
    }

    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [confirmPassword, setConfirmPassword] = useState("");

    const handleShowConfirmPasswordButton = () => {
        setShowConfirmPassword(!showConfirmPassword);
    }

    const [userSignupErrors, setUserSignupErrors] = useState({});
    const navigate = useNavigate();

    // Add user into the database.
    const addUser = (user) => {
        if (window.confirm("Are you sure you want to continue?")) {
            AddUserToTheDatabase(navigate, user);
        }
    };

    const [isSubmit, setIsSubmit] = useState(false);

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
                                                    <Label for="userName" style={{ color: "#ffffff" }}>Name</Label>
                                                    <Input
                                                        id="userName"
                                                        name="name"
                                                        placeholder="Enter your name here"
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
                                                    <Label for="userEmail" style={{ color: "#ffffff" }}>Email</Label>
                                                    <Input
                                                        id="userEmail"
                                                        name="email"
                                                        placeholder="Enter your email here"
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
                                                    <Label for="userPassword" style={{ color: "#ffffff" }}>Password</Label>
                                                    <Row>
                                                        <Col md={10}>
                                                            <Input
                                                                id="password"
                                                                name="password"
                                                                placeholder="Enter your password here"
                                                                type={showEnteredPassword ? "text" : "password"}
                                                                onChange={(e) => {
                                                                    setUser({ ...user, password: e.target.value });
                                                                }}
                                                            />
                                                        </Col>
                                                        <Col md={2}>
                                                            <Button style={{ background: "#ffffff" }}
                                                                onClick={() => {
                                                                    handleShowEnteredPasswordButton();
                                                                }}>
                                                                <i className={
                                                                    showEnteredPassword
                                                                        ? SHOW_PASSWORD_ICON
                                                                        : HIDE_PASSWORD_ICON}
                                                                    style={{ color: "#000000" }}></i>
                                                            </Button>
                                                        </Col>
                                                    </Row>
                                                    <Label style={{ color: 'red', marginTop: 5 }}>{userSignupErrors.password}</Label>
                                                </FormGroup>
                                            </Col>

                                            <Col md={6}>
                                                { /* User Confirm Password */}
                                                <FormGroup>
                                                    <Label for="userConfirmPassword" style={{ color: "#ffffff" }}>Confirm Password</Label>
                                                    <Row>
                                                        <Col md={10}>
                                                            <Input
                                                                id="userConfirmPassword"
                                                                name="confirmPassword"
                                                                placeholder="Confirm your password here"
                                                                type={showConfirmPassword ? "text" : "password"}
                                                                onChange={(e) => {
                                                                    setConfirmPassword(e.target.value);
                                                                }}
                                                            />
                                                        </Col>
                                                        <Col md={2}>
                                                            <Button style={{ background: "#ffffff" }}
                                                                onClick={() => {
                                                                    handleShowConfirmPasswordButton();
                                                                }}>
                                                                <i className={
                                                                    showConfirmPassword
                                                                        ? SHOW_PASSWORD_ICON
                                                                        : HIDE_PASSWORD_ICON}
                                                                    style={{ color: "#000000" }}></i>
                                                            </Button>
                                                        </Col>
                                                    </Row>
                                                    <Label style={{ color: 'red', marginTop: 5 }}>{userSignupErrors.confirmPassword}</Label>
                                                </FormGroup>
                                            </Col>
                                        </Row>

                                        <Row>
                                            <Col>
                                                { /* User About */}
                                                <FormGroup>
                                                    <Label for="userAbout" style={{ color: "#ffffff" }}>About you</Label>
                                                    <Input
                                                        id="userAbout"
                                                        name="about"
                                                        placeholder="Please introduce yourself"
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
                                                    <Label for="userImage" style={{ color: "#ffffff" }}>Upload your Profile Image</Label>
                                                    <Input
                                                        id="userImage"
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
