import React from 'react';
import './RightNav.css';
import { Button, ListGroup } from 'react-bootstrap';
import { FaGoogle, FaGithub, FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import QZone from '../QZone/QZone';
import bg from '../../../assets/bg.png'

const RightNav = () => {
    return (
        <div>
            <h2 className='mt-3'>Login With</h2>
            <Button variant="outline-primary" className='mb-lg-2 me-sm-2 me-md-2'><FaGoogle /> Login with Google</Button>
            <Button variant="outline-secondary"><FaGithub /> Login With Github</Button>

            <div>
                <h4 className='py-4'>Find Us On</h4>
                <ListGroup>
                    <ListGroup.Item className='mb-3'><FaFacebook></FaFacebook> Facebook</ListGroup.Item>
                    <ListGroup.Item className='mb-3'><FaTwitter></FaTwitter> Twitter</ListGroup.Item>
                    <ListGroup.Item className='mb-3'><FaInstagram></FaInstagram> Instagram</ListGroup.Item>
                </ListGroup>
            </div>

            <QZone></QZone>

            <div className='bg-img'>
                <img className='w-100' src={bg} alt="" />
                <div className='text-center bg-img-info'>
                    <h3>Create an Amazing Newspaper</h3>
                    <p className='text-light my-4'>Discover thousands of options, easy to customize layouts, one-click to import demo and much more.</p>
                    <Button variant="danger">Learn More</Button>
                </div>
            </div>
        </div>
    );
};

export default RightNav;