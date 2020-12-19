import React, { useContext } from "react";
import styled, { keyframes } from "styled-components";
import * as fa from 'react-icons/fa';
import { HandleBasketContext } from "./Context"

const Wrapper = styled.div`
    width: 400px;
    height: 100vh;
    background-color: #E7E2DD;
    position: absolute;
    right:0px;
    top:0px;
    padding: 20px;
    transition:all 0.5s ease;
    transform:${props => props.open ? 'translateX(0)' : 'translateX(100%)'};
`
const CloseIcon = styled(fa.FaRegWindowClose)`
    font-size: 30px;
`
const Header = styled.h2`
    text-align: center;
`
const ShoppedWrapper = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    margin-bottom: 10px;
`
const ImgContainer = styled.div`
    width: 75px;
    height: 75px;
`
const Img = styled.img`
    width: 100%;
    height: 100%;
`
const DetailContainer = styled.div`
    margin-left: 30px;
`
const ItemName = styled.p`
    margin: 2px;
`
const ItemPrice = styled.p`
    margin: 2px;
`
const RemoveButton = styled.p`
    color: #898988;
    margin: 4px;
    cursor: pointer;
`
const CounterBox = styled.div`
    display:flex;
    flex-direction: column;
    margin-left: auto;
`
const UpArrow = styled(fa.FaLongArrowAltUp)`
    color: #F09D51;
`
const DownArrow = styled(fa.FaLongArrowAltDown)`
    color: #F09D51;
`
const ClearButton = styled.button`
    width: 200px;
    height: 52px;
    border: none;
    margin: 0 auto;
    display: block;
    background-color: #f09d51;
    cursor: pointer;
    font-size: 20px;
    &:hover {
    color: #f09d51;
    border: 1px solid #f09d51;
    background-color: transparent;
    outline: none;
  }
`
export default function SideBar({ expand, shoppedItems, onHandleChange}) {
    const handleCloseSideBar = useContext(HandleBasketContext);

    function handleTotalPrice() {
        var sum = 0;
        shoppedItems.forEach(item => {
            sum = (item.price * item.shoppedNumber) + sum
        })
        return sum;
    }

    function deleteItem(id) {
        const copyShoppedItems = [...shoppedItems];
        const index = shoppedItems.findIndex(item => item.id === id);
        copyShoppedItems.splice(index, 1);
        onHandleChange(copyShoppedItems)
    }

    function handleChangeShoppedNumber(id, isPlus) {
        const copyShoppedItems = [...shoppedItems];
        const itemFound = { ...copyShoppedItems.find(item => item.id === id) };
        isPlus ? itemFound.shoppedNumber++ : itemFound.shoppedNumber--;
        if (itemFound.shoppedNumber === 0) {
            const index = shoppedItems.findIndex(item => item.id === id);
            copyShoppedItems.splice(index, 1);
        } else {
            const index = shoppedItems.findIndex(item => item.id === id);
            copyShoppedItems[index] = itemFound;
        }
        onHandleChange(copyShoppedItems)
    }

    function handleClearCard() {
        let copyShoppedItems = [...shoppedItems];
        copyShoppedItems = [];
        onHandleChange(copyShoppedItems)
    }

    return (
        <>
            <Wrapper open={expand}>
                <CloseIcon onClick={handleCloseSideBar} />
                <Header>your card</Header>
                {shoppedItems.length > 0 && shoppedItems.map(item =>
                    <ShoppedWrapper key={item.id} >
                        <ImgContainer>
                            <Img alt="img" src={item.src} />
                        </ImgContainer>
                        <DetailContainer>
                            <ItemName>{item.name}</ItemName>
                            <ItemPrice>{item.price}$</ItemPrice>
                            <RemoveButton onClick={() => deleteItem(item.id)}>remove</RemoveButton>
                        </DetailContainer>
                        <CounterBox>
                            <UpArrow onClick={() => handleChangeShoppedNumber(item.id, true)} />
                            <p>{item.shoppedNumber}</p>
                            <DownArrow onClick={() => handleChangeShoppedNumber(item.id, false)} />
                        </CounterBox>
                    </ShoppedWrapper>)}
                <Header>your total is: {handleTotalPrice()}$</Header>
                <ClearButton onClick={handleClearCard} >Clear card</ClearButton>
            </Wrapper>
        </>
    )
}