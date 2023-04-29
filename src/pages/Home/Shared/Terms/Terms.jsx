import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Terms = () => {
    return (
        <Container className='text-center mt-5'>
            <div>
                <h2>Terms And Conditions</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt cumque repellendus autem facilis quasi ipsam illo mollitia rem corporis, alias vero omnis minus ad? Eveniet quos quia nulla, ullam impedit deleniti dolorum quaerat, soluta quo dolorem cumque veniam nam fugiat quas dicta delectus ipsum perferendis laboriosam quae asperiores eos sapiente. <br /> <Link to="/register">Back To Register</Link> </p>
            </div>
        </Container>
    );
};

export default Terms;