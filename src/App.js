import { useState } from "react";
import { createGlobalStyle } from "styled-components";
import FirstSection from "./components/FirstSection";
import Menu from "./components/Menu";
import ProductList from "./components/ProductsList";
import DATA from "./components/data.json"

const GlobalStyle = createGlobalStyle`
  body{
    margin: 0;
    padding: 0; 
    overflow-x:hidden;
  }
   p{
    margin: 0;
  }
    * {
    box-sizing:border-box;
  }
`

export default function App() {
  const [shoppedItems, setShoppedItems] = useState([]);

  function handleAddTOCard(id) {
    const itemShopped = DATA.find(item => item.id === id)
    const copyShoppedItems = [...shoppedItems];
    const itemFound = { ...shoppedItems.find(item => item.id === id) }
    const index = shoppedItems.findIndex(item => item.id === id)

    if (shoppedItems.length === 0) {
      copyShoppedItems.push(itemShopped);
      setShoppedItems(copyShoppedItems);
    }
    else {
      if (Object.getOwnPropertyNames(itemFound).length > 0) {
        console.log('repeat')
        const copyShoppedItems = [...shoppedItems];
        itemFound.shoppedNumber = itemFound.shoppedNumber + 1;
        copyShoppedItems[index] = itemFound;
        setShoppedItems(copyShoppedItems);
      }
      else {
        console.log('aaa')
        copyShoppedItems.push(itemShopped);
        setShoppedItems(copyShoppedItems);
      }
    }
  }

  function handleShoppedNumberChange(items) {
    setShoppedItems(items)
  }

  return (
    <>
      <GlobalStyle />
      <Menu
        shoppedItems={shoppedItems}
        handleChange={handleShoppedNumberChange}
      />
      <FirstSection />
      <ProductList onAddToCard={handleAddTOCard} />
    </>
  )
}
