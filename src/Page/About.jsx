import React from 'react'
import { Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const About = () => {
    return (
        <>
            <section className=' min-vh-100 bg-about d-flex align-items-center'>
                <Container>
                   <div className=' d-flex flex-column align-items-center'>
                   <h1 className=' text-white fw-bold'>THIS IS ABOUT</h1>
                <div className=' d-flex align-items-center gap-5 pt-4'>
                <Link className='link_style text-white fs-5 fw-bold' to="/">Homepage</Link>
                <Link className='link_style text-white fs-5 fw-bold' to="/ContactUs">ContactUs</Link>
                </div>
                   </div>
                </Container>
            </section>
        </>
    )
}

export default About