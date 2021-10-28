import { Container } from "react-bootstrap"
import {Row} from "react-bootstrap"
import {Col} from "react-bootstrap"
import { Card } from "react-bootstrap"
import { ListGroup } from "react-bootstrap"
import { ListGroupItem } from "react-bootstrap"
import 'bootstrap/dist/css/bootstrap.min.css'
import ali from '../../img/alicruz.png';
import go from '../../img/go.gif';
import sil from '../../img/silvanafuentes.png';

export default function About(){
    const mystyleCard={
        marginLeft: "24px",
        width: '18rem',
        borderRadius: '30px',
        border: '10px solid rgb(107 12 144 / 40%)',
        paddingLeft:'10%',
        paddingRight:'10%',
    };
    const mystyleisil = {
        maxWidth: '16.4rem',
        marginLeft: "13px"
    };
    const mystyle = {
        
      };
    return (    
        <div class="container mt-2">
            <p className="my-2">
                <span>
                @Made by Cruz Ali Emanuel  y Silvana Fuentes
                </span>
            </p>

            <Container className="d-flex justify-content-center">
                <Row >
                    <Col className="d-flex aling-center justify-content-center">
                        <Card style={mystyleCard}  >
                            <Card.Img variant="top" src={ali} />
                            <Card.Body>
                                
                                <Card.Title style={mystyle}>Cruz Ali Emanuel</Card.Title>
                                <Card.Text>
                                    I am someone who likes art,
                                    I see the programming as an Art
                                </Card.Text>
                            </Card.Body>
                            <ListGroup className="list-group-flush">
                                <ListGroupItem>Abra Pampa</ListGroupItem>
                                <ListGroupItem>UNJU Student</ListGroupItem>
                            </ListGroup>
    
                        </Card>
                    </Col>
                    
                    <Col className="d-flex aling-center justify-content-center">
                        <Card style={mystyleCard}>
                            <Card.Img style={mystyleisil} variant="top" src={sil} />
                            <Card.Body>
                                
                                <Card.Title>Silvana Fuentes</Card.Title>
                                <Card.Text>
                                        I love the whole Frontend part
                                        and everything related to testing.
                                </Card.Text>
                            </Card.Body>
                            <ListGroup className="list-group-flush">
                                <ListGroupItem>San Salvador de Jujuy </ListGroupItem>
                                <ListGroupItem> Graduated from UNJU </ListGroupItem>
                            </ListGroup>
                 
                        </Card>
                    </Col>
                </Row>

            </Container>

            <img src={go} />

            
        </div>



)

}



