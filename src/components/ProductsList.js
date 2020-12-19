import React from "react";
import styled from "styled-components";
import Product from "./product";

const Header = styled.div`
    width: 100%;
    height: 175px;
    display:flex;
    align-items: center;
    justify-content: center;
    font-size: 50px;
    color: #222222;
`
const Wrapper = styled.div`
    width: 100%;
    min-height: 300px;
`
export default function ProductList({ onAddToCard }) {
    return (
        <>
            <Header>
                Our Products
            </Header>
            <Wrapper>
                <Product onAddToCard={onAddToCard} />
            </Wrapper>
        </>
    )
}