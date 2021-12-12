import { Container } from '@mui/material';
import React from 'react';

const Intro = () => {
    return (
        <Container maxWidth="lg">
         <div className="icons flex justify-center">
         <i class="fas fa-code"></i>
          <i class="fas fa-heart"></i>
          <i class="far fa-star"></i>
         </div>
         <div className="intro">
             <h1 className="intro-heading">Better Landing for Your Startup</h1>
             <p className="intro-para">We have created a new product that will help designers, developers and companies create websites <br /> for their startups quickly and easily.</p>
         </div>
        </Container>
    );
};

export default Intro;