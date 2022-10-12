import { Form, Row, Col, Button } from "react-bootstrap"
import '../styles/messageForm.css'

const MessageForm = () => {

    
    function handleSubmit(e){
        e.preventDefault()
        console.log('Salut!!')
    }


    return(
        <>
            <div className="message-output"></div>
                <Form onSubmit={handleSubmit}>
                <Row>
                    <Col md={11}>
                        <Form.Group>
                            <Form.Control type="text" placeholder="Your message"></Form.Control>
                        </Form.Group>
                    </Col>
                    <Col md={1}>
                        <Button variant="primary" type="submit" style={{width: "55px", backgroundColor:"orange", height:"35px"}}>
                                Send
                        </Button>
                    </Col>
                </Row>
            </Form>
        </>
    )
}

export default MessageForm