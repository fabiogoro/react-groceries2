import { useState } from "react"
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import ShoppingList from './ShoppingList'
import ShoppingCart from './ShoppingCart'
import History from './History'
import Total from './Total'
import Receipt from './Receipt'
import { faEgg, faCarrot, faLemon } from '@fortawesome/free-solid-svg-icons'
import { BrowserRouter, Routes, Route } from "react-router-dom"

function Groceries() {
  function total(){
    return groceryList.reduce(
      (g1,g2)=>{return {
        total: g1.total+g2.total,
        inCart: g1.inCart+g2.inCart,
      }
    }
  )}

  const [groceryList, setGroceryList] = useState([
    {name: 'Egg', price: 10, quantity: 10, image: faEgg, inCart: 0, total: 0},
    {name: 'Carrot', price: 8, quantity: 10, image: faCarrot, inCart: 0, total: 0},
    {name: 'Lemon', price: 2, quantity: 10, image: faLemon, inCart: 0, total: 0},
  ])

  const saved = localStorage.getItem("history")
  const [history, setHistory] = useState(JSON.parse(saved) || [])

  function addItemHandler(e){
    const newGroceryList = [...groceryList]
    const item = newGroceryList[e.target.getAttribute("index")]
    item.inCart += 1
    item.quantity -= 1
    item.total = item.inCart*item.price
    setGroceryList(newGroceryList)
  }

  function removeItemHandler(e){
    const newGroceryList = [...groceryList]
    newGroceryList[e.target.getAttribute("index")].inCart -= 1
    newGroceryList[e.target.getAttribute("index")].quantity += 1
    setGroceryList(newGroceryList)
  }

  function placeOrderHandler(e){
    const newHistory = [...history]
    const t = total()
    newHistory.push({total: t.total, items: t.inCart, date: new Date().toLocaleString()})
    setHistory(newHistory)
    localStorage.setItem("history", JSON.stringify(newHistory))
    setIsShowingReceipt(true)
  }

  const [isShowingReceipt, setIsShowingReceipt] = useState(false)

  const Index = !isShowingReceipt?(
    <Container className="mt-4">
      <Row>
        <ShoppingList 
          groceryList={groceryList} 
          clickHandler={addItemHandler}>
        </ShoppingList>
        <ShoppingCart 
          groceryList={groceryList} 
          clickHandler={removeItemHandler}>
        </ShoppingCart>
      </Row>
      <Total 
        groceryList={groceryList} 
        clickHandler={placeOrderHandler} 
        total={total(groceryList)}>
      </Total>
    </Container>
  ):(
      <Receipt 
        groceryList={groceryList} 
        total={total(groceryList)}>
      </Receipt>
    )

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ Index } />
        <Route path="history" element={ <History history={history}/> } />
      </Routes>
    </BrowserRouter>
  )
}

export default Groceries;
