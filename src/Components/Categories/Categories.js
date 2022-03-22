// import React, { Component } from 'react';
import Carousel from 'react-elastic-carousel';
// import arrowLeft from '../../images/arrow-left.svg'
// import arrowRight from '../../images/arrow-right.svg'
import { Link } from "react-router-dom";
import brochure from '../../images/brochures.jpg'
import mag from '../../images/magazine-2.jpg'
import cal from '../../images/calendar.jpg'
import pck from '../../images/product-package.png'

import '../Categories/Categories.css';

const Categories = (props) =>{
    const breakPoints = [
        {width: 1, itemsToShow: 1},
        {width: 500, itemsToShow: 2},
        {width: 768, itemsToShow: 3},
        {width: 1200, itemsToShow: 4},
    ];
    return(
        <section className="categories-section">
            <h3>{props.toshow ? 'Categories' : ''}</h3>
            <Carousel breakPoints={breakPoints} className="carousel">
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
                <Link to="/cat">
                    <div className='cat more'>
                        <img src={pck} alt="Food Packs" />
                        <div className='details'>
                            <p>View More</p>
                        </div>
                    </div>
                </Link>
        
            </Carousel>
    {/* <div className="back"> */}
        
    {/* </div> */}
    {/* <Outlet /> */}
</section>
    )

}

export default Categories ;