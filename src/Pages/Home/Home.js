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
                        <p className='about-text'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                        sed do eiusmod tempor incididunt ut labore et dolore magna
                        aliqua. Id nibh tortor id aliquet lectus proin nibh nisl
                        condimentum. Leo a diam sollicitudin tempor id eu nisl 
                        nunc. Gravida in fermentum et sollicitudin ac orci phasellus. 
                        Sit amet commodo nulla facilisi nullam vehicula ipsum. 
                        Sed elementum tempus egestas sed sed. Suspendisse in 
                        est ante in nibh mauris cursus. Amet mattis vulputate enim
                        nulla aliquet porttitor lacus. Habitant morbi tristique 
                        senectus et netus et. Quam vulputate dignissim suspendisse 
                        in est ante in. Volutpat est velit egestas dui id ornare 
                        arcu. Felis eget velit aliquet sagittis. Magna fringilla 
                        urna porttitor rhoncus dolor purus non enim praesent. 
                        Vel pretium lectus quam id leo. In eu mi bibendum neque 
                        egestas congue quisque egestas diam. Commodo nulla facilisi 
                        nullam vehicula ipsum a. Ut eu sem integer vitae justo 
                        eget magna fermentum iaculis. Nullam eget felis eget nunc lobortis 
                        mattis aliquam faucibus purus. Scelerisque viverra mauris in aliquam. 
                        Mi ipsum faucibus vitae aliquet nec.
                        </p>
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