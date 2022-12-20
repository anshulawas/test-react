import { Card, Button } from 'react-bootstrap';
function CardView(props) {
    return (

        <Card className='border-0'>
            <Card.Img src={props.img} />
            <Card.Body>
                <Card.Title className='text-primary'>{props.title}</Card.Title>
                <Card.Text>
                    {props.desc}
                </Card.Text>
                <Button variant="primary" className='text-white px-4'>{props.text}</Button>
            </Card.Body>
        </Card>

    );
};

export default CardView;