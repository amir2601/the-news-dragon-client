import React from 'react';
import { Button, ListGroup } from 'react-bootstrap';
import { FaGoogle, FaGithub, FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';
import QZone from '../QZone/QZone';
import bg1 from '../../../../assets/bg1.png'

const RightNav = () => {
    return (
        <div>
            <h2 className='mt-4'>Login With</h2>
            <Button className='mb-2' variant="outline-primary"> <FaGoogle /> Login With Google</Button>
            <Button className='mb-2' variant="outline-secondary"> <FaGithub /> Login With Github</Button>
            <div>
                <h3 className='mt-4'>Find Us On</h3>
                <ListGroup>
                    <ListGroup.Item><FaFacebookF /> Facebook</ListGroup.Item>
                    <ListGroup.Item><FaInstagram /> Instagram</ListGroup.Item>
                    <ListGroup.Item><FaTwitter /> Twitter</ListGroup.Item>
                </ListGroup>
            </div>
            <QZone></QZone>
            <div className='position-relative'>
                <img className='w-100' src={bg1} alt="" />
                <div className='text-center position-absolute top-0 text-white p-5 my-5'>
                    <h1>Create an Amazing Newspaper</h1>
                    <p>
                        Discover thousands of options, easy to customize layouts, one-click to import demo and much more.
                    </p>
                    <Button variant="danger">Learn More</Button>
                </div>
            </div>
        </div>
    );
};

export default RightNav;