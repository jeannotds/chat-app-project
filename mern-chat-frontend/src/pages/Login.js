import { Container } from "react-bootstrap"
import { Button,  Row, Form, Col } from "react-bootstrap"
import { Link } from "react-router-dom";
import '../styles/login.css'

const Login = () => {
    return(
            <Container> 
                <Row>
                    <Col md={5} className="login__bg"></Col>
                    <Col md={7} className="d-flex align-items-center justify-content-center flex-direction-column">
                        <Form>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" />
                                <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                                </Form.Text>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Password" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                <Form.Check type="checkbox" label="Check me out" />
                            </Form.Group>
                            <Button variant="primary" type="submit">
                                Login
                            </Button>
                            <div className="py-4">
                                <p className="text-center">
                                    Don't you have a count ? <Link to="/signup">Signup</Link>
                                </p>
                            </div>
                        </Form>
                    </Col>
                    
                </Row>
            </Container>
    );
}

export default Login