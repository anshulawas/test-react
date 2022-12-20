import { Col, Row } from 'react-bootstrap';
import CardView from './card-list.js/CardView';
import product from '../product.png';
import products from '../products.png';
function Courses() {
    return (
        <div className="courses-section">
            <div class="container py-5 ">

                <div class="row">
                    <div class="col-3">
                        <div className="left-side">
                            <h2 className="w-50"><font className="text-primary">Our</font> Courses</h2>
                            <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.</p>
                            <h3 className="text-primary">See All Courses <span><i class="fa fa-chevron-right" aria-hidden="true"></i></span></h3>
                        </div>
                    </div>
                    <div class="col-9">
                        <div className="right-side">
                            <Row>
                                <Col lg={4}>
                                    <CardView
                                        img={product}
                                        title="Course Name"
                                        desc="Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, "
                                        text="BASIC"

                                    />
                                </Col>
                                <Col lg={4}>
                                    <CardView
                                        img={product}
                                        title="Course Name"
                                        desc="Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, "
                                        text="BASIC"

                                    />
                                </Col>
                                <Col lg={4}>
                                    <CardView

                                        img={products}
                                        title="Course Name"
                                        desc="Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, "
                                        text="BASIC"

                                    />
                                </Col>
                            </Row>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Courses;