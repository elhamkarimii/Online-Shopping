import React, { useState } from "react";
import styled from "styled-components";
import * as fa from 'react-icons/fa';
import { HandleBasketContext } from "./Context"
import ReactDOM from "react-dom"
import SideBar from "./SideBar";

const MenuWrapper = styled.div`
    width :100%;
    height: 60px;
    background-color: #E7E2DD;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 25px;
    padding-left: 50px;
    padding-right: 50px;
    color: #222222;
    overflow:hidden;
`
const Logo = styled.div`
    display: flex;
`
const FirstName = styled.p`
    font-weight: bold;
`
const LastName = styled.p`
    color: #F09D51;
    font-weight: bold;
`

export default function Menu({ shoppedItems, handleChange}) {
    const [expand, setExpand] = useState(false);

    function handleBasketClick() {
        setExpand(true)
    }

    function handleCloseSideBar() {
        setExpand(false)
    }

    return (
        <>
            <HandleBasketContext.Provider value={handleCloseSideBar} >
                <MenuWrapper>
                    <fa.FaAlignJustify />
                    <Logo>
                        <FirstName>C O M F Y</FirstName>
                        <LastName>H O U S E</LastName>
                    </Logo>
                    <fa.FaShoppingCart onClick={handleBasketClick} />
                    {ReactDOM.createPortal(<SideBar
                        shoppedItems={shoppedItems}
                        expand={expand}
                        handleCloseSideBar={handleCloseSideBar}
                        onHandleChange={handleChange}
                    />, document.body)}

                </MenuWrapper>
            </HandleBasketContext.Provider>
        </>
    )
}