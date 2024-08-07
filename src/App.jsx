import React,{useState} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './components/Navbar'
import ProductList from './components/ProductList'
import Footer from './components/Footer'
import './App.css'
import AddItem from './components/AddItem'

function App() {
  // const [count, setCount] = useState(0)
  const products=[
    {
      price:9999,
      name:"I phone",
      quantity:2
    },
    {
      price:10000,
      name:"real me x",
      quantity:3
    },
    {
      price:20000,
      name:"samsung",
      quantity:4
    }
  ]
  
  let [productList , setProductList]=useState(products)
  let [totalAmount , setTotalAmount]=useState(0)
  
  const increamentQuantity=(index)=>{
    let newProductList=[...productList]
    let newTotalAmount=totalAmount
    newProductList[index].quantity++;
    newTotalAmount+=newProductList[index].price
    setTotalAmount(newTotalAmount)
    setProductList(newProductList)
    
  }
  const decreamentQuantity=(index)=>{
    let newProductList=[...productList]
    let newTotalAmount=totalAmount
    if(newProductList[index].quantity>0){
      newProductList[index].quantity--;
      newTotalAmount-=newProductList[index].price
    }
    setTotalAmount(newTotalAmount)
    setProductList(newProductList)
  }
  const resetData=()=>{
    let thirdNewProductLists=[...productList]
    thirdNewProductLists.forEach((product)=>{
      product.quantity=0
    })
    setProductList(thirdNewProductLists)
  }
  const removeItem=(index)=>{
    let newProductList=[...productList];
    let newTotalAmount=totalAmount;
    newTotalAmount-=newProductList[index].quantity*newProductList[index].price
    newProductList.splice(index,1)
    setTotalAmount(newTotalAmount)
    setProductList(newProductList)
  }
  const addItem=(name,price)=>{
    let newProductList=[...productList]
    newProductList.push({
      name:name,
      price:price,
      quantity:0
    })
    setProductList(newProductList)
  }
  console.log(products)
  return (
    <>
    <Navbar/>
    <main className='container mt-5'>
      <AddItem addItem={addItem}/>
    <ProductList productList={productList} increamentQuantity={increamentQuantity} decreamentQuantity={decreamentQuantity} removeItem={removeItem}/>
    </main>
    <Footer totalAmount={totalAmount} resetData={resetData}/>
    </>
  )
}

export default App
