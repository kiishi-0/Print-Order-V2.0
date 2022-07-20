import React, { useState } from 'react';
import { Link, useParams } from "react-router-dom";
import '../ProductPage/ProductPage.css';
import Nav1 from '../../Components/Nav1/Nav1';
import Nav2 from '../../Components/Nav2/Nav2';
import SideNav from '../../Components/SideNav/SideNav';
// import Slide from '../../Components/Slide/Slide';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { addOrder } from '../../Features/orders';
// import { withRouter } from "react-router";
// import  cal from '../../images/calendar-solid.svg'

const ProductPage = () => {
    // let jobTitle = "", copies = 0, pages = 0, desc = "", address = "";
    const orders = useSelector((state) => state.orders.value)
    // console.log(orders)
    // let orderID = orders.id
    let id = orders.length === 0 ? 1 : orders.length + 1;
    let params = useParams();
    
    const [order, setOrder] = useState({
        id: id,
        product: params.name,
        jobTitle: "No Job Title",
        copies: 0,
        pages: 0,
        desc: "No Description",
        dueDate: "Not Selected",
        address: "No Address"
                                    });
    let newOrder = order;
    const dispatch = useDispatch()
    const changeJobTitle = (event) =>{
        newOrder.jobTitle = event.target.value
    }
    const changeCopies = (event) =>{
        newOrder.copies = event.target.value
    }
    const changePages = (event) =>{
        newOrder.pages = event.target.value
    }
    const changeDesc = (event) =>{
        newOrder.desc = event.target.value
    }
    const changeDate = (event) =>{
        newOrder.dueDate = event.target.value
    }
    const changeAddress = (event) =>{
        newOrder.address = event.target.value
    }
    const createNewOrder = () =>{
        setOrder(newOrder)
        dispatch(addOrder(order))
    }
    return(
        <div className="container">
            <header>
                <Nav1 />
                <Nav2 />
                <SideNav />
            </header>
            
            <div className="product-div">
                <div className="title-div">
                    <h1>{params.name.toUpperCase()}</h1>
                    <div className="slide">
                    </div>
                </div>
                <div className="product-details-div">
                    <h2>Job Details</h2>
                    <form action="#" method="post" className='details-div'>
                        <div className="sec-div">
                            <div className='sec1 sec'>
                                <input type="text" name="title" id="title" placeholder='Job Title' onChange={changeJobTitle}/>
                                <input type="number" name="copies" id="copies" placeholder='Number of Copies' onChange={changeCopies} min="0"/>
                                <input type="number" name="pages" id="pages" placeholder='Number of Pages' onChange={changePages} min="0"/>
                                <textarea name="description" id="description" cols="30" rows="5" placeholder='Job Description' onChange={changeDesc}></textarea>
                            </div>
                            <div className='sec2 sec'>
                                <span className='date'>
                                    <p>Due Date: </p>
                                    {/* <img src={cal} alt="calender" srcset="" width={20}/> */}
                                    <input type="date" name="due-date" id="due-date" onChange={changeDate}/>
                                </span>
                                <span className='design'>
                                    {/* <p>Job Design: </p> */}
                                    <input type="file" name="design" id="design" />
                                </span>
                                <span className='design'>
                                    {/* <p>Job Content: </p> */}
                                    <input type="file" name="content" id="content" />
                                </span>
                                <textarea name="address" id="address" cols="30" rows="5" placeholder='Address' onChange={changeAddress}></textarea>
                            </div>
                        </div>
                        <Link to="/summary">
                            <button onClick={createNewOrder}>SUBMIT</button>
                        </Link>
                        
                    </form>
                </div>
                
            </div>
        </div>
    )
}

export default ProductPage;