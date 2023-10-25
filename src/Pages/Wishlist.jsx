import React from 'react'
import { Card, Col, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux'
import empty from './empty.png'
import { removeFromWishlist } from '../redux/slices/wishlistSlice';
import { Link } from 'react-router-dom';
import { addToCart } from '../redux/slices/cartSlice';

function Wishlist() {
    const wishlistItems = useSelector((state)=>state.wishlistReducer)
    const dispatch = useDispatch()
    // console.log(wishlistItems);
    const handleWishlist = (product)=>{
        dispatch(addToCart(product))
        dispatch(removeFromWishlist(product.id))
    }
    return (
        <Row className='ms-3 me-3'>
            {
                wishlistItems?.length > 0 ? wishlistItems?.map((product, index) => (
                    <Col key={index} className='mt-5 mb-2' sm={12} md={6} lg={4} xl={2}>
                        <Card style={{ width: '100%', height: "20rem" }} className='position-relative'>
                            <Card.Img height={"200px"} className='image-fluid p-1 rounded-3' variant="top" src={product?.thumbnail} />
                            <Card.Body className='position-absolute bottom-0 p-1'>
                                <h6 >{product?.title}</h6>
                                <p style={{ fontSize: "11px" }}>{product?.description.slice(0, 10)}</p>
                                <Card.Text className='d-flex justify-content-between '>
                                    <button className='btn' onClick={() => dispatch(removeFromWishlist(product.id))}><i class="fa-solid  fa-trash fa-xl"></i></button>
                                    <button onClick={()=>handleWishlist(product)} className='btn'><i class="fa-solid text-primary fa-cart-arrow-down fa-xl"></i></button>
                                </Card.Text>
                            </Card.Body>

                        </Card>
                    </Col>
                )) : <div className='w-100 d-flex flex-column align align-items-center'>
                        <div className='w-50'><img src={empty} className='image-fluid w-100' alt=''/></div>
                        <Link className='btn btn-lg btn-primary mb-3' to='/'>BACK TO HOME</Link>
                </div>
            }
        </Row>
    )
}

export default Wishlist