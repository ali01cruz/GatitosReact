import { Container } from "react-bootstrap"
import {Row} from "react-bootstrap"
import {Col} from "react-bootstrap"
import { Card } from "react-bootstrap"
import { ListGroup } from "react-bootstrap"
import { ListGroupItem } from "react-bootstrap"
import 'bootstrap/dist/css/bootstrap.min.css'
import ali from '../../img/alicruz.png';
import sil from '../../img/silvanafuentes.png';

export default function About(){
    const mystyleCard={
        marginLeft: "24px",
        width: '18rem',
    };
    const mystyleisil = {
        maxWidth: '16.4rem',
        marginLeft: "13px"
    };
    const mystyle = {
        
      };
    return (    
        <div class="container">
            <p className="my-2">
                <span>
                @Echo por Cruz Ali Emanuel  y Silvana Fuentes
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
                                    soy alguien que le gusta el arte, 
                                    la programacion lo veo como un Arte
                                </Card.Text>
                            </Card.Body>
                            <ListGroup className="list-group-flush">
                                <ListGroupItem>soy Uriundo de Abra Pampa</ListGroupItem>
                                <ListGroupItem>Estudiante UNJU</ListGroupItem>
                            </ListGroup>
    
                        </Card>
                    </Col>
                    
                    <Col className="d-flex aling-center justify-content-center">
                        <Card style={mystyleCard}>
                            <Card.Img style={mystyleisil} variant="top" src={sil} />
                            <Card.Body>
                                
                                <Card.Title>Silvana Fuentes</Card.Title>
                                <Card.Text>
                                    Me encanta todo la parte de Frontend
                                        y todo lo relacionado con testing .
                                </Card.Text>
                            </Card.Body>
                            <ListGroup className="list-group-flush">
                                <ListGroupItem>San Salvador de Jujuy </ListGroupItem>
                                <ListGroupItem> Egresada de la UNJU </ListGroupItem>
                            </ListGroup>
                 
                        </Card>
                    </Col>
                </Row>

            </Container>

            
        </div>



)

}



