import React from 'react';
// import '../Order/Order.css'
import { Link } from 'react-router-dom';
// import Overlay from '../Overlay/Overlay';
import { useDispatch} from 'react-redux';
import { removeOrder } from '../../Features/orders';
const Order = (props) =>{
    const dispatch = useDispatch(props);

    
    const order = props.order;
    // const DisplayOverlay = () =>{
    //     document.getElementById('overlay').style.display = 'flex'
    // }
    const handleSubmit=()=>{
        dispatch(removeOrder(order.id));
    }
    const handler = () =>{
        handleSubmit();
        props.displayOverlay();
    }
    return(
            <div className='order'>
                        <h3 className='order-title'>Order {order.id} | {order.product.toUpperCase()}</h3>
                        <div className='job-title-section sec'>
                            <h4>JOB TITLE:</h4>
                            <div className='j-title'>{order.jobTitle}</div>
                        </div>
                        <div className='copies-date-section sec'>
                            <div className='page-section'>
                                <h4>PAGES:</h4>
                                <h6>{order.pages}</h6>
                            </div>
                            <div className='copies-section'>
                                <h4>COPIES:</h4>
                                <h6>{order.copies}</h6>
                            </div>
                            <div className='date-section'>
                                <h4>DATE DUE:</h4>
                                <h6>{order.dueDate}</h6>
                            </div>
                        </div>
                        <div className='address-section sec'>
                            <h4>ADDRESS:</h4>
                            <div className='address'>
                                <p>{order.address}</p>
                            </div>
                        </div>
                        <div className='info-section sec'>
                            <h4>JOB DESCRIPTION:</h4>
                            <div className='info'>
                                <p>{order.desc}</p>
                            </div>
                        </div>
                        <div className='buttons-section sec'>
                            <Link to="/product">
                                <button className='edit-btn' >EDIT</button>
                            </Link>
                            
                            <button className='submit-btn' onClick={handler}>SUBMIT ORDER</button>
                        </div>
                        
                    </div>
    )
}

export default Order;