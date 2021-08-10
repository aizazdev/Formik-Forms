import React from 'react';
import Navbar from './navbar';
import { Card, Container, Row, Col,Button } from 'react-bootstrap';
import {Link} from 'react-router-dom';

const Home = () => {
    return (
        <>
            <Container fluid>
                <Row>
                    <Col md={2}></Col>
                    <Col md={8}>
                        <div>
                            <Card>
                                <Card.Img variant="top" src="./hero.jpg" className="card-img" />
                                <Card.Body>
                                    <Card.Title>React forms With Formil and Yup</Card.Title>
                                    <Card.Text>
                                        Formik is a small group of React components and hooks for building forms in React and React Native. It helps with the three most annoying parts:

                                        Getting values in and out of form state
                                        Validation and error messages
                                        Handling form submission
                                        Have a look to examples of login, signup and subscription form
                                    </Card.Text>
                                </Card.Body>
                                <Card.Footer>
                                    <small className="text-muted">
                                        <Link to="/login">Login</Link><br /> 
                                        <Link to="/signup">Sign Up</Link><br />
                                        <Link to="/subscribe">Subscribe</Link>
                                    </small>
                                </Card.Footer>
                            </Card>
                        </div>

                    </Col>
                    <Col md={2}></Col>
                </Row>
            </Container>
        </>
    )
}

export default Home;