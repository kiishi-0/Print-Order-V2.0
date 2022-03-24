import React from 'react';
import styled from 'styled-components'
import Nav1 from '../../Components/Nav1/Nav1';
import '../MarketerHome/MarketerHome.css'


const OrderBtnDiv = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
`
const OrderBtn = styled.button`
    width: 150px;
    height: 70px
    border: 0;
    font-size: 20px;
    background: #a8a8a8;
    padding: 15px 10px;
    transition: background ease .25s;
    :hover{
        background: #707070;
    }
    margin-left: 10px;
`

const MarketerHomeDiv = styled.div`
    // display: flex,
    // width: 100%,
    // flex-direction: column
    // background-color: red;
`
const CustomerDivContainer = styled.div`
    display: flex;
    width: 100%;
    padding: 10px 25px 100px ;
    flex-direction: column;
`
const CustomerDiv = styled.div`
    width: 100%;
    // cursor: pointer;
    padding: 25px 15px;
    min-height: 125px;
    align-items: center;
    display: flex;
    justify-content: space-between;
    background-color: #C4C4C4;
    // flex-direction: row;
    transition: background ease .25s;
    margin: 10px 0;
    @media (max-width: 414px){
        flex-direction: column;
    }
    // &:hover {
    //     background-color: #707070;
    //   }
`
const CusDetails = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    flex-direction: column;
    justify-content: ${(props) => props.pos === "left" && "flex-start"};
    justify-content: ${(props) => props.pos === "right" && "flex-end"};
    align-items: ${(props) => props.pos === "right" && "flex-end"};
    // background-color: ${(props) => props.pos === "left" && "aliceblue"};
    // background-color: ${(props) => props.pos === "left" && "aliceblue"};
    // background-color: ${(props) => props.pos === "right" && "violet"};
    @media (max-width: 414px){
        align-items: ${(props) => props.pos === "right" && "flex-start"};
    }
`
const MarketerHome = () =>{
    return(
        <MarketerHomeDiv>
            <header>
                <Nav1></Nav1>
            </header>
            <main>
                <h1>Marketer</h1>
                <CustomerDivContainer>
                    <CustomerDiv>
                        <CusDetails pos="left">
                            <h3 className='cus-name'>CUSTOMER NAME: JOHN DOE</h3>
                            <p>Order No: 001-08-22</p>
                            <p>Job Title: Lorem Ipsum</p>
                        </CusDetails>
                        <CusDetails pos="right">
                            <p>DUE: 20/09/2022</p>
                            <p>JOB STATUS: PENDING</p>
                            <OrderBtnDiv>
                                <OrderBtn>View Order</OrderBtn>
                            </OrderBtnDiv>
                        </CusDetails>
                        
                    </CustomerDiv>
                    <CustomerDiv>
                        <CusDetails pos="left">
                            <h3 className='cus-name'>CUSTOMER NAME: JOHN DOE</h3>
                            <p>Order No: 001-08-22</p>
                            <p>Job Title: Lorem Ipsum</p>
                        </CusDetails>
                        <CusDetails pos="right">
                            <p>DUE: 20/09/2022</p>
                            <p>JOB STATUS: PENDING</p>
                            <OrderBtnDiv>
                                <OrderBtn>View Order</OrderBtn>
                            </OrderBtnDiv>
                            
                        </CusDetails>
                    </CustomerDiv>
                    <CustomerDiv>
                        <CusDetails pos="left">
                            <h3 className='cus-name'>CUSTOMER NAME: JOHN DOE</h3>
                            <p>Order No: 001-08-22</p>
                            <p>Job Title: Lorem Ipsum</p>
                        </CusDetails>
                        <CusDetails pos="right">
                            <p>DUE: 20/09/2022</p>
                            <p>JOB STATUS: PENDING</p>
                            <OrderBtnDiv>
                                <OrderBtn>View Order</OrderBtn>
                            </OrderBtnDiv>
                        </CusDetails>
                    </CustomerDiv>
                </CustomerDivContainer>
            </main>
        </MarketerHomeDiv>
    )
}

export default MarketerHome