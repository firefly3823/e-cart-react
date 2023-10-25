import React, { useEffect, useState } from 'react'
import { Table, Container, Col, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { emptyCart, removeFromCart } from '../redux/slices/cartSlice'
import { useNavigate } from 'react-router-dom'


function Cart() {
    const navigate = useNavigate()
    const cartItems = useSelector((state) => state.cartReducer)
    const [total, setTotal] = useState(0)
    const dispatch = useDispatch()
    const getCartTotal = ()=>{
        if(cartItems.length>0){
            // setTotal(cartItems.map(item=>item.price).reduce((p,p1)=>p1+1))
            setTotal(cartItems.map(item => item.price).reduce((price, price1) => price + price1))
        }
    }
    const handleCart = ()=>{
        dispatch(emptyCart())
        alert("Order successfully placed ... thankyou for purchacing with us")
        navigate('/')
    }
    useEffect(()=>{
        getCartTotal()
    },[cartItems])
    return (
        <Container className='container-fluid'>
            <Row>
                
                <Col xs={10}>
                    <Table striped bordered hover className='mt-5 table-hover'>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Image</th>
                                <th>Name</th>
                                <th>escription</th>
                                <th>Price</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        {
                            cartItems?.length > 0 ? cartItems.map((items, index) => (
                                <tr className='text-center' key={index}>
                                    <td>{index + 1}</td>
                                    <td className='p-2'><img width={'150px'} height={'150px'} className='p-1 rounded' src={items.thumbnail} alt="" /></td>
                                    <td>{items.title}  </td>
                                    <td>{items.description.slice(1, 60)}</td>
                                    <td>${items.price}</td>
                                    <td><button onClick={()=> dispatch(removeFromCart(items.id))} className="btn"><i className='fa-solid fa-trash text-danger'></i></button></td>
                                </tr>
                            )) : <tr className='text-center'>
                                <td colSpan={6}> NO PRODUCT FOUND</td>
                            </tr>
                        }
                    </Table>
                </Col>
                <Col> 
                    <div className="card text-white bg-primary mt-5 mb-3" style={{maxWidth:"20rem"}}>
                        <div className="card-header">Order Summary</div>
                        <div className="card-body">
                            <h4 className="card-title">Price : {total}</h4>
                            <h6> No. Items : {cartItems.length}</h6>
                            <p className="card-text"><button onClick={handleCart} className="btn btn-outline-light">Checkout</button></p>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>

    )
}

export default Cart