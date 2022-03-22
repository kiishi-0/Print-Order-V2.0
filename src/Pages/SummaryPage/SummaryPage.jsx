import React from 'react';
import '../SummaryPage/SummaryPage.css';
import Nav1 from '../../Components/Nav1/Nav1';
import Nav2 from '../../Components/Nav2/Nav2';
import SideNav from '../../Components/SideNav/SideNav';
// import { Link } from 'react-router-dom';
import Order from '../../Components/Order/Order'
import { useSelector } from 'react-redux';

const SummaryPage = () =>{ 
    const orders = useSelector((state) => state.orders.value)
    console.log(orders)
    return(
        <div className='container'>
            <header>
                <Nav1 />
                <Nav2 />
                <SideNav />
            </header>
            <main className='summary-div'>
                <h1>Order Summary</h1>
                <div className='orders'>
                    {console.log(orders)}
                    {orders.map( (order) => <Order order={order}/>)}
                </div>
            </main>
        </div>
    )
}

export default SummaryPage;