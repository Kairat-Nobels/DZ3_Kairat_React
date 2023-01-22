import './App.css'
import Search from './components/Search/Search'
import Cotalog from './components/Cotalog/Cotalog'
import Basket from './components/Basket/Basket';
import { useState } from "react";

function App() {
  const [searchValue, setSearchValue] = useState('')
  const [countBasket, setCountBasket] = useState(0)
  return (
    <div className="App">
      <Search searchValue={searchValue} setSearchValue={setSearchValue} />
      <Cotalog countBasket={countBasket} setCountBasket={setCountBasket} searchValue={searchValue} />
      <Basket countBasket={countBasket}  />
    </div>
  )
}

export default App
