import React from 'react'
import { Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const ContactUs = () => {
    return (
        <>
            <section className=' min-vh-100 bg-contact d-flex align-items-center'>
                <Container>
                    <div className=' d-flex flex-column align-items-center'>
                        <h1 className=' text-white fw-bold'>This is ContactUs</h1>
                        <div className=' d-flex align-items-center gap-5 pt-4'>
                            <Link className='link_style fs-5 text-white fw-bold' to="/">Homepage</Link>
                            <Link className='link_style fs-5 text-white fw-bold' to="/About">About</Link>
                        </div>
                    </div>
                </Container>
            </section>
        </>
    )
}

export default ContactUs