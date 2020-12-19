import React, { useState, useContext } from "react";
import styled, { keyframes } from "styled-components";
import * as fa from 'react-icons/fa';
import DATA from "./data.json"

const Wrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
`
const HoverCard = styled.button`
    background-color: #f09d51;
    width: 182px;
    height: 31px;
    border: none;
    font-size: 18px;
    float: right;
    margin-top: 135px;
    transition:all 0.5s ease;
    transform:translateX(100%);
`
const HoverContainer = styled.div`
    width: 292px;
    height: 192px;
    background: rgba(255, 255, 255, 0.8);
    position: absolute;
    z-index: 2;
    display:block;
    opacity:0;
    transition:all 0.5s ease;

`
const ProductContainer = styled.div`
    min-width: 292px;
    position: relative;
    overflow: hidden;
    &:hover{
        ${HoverContainer}{
            opacity:1;
        }
        ${HoverCard}{
            transform:translateX(0)
        }
    };
`
const ImgContainer = styled.div`
    width: 292px;
    height: 192px;
`
const ProductImg = styled.img`
    width: 100%;
    min-height: 12rem;
`
const ProductName = styled.h4`
    text-align: center;
`

export default function Product({ onAddToCard }) {

    return (
        <Wrapper>
            {DATA.map(item =>
                <ProductContainer key={item.id}>
                    <HoverContainer>
                        <HoverCard onClick={() => onAddToCard(item.id)}>
                            <fa.FaShoppingCart />
                               add to card
                            <fa.FaShoppingCart />
                        </HoverCard>
                    </HoverContainer>
                    <ImgContainer >
                        <ProductImg alt="img" src={item.src} />
                    </ImgContainer>
                    <ProductName>
                        {item.name}
                    </ProductName>
                </ProductContainer>
            )}
        </Wrapper>
    )
}