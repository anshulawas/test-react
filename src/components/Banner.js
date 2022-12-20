import { Image, Form, Button } from 'react-bootstrap';
import left from '../left.png';
function Banner() {
    return (
        <div className='banner-section'>
            <div className="container">
                <div class="row">
                    <div className="col">
                        <div className='text-center'>
                            <Image src={left} />
                        </div>
                    </div>
                    <div className="col">
                        <div className='right-side'>
                            <h2 className='w-50'>Making Qulity AR- VR Learning <font>Easy, Affordable</font> <span className="text-primary">& Accessible</span></h2>
                            <div className='form-data my-5'>
                                <div className='top-form-heading shadow bg-white p-2'>
                                    <h3 ><font className="text-primary"><span className='px-2'><i class="fa fa-book" aria-hidden="true"></i></span>Explore Our </font>Courses</h3>
                                    <Form className='py-3'>
                                        <Form.Group className="mb-3" controlId="formBasicEmail">

                                            <Form.Control className='mx-auto' type="name" placeholder="Enter name" />

                                        </Form.Group>
                                        <Form.Group className="mb-3" controlId="formBasicEmail">

                                            <Form.Control className='mx-auto' type="email" placeholder="Enter email" />

                                        </Form.Group>
                                        <Form.Group className="mb-3" controlId="formBasicEmail">

                                            <Form.Control className='mx-auto' type="number" placeholder="Enter number" />

                                        </Form.Group>
                                        <Form.Group className="mb-3" controlId="formBasicEmail">

                                            <Button className='btn-form bg-dark text-white w-100'>Get In</Button>

                                        </Form.Group>
                                    </Form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Banner;