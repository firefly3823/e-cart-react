import React from 'react'
import { Link } from 'react-router-dom'
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

function Footer() {
    return (
        <div style={{ height: "300px" }} className='bg-light w-100 text-black d-flex flex-column justify-content-center align-items-center'>
            <div className="footer-content h-100 align-items-center w-100 d-flex flex-row justify-content-evenly">
                <div className="about" style={{ width: "350px" }}>
                    <Link to={'/'} className='fs-4' style={{ textDecoration: "none", color: "black",fontWeight:"bold" }}>
                        <i class="fa-brands fa-shopify fa-2xl" style={{ paddingRight: "10px" }}></i>
                        SHOPIFY
                    </Link>
                </div>
                <div className="Links d-flex flex-column">
                    <h3 className='text-black'>Links</h3>
                    <Link to={'/'} style={{ textDecoration: "none", color: "black" }}>Home</Link>
                    <Link to={'/'} style={{ textDecoration: "none", color: "black" }}>Cart</Link>
                    <Link to={'/'} style={{ textDecoration: "none", color: "black" }}>Wish List</Link>
                </div>
                <div className="Guides d-flex flex-column">
                    <h3 className='text-black'>GUIDES</h3>
                    <Link to={'/'} style={{ textDecoration: "none", color: "black" }}>Services</Link>
                    <Link to={'/'} style={{ textDecoration: "none", color: "black" }}>Forum</Link>
                    <Link to={'/'} style={{ textDecoration: "none", color: "black" }}>Support</Link>
                </div>
                <div className="Contact">
                    <h3 className='text-black'>CONTACT US</h3>
                    <InputGroup size="sm" className="mb-3 w-100">
                        <Form.Control aria-label="Small" aria-describedby="inputGroup-sizing-sm" />
                        <button type="button" style={{backgroundColor:"black"}} class="btn btn-primary">SUBSCRIBE</button>
                    </InputGroup>
                    <div className='d-flex w-100 justify-content-evenly'>
                        <div><Link to={'/'} style={{ textDecoration: "none", color: "black" }}><i className="fa-brands fa-twitter fa-xl"></i></Link></div>
                        <div><Link to={'https://whatsapp.com'} style={{ textDecoration: "none", color: "black" }}><i className="fa-brands fa-whatsapp fa-xl"></i></Link></div>
                        <div><Link to={'https://facebook.com'} style={{ textDecoration: "none", color: "black" }}><i className="fa-brands fa-facebook fa-xl"></i></Link></div>
                    </div>
                </div>
            </div>
            <p>Copyright © 2023 Shopify.</p>
        </div>
    )
}

export default Footer