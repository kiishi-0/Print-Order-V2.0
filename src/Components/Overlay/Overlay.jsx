import React from 'react'
import styled from 'styled-components'
import close2 from '../../images/close2.svg'
import '../Overlay/Overlay.css'



const OverlayDiv = styled.div`
    position: absolute;
    display: flex;
    width: 390px;
    height: 200px;
    background: #585858;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    align-items: center;
    justify-content: center;
    border-radius: 20px;
    flex-direction: column;
    img{
        width: 30px;
        cursor: pointer;
    }  

`
const ImageDiv = styled.div`
    display: flex;
    width: 100%;
    padding: 20px 20px 0 0;
    // background: red;
    justify-content: flex-end;
    position: relative;
    justify-self: flex-start;
    
`
const Message = styled.p`
    flex: 3;
    width: 100%;
    color: #fff;
    font-size: 25px;
    padding-top: 10%;
    // display: flex;
    // align-items: center;
    // justify-content: center;
    text-align: center;
`
export default function Overlay(props) {
        
    const handleCloseDisplay = () =>{
    document.getElementById('overlay').style.display = 'none'
}



  return (
    <div className='overlay-container' id='overlay'>
        <OverlayDiv>
            <ImageDiv>
                <img src={close2} alt="close" onClick={handleCloseDisplay}/>
            </ImageDiv>
            <Message>Order Submitted</Message>
        </OverlayDiv>
    </div>
  )
}
