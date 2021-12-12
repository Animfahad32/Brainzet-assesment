import { Container } from '@mui/material';
import React from 'react';

const CTA = () => {
    return (
       <Container maxWidth="lg" style={{marginTop:"100px", marginBottom:"100px",}}>
           <div className="cta-bg">
               <div className="cta-contents">
               <h2>Get the new technology for <br /> later and read it at any time</h2>
               <input type="email" placeholder="Email"/>
               <button>Subscribe</button>
               </div>
           </div>
       </Container>
    );
};

export default CTA;