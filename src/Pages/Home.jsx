import React from 'react'
import { Row, Col, Card } from 'react-bootstrap'
import useFetch from '../hooks/useFetch'
import { addToWishlist } from '../redux/slices/wishlistSlice';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/slices/cartSlice';

function Home() {
    const data = useFetch("https://dummyjson.com/products")
    // console.log(data);
    const dispatch = useDispatch()

    return (
        <Row className='ms-3 me-3'>
            {
                data?.length > 0 ? data?.map((product, index) => (
                    <Col key={index} className='mt-5 mb-3' sm={12} md={6} lg={4} xl={2}>
                        <Card style={{ width: '100%',height:"20rem" }} className='position-relative'>
                            <Card.Img height={"180px"} className='image-fluid p-1 rounded-3' variant="top" src={product?.thumbnail} />
                            <Card.Body className='position-absolute bottom-0 p-1'>
                                <h6 >{product?.title}</h6>
                                <p style={{fontSize:"11px"}}>{product?.description.slice(0,10)}</p>
                                <Card.Text className='d-flex justify-content-between '>
                                    <button className='btn' onClick={()=>dispatch(addToCart(product))}><i class="fa-solid  fa-cart-arrow-down fa-xl"></i></button>
                                    <button className='btn' onClick={()=>dispatch(addToWishlist(product))}><i className="fa-solid text-primary fa-heart-circle-plus fa-xl"></i></button>
                                </Card.Text>
                            </Card.Body>

                        </Card>
                    </Col>
                )) : <div></div>
            }
        </Row>
    )
}

export default Home