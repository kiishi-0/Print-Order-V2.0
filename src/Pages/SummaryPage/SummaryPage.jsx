import React from 'react';
import '../SummaryPage/SummaryPage.css';
import Nav1 from '../../Components/Nav1/Nav1';
import Nav2 from '../../Components/Nav2/Nav2';
import SideNav from '../../Components/SideNav/SideNav';
import { Link } from 'react-router-dom';
import Order from '../../Components/Order/Order'
import { useSelector} from 'react-redux';
import Overlay from '../../Components/Overlay/Overlay';

const SummaryPage = () =>{ 
    
    const orders = useSelector((state) => state.orders.value)
    // console.log(orders)
    const DisplayOverlay = () =>{
        document.getElementById('overlay').style.display = 'flex'
    }
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
                    {orders.length > 0 ? 
                        orders.map( (order) => <Order displayOverlay={DisplayOverlay} order={order}/>)
                        
                    :
                    <h3 className="order-status">
                            No orders here you can find products in  
                            <span>
                                <Link to="/cat"> Categories.</Link>
                            </span>
                            
                    </h3>
                }
                    
                </div>
                
            </main>
            <Overlay />
        </div>
    )
}

export default SummaryPage;