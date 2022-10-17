import { Col, Container, Form, FormGroup, Input, Row } from "reactstrap";

import React from "react";

import * as SearchContactFormFieldIDConstants from "../Constants/SearchContactFormFieldIDConstants";
import * as SearchContactFormInputNameConstants from "../Constants/SearchContactFormInputNameConstants";
import * as SearchContactFormPlaceholderConstants from "../Constants/SearchContactFormPlaceholderConstants";

/**
 * @Component
 * `SearchContactUI` component provides the UI for Searching Contact from the search contact list.
 */
const SearchContactUI = (props) => {

    return (
        <Container>
            <Row>
                <Col>
                    <Form>
                        <FormGroup>
                            <Input
                                style={{ border: "none", boxShadow: "none" }}
                                id={SearchContactFormFieldIDConstants.SEARCH_CONTACT_FIELD_ID}
                                name={SearchContactFormInputNameConstants.SEARCH_CONTACT_INPUT_NAME}
                                placeholder={SearchContactFormPlaceholderConstants.SEARCH_CONTACT_PLACEHOLDER}
                                type="text"
                                onChange={(e) => {
                                    props.setSearchContactQuery(e.target.value);
                                }}
                            />
                        </FormGroup>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
}

export default SearchContactUI;
