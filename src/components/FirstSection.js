import React, { useEffect, useRef } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
    background-image: url("./images/background.jpeg");
    background-position: center;
    background-repeat: no-repeat; 
    background-size: cover;
    width:100%;
    height: 565px;
    display: flex;
    align-items: center;
`
const InnerSection = styled.div`
    margin: 0 auto;
    width: 747px;
    height: 230px;
    background: rgba(255, 255, 255, 0.8);
    text-align: center;
    padding: 20px;
`
const Header = styled.div`
    font-size: 50px;
    font-weight: bold;
    color: #222222;
`
const ShopBUtton = styled.button`
    width: 200px;
    height: 52px;
    border: none;
    background-color: #f09d51;
    margin-top: 58px;
    cursor: pointer;
    font-size: 20px;
    &:hover {
    color: #f09d51;
    border: 1px solid #f09d51;
    background-color: transparent;
    outline: none;
  }
`
export default function FirstSection() {
    const scrollDown = useRef();

    useEffect(() => {
        scrollDown.current.scrollTo(250, scrollDown.current.scrollHeight)
    }, []);

    return (
        <>
            <Wrapper ref={scrollDown}>
                <InnerSection>
                    <Header>
                        FURNITURE COLLECTION
                    </Header>
                    <ShopBUtton>
                        shop now
                    </ShopBUtton>
                </InnerSection>
            </Wrapper>
        </>
    )
}