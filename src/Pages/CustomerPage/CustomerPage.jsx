import React from 'react';
import '../CustomerPage/CustomerPage.css'
import Nav1 from '../../Components/Nav1/Nav1';
import CustomerOrder from '../../Components/CustomerOrder/CustomerOrder';


const CustomerPage = () =>{
    return(
        <div className="customer-page-container">
            <header>
                <Nav1></Nav1>
            </header>
            <main>
                <CustomerOrder></CustomerOrder>
            </main>
        </div>
    )
}
export default CustomerPage;