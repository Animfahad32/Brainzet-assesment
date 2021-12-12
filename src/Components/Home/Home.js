import React from 'react';
import Categories from '../Categories/Categories';
import CTA from '../CTA/CTA';
import Intro from '../Intro/Intro';
import Nav from '../Nav/Nav';
import Posts from '../Posts/Posts';
import Productive from '../Productive/Productive';

const Home = () => {
    return (
        <>
         <Nav></Nav>   
         <Intro></Intro>
         <Categories></Categories>
         <Productive></Productive>
         <Posts></Posts>
         <CTA></CTA>
        </>
    );
};

export default Home;