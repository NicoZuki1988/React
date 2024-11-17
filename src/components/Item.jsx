import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import {Link } from  'react-router-dom'



const Item = ({item}) => {
    return (
        <Col>
            <Card>
                <Card.Img variant='top' src={item.thumbnail} />
                <Card.Body>
                    <Card.Title>{item.title}</Card.Title>
                    <Card.Text>{item.description}</Card.Text>
                    <Button as={Link} to=  {`/item/${item.id}`}>ver más</Button>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default Item;