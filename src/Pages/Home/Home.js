import React from 'react';
import '../Home/Home.css';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Nav1 from '../../Components/Nav1/Nav1';
import Nav2 from '../../Components/Nav2/Nav2';
import clientimg from '../../images/clientIcons.png';
import land from '../../images/landing-3.jpg'
import SideNav from '../../Components/SideNav/SideNav';
import Slide from '../../Components/Slide/Slide';
import Categories from '../../Components/Categories/Categories';
import cart from '../../images/cart.svg'
import aboutImg from '../../images/about.jpg'

import styled from 'styled-components';
// import Footer from '../../../node_modules/rc-footer/lib/index.d.ts';

const CartDiv = styled.div`
    position: absolute;
    width: 50px;
    height: 50px;
    background: white;
    display: flex;
    border-radius: 100%;
    justify-content: center;
    align-items: center;
    z-index: 200;
    border: 2px solid #707070;
    img{
        width: 30px;
        color: #707070
    }
    top: -70px;
    right: 20px;
    @media (max-width: 912px){
        top: 20px;
        right: 20px;
    }
    @media (max-width: 768px){
        top: 20px;
        right: 20px;
    }
`
const OrderNumberDiv = styled.div`
    background-color: #fff;
    width: 25px;
    height: 25px;
    border-radius: 100%;
    border: 2px solid #707070;
    display: flex;
    align-items: center;
    justify-content: center;
    padding
    color: #707070;
    position: absolute;
    top: -15px;
    left: 25px;
    p{
        color: #707070;
        font-family: Poppins, Roboto;
    }
`
const AboutContent = styled.div`
    color: #707070;
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;
    justify-content: flex-start;
    width: 80%;
    margin: 0 auto;
    @media(max-width: 728px){
        flex-direction: column;
    }
`
const AboutImage = styled.div`
    background: #707070;
    width: calc(280px - 2%);
    height: 170px;
    margin: 0 10px;
    img{
        width: 100%;
        object-fit: contain;
    }
    @media(max-width: 728px){
        margin: 20px auto;
        display: none;
    }
    @media(max-width: 428px){
        
    }
`
const AboutText = styled.div`
    width: 50%;
    padding: 0 20px;
    text-align: left;
    @media(max-width: 728px){
        width: 100%;
        padding: 0;
    }
`

const Home = () =>{
    const orders = useSelector((state)=>state.orders.value)
    return(
        <div className="container">
            <header>
                <Nav1 />
                <Nav2 />
                <SideNav />
            </header> 
            <main className='home-div' id="home">
                <Link to='/summary'>
                    <CartDiv>
                        <img src={cart} alt='Cart' title={orders.length + 'Orders'}/>
                        <OrderNumberDiv><p>{orders.length}</p></OrderNumberDiv>
                    </CartDiv>
                </Link>
                
                <section className="landing-container">
                    <div className="landing">
                        <img src={land} alt="printing"/>
                    </div>
                </section>
                <Categories toshow={true}/>
                <section className='p-works-section'>
                    <h3>Previous Works</h3>
                    <div className='p-works-carousel-container'>
                        <Slide />
                    </div>
                </section>
                <section className='about-section' id="about">
                    <div className='about-container'>
                        <h3>About Us</h3>
                        <AboutContent>
                            <AboutText>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                            sed do eiusmod tempor incididunt ut labore et dolore magna
                            aliqua. Id nibh tortor id aliquet lectus proin nibh nisl
                            condimentum. Leo a diam sollicitudin tempor id eu nisl 
                            nunc. Gravida in fermentum et sollicitudin ac orci phasellus. 
                            Sit amet commodo nulla facilisi nullam vehicula ipsum. 
                            Sed elementum tempus egestas sed sed. Suspendisse in 
                            est ante in nibh mauris cursus. Amet mattis vulputate enim
                            nulla aliquet porttitor lacus.
                            </AboutText>
                            <AboutImage>
                                <img src={aboutImg} alt="Printing Machine" title='Printing Machine'></img>
                            </AboutImage>
                        </AboutContent>

                        
                    </div>
                </section>
                <section className='clients-section'>
                    <div className='clients-container'>
                        <h3>Our Clients</h3>
                        <div className='img-container'>
                            <img src={clientimg} alt='Our Client' title='Our Clients'/>
                        </div>
                    </div>
                </section>
            </main>
            {/* <Outlet /> */}
            {/* <Footer></Footer> */}
        </div>
    )
}

export default Home;