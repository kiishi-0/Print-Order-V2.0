import React from 'react';
import styled from 'styled-components';
import Nav1 from '../../Components/Nav1/Nav1';
import Nav2 from '../../Components/Nav2/Nav2';
import SideNav from '../../Components/SideNav/SideNav'
import { Link } from 'react-router-dom';
import './CategoriesPage.css'
import brochure from '../../images/brochures.jpg'
import mag from '../../images/magazine-2.jpg'
import cal from '../../images/calendar.jpg'
import pck from '../../images/product-package.png'
import CategoriesSlider from '../../Components/CategoriesSlider/CategoriesSlider';

const CategoriesContainer = styled.div`
        width: 100%;
        display: none;
        height: 60vh;
        padding: 0 10px;
        flex-direction: column;
        flex-wrap: wrap;
        align-items: center;
        justify-content: center;
        // background: red;
    @media (max-width: 768px) {
        display: flex;
        // align-items: center;
        // justify content: center;
    }
`

const CategoriesPage = () => {
    // const breakPoints = [
    //     {width: 1, itemsToShow: 1},
    //     {width: 500, itemsToShow: 2},
    //     {width: 768, itemsToShow: 3},
    //     {width: 1200, itemsToShow: 4},
    // ];
    return(
        <div class="container">
            <header>
                <Nav1 />
                <Nav2 />
                <SideNav/>
            </header>
            <main>
                <h1>Categories</h1>
                <section class="categories-container">
                <Link to={`/product/${'magazine'}`}>
                            <div className='cat'>
                                <img src={mag} alt="Magazine" />
                                <div className='details'>
                                    <p>Magazines</p>
                                </div>
                            </div>
                        </Link>
                        <Link to={`/product/${'brochure'}`}>
                            <div className='cat'>
                                <img src={brochure} alt="brochure" />
                                <div className='details'>
                                    <p>Brochures</p>
                                </div>
                            </div>
                        </Link>
                        <Link to={`/product/${'food packs'}`}>
                            <div className='cat'>
                                <img src={pck} alt="Food Packs" />
                                <div className='details'>
                                    <p>Food Packs</p>
                                </div>
                            </div>
                        </Link>
                        <Link to={`/product/${'calendars'}`}>
                            <div className='cat'>
                                <img src={cal} alt="Calendars" />
                                <div className='details'>
                                    <p>Calendars</p>
                                </div>
                            </div>
                        </Link>
                        <Link to={`/product/${'Fliers'}`}>
                            <div className='cat'>
                                <img src={brochure} alt="Fliers" />
                                <div className='details'>
                                    <p>Fliers</p>
                                </div>
                            </div>
                        </Link>
                        <Link to={`/product/${'Other'}`}>
                            <div className='cat'>
                                <img src={mag} alt="Other" />
                                <div className='details'>
                                    <p>Other</p>
                                </div>
                            </div>
                        </Link>
                    
                    
                </section>
                <CategoriesContainer className='categories-container'>
                    {/* <Carousel breakPoints={breakPoints} className="carousel">
                        <Link to={`/product/${'magazine'}`}>
                            <div className='cat'>
                                <img src={mag} alt="brochure" />
                                <div className='details'>
                                    <p>Magazines</p>
                                </div>
                            </div>
                        </Link>
                        <Link to={`/product/${'brochure'}`}>
                            <div className='cat'>
                                <img src={brochure} alt="brochure" />
                                <div className='details'>
                                    <p>Brochures</p>
                                </div>
                            </div>
                        </Link>
                        <Link to={`/product/${'food packs'}`}>
                            <div className='cat'>
                                <img src={pck} alt="Food Packs" />
                                <div className='details'>
                                    <p>Food Packs</p>
                                </div>
                            </div>
                        </Link>
                        <Link to={`/product/${'calendars'}`}>
                            <div className='cat'>
                                <img src={cal} alt="Calendars" />
                                <div className='details'>
                                    <p>Calendars</p>
                                </div>
                            </div>
                        </Link>
                    </Carousel> */}
                    {/* <Categories toshow={false}></Categories> */}
                    <CategoriesSlider></CategoriesSlider>
                </CategoriesContainer>
            </main>
        </div>
    )
}

export default CategoriesPage;