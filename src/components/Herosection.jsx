import React from 'react'
import { Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Herosection = () => {
    return (
        <>
            <section className=' min-vh-100 bg-hero d-flex align-items-center'> 
                <Container>
                    <div className=' d-flex flex-column align-items-center'>
                        <h1 className=' text-white fw-bold'>HERO SECTION</h1>
                        <div className=' d-flex gap-5 align-items-center pt-4'>
                            <Link className='link_style fw-bold fs-5 text-white' to="/About">About</Link>
                            <Link className='link_style fw-bold fs-5 text-white' to="/ContactUs">ContactUs</Link>
                        </div>
                    </div>
                </Container>
            </section>
        </>
    )
}

export default Herosection