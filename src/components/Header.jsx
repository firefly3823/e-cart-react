import React from 'react'
import { Nav, Badge,Container, Navbar } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

function Header() {
    const wishlist = useSelector((state) => state.wishlistReducer)
    const cart = useSelector((state) => state.cartReducer)
    // console.log(wishlist.length);
    return (
        <>
            <Navbar expand="lg" className="navbar position-fixed w-100 z-1 bg-light" data-bs-theme="light">
                <Container>
                    <Navbar.Brand><Link style={{ textDecoration: "none", color: "black", fontWeight: "bold" }} to={'/'} className="navbar-brand"><i className="fa-brands fa-shopify fa-2xl" style={{ paddingRight: "10px" }}></i>SHOPIFY</Link></Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Nav.Link className='btn border rounded ms-3 d-flex align-items-center p-1'>
                            <Link className='d-flex align-items-center' style={{ textDecoration: "none", color: "black", fontWeight: "bold" }} to={'/wishlist'}><i className='fa-regular fa-heart me-2'></i>Wish List</Link>
                            <Badge className="ms-2 rounded">{wishlist.length}</Badge>
                        </Nav.Link>
                        <Nav.Link className='btn border rounded ms-3 d-flex align-items-center p-1'>
                            <Link className='d-flex align-items-center' style={{ textDecoration: "none", color: "black", fontWeight: "bold" }} to={'/cart'}><i className='fa-solid fa-cart-shopping me-2'></i>Cart</Link>
                            <Badge className="ms-2 rounded">{cart.length}</Badge>
                        </Nav.Link>
                    </Navbar.Collapse>
                    
                </Container>
            </Navbar>
        </>
    )
}

export default Header