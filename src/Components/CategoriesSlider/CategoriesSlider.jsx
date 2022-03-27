import React from 'react'
import '../CategoriesSlider/CategoriesSlider.css';
// import styled from 'styled-components';
import Carousel from 'react-elastic-carousel';
import { Link } from "react-router-dom";
import brochure from '../../images/brochures.jpg'
import mag from '../../images/magazine-2.jpg'
import cal from '../../images/calendar.jpg'
import pck from '../../images/product-package.png'



const CategoriesSlider =() =>{
    const breakPoints = [
        {width: 1, itemsToShow: 1},
        {width: 500, itemsToShow: 2},
        {width: 768, itemsToShow: 3},
        {width: 1200, itemsToShow: 4},
    ];
    return(
        <div className="categories-slider-section">
            <Carousel breakPoints={breakPoints}>
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
                                    <p>Others</p>
                                </div>
                            </div>
                        </Link>
            </Carousel>
        </div>
    )
}

export default CategoriesSlider;