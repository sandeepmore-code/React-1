
import './App.css';
import {Routes,Route} from 'react-router-dom'
import Login from './Components/Login';
import Counter from './Components/02-03/counter';
import UseEffect from './Components/03-03/Effect1';
import Effect2 from './Components/03-03/Effect2';
import Effect3 from './Components/03-03/Effect3';
import Effect4 from './Components/03-03/Effect4';
import Register from './Components/Register';
import UseReducer from './Components/09-03/useReducer';
import PropsDrilling from './Components/09-03/PropsDrilling';
import { useState } from 'react';
import AllProducts from './Components/10-03/Allproducts';
import FakeStoreAllProducts from './Components/10-03/FakeStoreAllProducts';
import CounterContext from './Components/10-03/context/Countercontect';
import Home from './Components/Home';
import Todo from './Components/15-03/Todolist';
import PageNotFound from './Components/global/Pagenotfound';
import FakeStoreSingleProduct from './Components/16-03/FakeStoreSingleProduct';
import CurrencyConverter from './Components/17-03/CurrencyConverter';
import CounterRedux from './Components/20-03/CounterRedux';
import UseMemo from './Components/22-03/useMemo';
import Usecallback from './Components/23-03/usecallback';
import Navbar2 from './Components/Navbar2';
import Propfilter from './Components/Propfilter';
import AddProduct from './Components/09-05/AddProduct';

// import Wellcome from './Components/Day 2/wellcome';

function App() {
  const [ allProducts, setProducts] = useState([]);
  // console.log(allProducts,"allProducts")

  const [search, setSearch] = useState("");
  const [filterProducts, setFilterProducts] = useState([])
    function handleChange(event){
      console.log(event.target.value);
      setSearch(event.target.value)
  
      let userWord= event.target.value.toLowerCase();
  
      const filteredProducts = allProducts.filter((product)=>{
       return product.title.toLowerCase().includes(userWord);
      })
      setFilterProducts(filteredProducts)
      console.log(filteredProducts,"filteredProducts")
    }

  const [student,setStudent] =useState(["a","b","c"])
  const [counter, setCounter]= useState(1234)
  const [Product, setProduct] = useState([
    {name : "Tshirt", image : "https://rukminim2.flixcart.com/image/850/1000/xif0q/t-shirt/t/e/0/l-st-theboys-black-smartees-original-imagnqszzzzyuzru.jpeg?q=90&crop=false"},
    {name : "Jeans", image : "https://thehouseofrare.com/cdn/shop/files/DELFT-DUSKY-BLUE1611HERO_6d00745a-d1c3-433c-83e6-f4a296dc5d28_765x.jpg?v=1696507051"},
    {name : "Cap" , image : "https://contents.mediadecathlon.com/p2660347/864dfde1d3148c9f3f7ccafbaecf6c00/p2660347.jpg?format=auto&quality=70&f=650x0" },
    {name : "Tshirt", image : "https://rukminim2.flixcart.com/image/850/1000/xif0q/t-shirt/t/e/0/l-st-theboys-black-smartees-original-imagnqszzzzyuzru.jpeg?q=90&crop=false"},
    {name : "Jeans", image : "https://thehouseofrare.com/cdn/shop/files/DELFT-DUSKY-BLUE1611HERO_6d00745a-d1c3-433c-83e6-f4a296dc5d28_765x.jpg?v=1696507051"},
    {name : "Cap" , image : "https://contents.mediadecathlon.com/p2660347/864dfde1d3148c9f3f7ccafbaecf6c00/p2660347.jpg?format=auto&quality=70&f=650x0" },
    {name : "Tshirt", image : "https://rukminim2.flixcart.com/image/850/1000/xif0q/t-shirt/t/e/0/l-st-theboys-black-smartees-original-imagnqszzzzyuzru.jpeg?q=90&crop=false"},
    {name : "Jeans", image : "https://thehouseofrare.com/cdn/shop/files/DELFT-DUSKY-BLUE1611HERO_6d00745a-d1c3-433c-83e6-f4a296dc5d28_765x.jpg?v=1696507051"},
    {name : "Cap" , image : "https://contents.mediadecathlon.com/p2660347/864dfde1d3148c9f3f7ccafbaecf6c00/p2660347.jpg?format=auto&quality=70&f=650x0" }
  ])
    
  return (
    <div className="App">
      
       <Navbar2 search={search} handleChange={handleChange}/>
      <Routes>

        <Route path='*' element = {<PageNotFound/>}/>
        <Route path='/login' element={<Login/>}/>

        <Route path='/Counter' element={<Counter/>}/>
        {/* <Route path='/Wellcome' element={<Wellcome/>}/> */}
        <Route path='/effect1' element={<UseEffect/>}/>
        <Route path='/Effect2' element={<Effect2/>}/>
        <Route path='/effect3'element={<Effect3/>}/>
        <Route path='/effect4'element={<Effect4/>}/>
        <Route path='/register' element={<Register/>}/> 
        <Route path='/use-reducer' element={<UseReducer/>}/>
        <Route path='/props-drilling' element={<PropsDrilling students={student} counter = {counter} />}/>
        <Route path='/All-products' element={<AllProducts awdiz ={Product} />}/>
        <Route path='/All-productsfakestore' element={<FakeStoreAllProducts />}/>
        <Route path='/Fake-singleProduct/:id' element={<FakeStoreSingleProduct/>}/>
        <Route path='/countercontext' element={<CounterContext />}/>
        <Route path='/Home' element={<Home/>}/>
        <Route path='/Todo' element={<Todo/>}/>
        <Route path='/Converter' element={<CurrencyConverter/>}/>
        <Route path='/Counter-redux' element={<CounterRedux/>}/>
        <Route path='/Usememo' element={<UseMemo/>}/>
        <Route path='/Usecallback' element={<Usecallback/>}/>
        <Route path='/Propfilter' element={<Propfilter setProducts={setProducts} setFilterProducts={setFilterProducts} filterProducts={filterProducts} search={search} handleChange={handleChange}/>}/>

        <Route path='/add-product' element={<AddProduct/>}/>
        
  
      </Routes>
    </div>
  );
}

export default App;
