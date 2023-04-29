import React, { useContext } from 'react';
import logo from '../../../../assets/logo.png';
import moment from 'moment';
import { Button, Container } from 'react-bootstrap';
import Marquee from "react-fast-marquee";

const Header = () => {

    return (
        <Container className='mt-4'>
            <div className='text-center'>
                <img src={logo} alt="" />
                <p className='text-secondary'>Journalism Without Fear or Favour</p>
                <h5>{moment().format("dddd, MMMM D,  YYYY")}</h5>
            </div>
            <div className='d-flex'>
                <Button variant="danger">Latest</Button>
                <Marquee>
                    বঙ্গভবনের নতুন বাসিন্দা রাজনৈতিক বিরোধের মধ্যে রাষ্ট্রপতির দায়িত্ব নিলেন মো. সাহাবুদ্দিন |
                </Marquee>
            </div>
        </Container>
    );
};

export default Header;