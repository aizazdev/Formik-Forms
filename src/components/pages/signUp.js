import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Link } from 'react-router-dom';
import { Nav, Form, Button,Row, Col, Container } from 'react-bootstrap';

const SignUp = () => {
    const formik = useFormik({
        initialValues: {
            email: '',
            firstName: '',
            lastName: '',
            password: '',
        },
        validationSchema: Yup.object({
            email: Yup.string().email('Invalid email address').required('Required'),
            password: Yup.string()
                .max(8, 'Must be 7 characters or less')
                .required('Required'),
            firstName: Yup.string()
                .max(10, 'Must be 7 characters or less')
                .required('Required'),
            lastName: Yup.string()
                .max(10, 'Must be 7 characters or less')
                .required('Required'),
        }),
        onSubmit: values => {
            console.log(values);
        },
      });

    return (
        <>
            <Container>
                <Row>
                    <Col md={2}></Col>
                    <Col md={8}>
                        <br />
                        <h1>Sign Up Form Using Formik and Yup</h1><br />
                        <Form onSubmit={formik.handleSubmit}>
                            <Form.Group className="mb-3">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" id="email"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    {...formik.getFieldProps('email')}
                                />
                                {formik.touched.email && formik.errors.email ? (
                                    <div className="error">{formik.errors.email}</div>
                                ) : null}
                                <Form.Text className="text-muted">
                                    We'll never share your email with anyone else.
                                </Form.Text>
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>First Name</Form.Label>
                                <Form.Control type="text" placeholder="Enter Firstname" id="firstName"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    {...formik.getFieldProps('firstName')}
                                />
                                {formik.touched.firstName && formik.errors.firstName ? (
                                    <div className="error">{formik.errors.firstName}</div>
                                ) : null}
                                
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Last Name</Form.Label>
                                <Form.Control type="text" placeholder="Enter lastname" id="lastName"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    {...formik.getFieldProps('lastName')}
                                />
                                {formik.touched.lastName && formik.errors.lastName ? (
                                    <div className="error">{formik.errors.lastName}</div>
                                ) : null}
                                
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Password" id="password"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    {...formik.getFieldProps('password')}
                                />
                                {formik.touched.password && formik.errors.password ? (
                                    <div className="error">{formik.errors.password}</div>
                                ) : null}

                            </Form.Group>
                            <Button variant="primary" type="submit">
                                Submit
                            </Button>
                        </Form>
                    </Col>
                    <Col md={2}></Col>
                </Row>
            </Container>
        </>
    )
}
export default SignUp;