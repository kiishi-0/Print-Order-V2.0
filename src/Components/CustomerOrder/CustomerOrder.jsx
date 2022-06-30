import React from 'react'
import styled from 'styled-components'

const CustomerOrderContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    // background: red;
    width: 100%;
    padding-bottom: 100px;
    h1{
        margin-bottom: 50px;
    }
`
const CustomerOrderDiv = styled.div`
    display: flex;
    flex-direction: column;
    width: 85%;
    background: #F3F3F3;
    padding: 25px;
    border-radius: 20px;
`
const IdentityDiv = styled.div`
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: flex-start;
    // background: red;
    div{
        display: flex;
        align-items: center;
        // justify-content: space-around;
        // background: purple;
        width: 100%;
        
    }
    // div:first-child{
    //     background: purple;
    // }
    div:not(:first-child){
        margin: 0 50px;
    }
    h3, p{
        font-size: 20px;
    }
    p{
        margin-left: 10px;
    }
`
const CopiesNPagesDiv = styled.div`
    display: flex;
    width: 100%;
    align-items: center;
    // background: red;
    justify-content: flex-start;
    margin: 50px 0;
    font-size: 20px;
    div{
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center; 
        width: 30%;
        // margin: 0 100%;
        // background: purple;
        text-align: left;
        // height: 100px;
    }
    div:not(:first-child){
        margin-left: 4%;
    }

    h3{
        margin-top: 10px;
        font-size: 18px;
    }
    h3, p{
        text-align: left;
    }
`
const AddressDivContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    margin: 30px 0;
    p{
        text-align: left;
        // color: red;
        font-size: 20px;
        width: 100%;
    }
`
const AddressDiv = styled.div`
    width: 100%;
    background: #C4C4C4;
    padding: 10px 20px;
    border-radius: 10px;
` 
export default function CustomerOrder() {
  return (
    <div className='corder-container'>
        <CustomerOrderContainer>
                    <h1>Hye Jin Holdings</h1>
                    <CustomerOrderDiv>
                        <IdentityDiv>
                            <div className="order-no">
                                <h3>Order No: </h3>
                                <p>001-08-22</p>
                            </div>
                            <h3>|</h3>
                            <div className="title">
                                <h3>Job Title: </h3>
                                <p> Lorem Ipsum</p>
                            </div>
                            <h3>|</h3>
                            <div className="category">
                                <h3>Category: </h3>
                                <p>Magazine</p>
                            </div>
                        </IdentityDiv>
                        <CopiesNPagesDiv>
                            <div className="copies">
                                <p>COPIES: </p>
                                <h3>22</h3>
                            </div>
                            <p>|</p>
                            <div className="pages">
                                <p>PAGES: </p>
                                <h3>209</h3>
                            </div>
                            <p>|</p>
                            <div className="date">
                                <p>DUE DATES:</p>
                                <h3>21/03/22</h3>
                            </div>
                        </CopiesNPagesDiv>
                        <AddressDivContainer>
                            <p>ADDRESS: </p>
                            <AddressDiv>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut tempor sene  </AddressDiv>
                        </AddressDivContainer>
                        <AddressDivContainer>
                            <p>JOB DESCRIPTION: </p>
                            <AddressDiv>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut tempor senectus arcu cursus tortor odio ornare velit blandit. Elit faucibus ante sed nascetur. Tincidunt </AddressDiv>
                        </AddressDivContainer>
                            
                    </CustomerOrderDiv>
                </CustomerOrderContainer>
    </div>
  )
}
