
import './App.css';
import {Routes,Route} from 'react-router-dom'
import Login from './Components/Login';
import Counter from './Components/Day 2/counter';
import UseEffect from './Components/Day3/Effect1';
import Effect2 from './Components/Day3/Effect2';
import Effect3 from './Components/Day3/Effect3';
import Effect4 from './Components/Day3/Effect4';
import Register from './Components/Register';
// import Wellcome from './Components/Day 2/wellcome';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/login' element={<Login/>}/>
        <Route path='/Counter' element={<Counter/>}/>
        {/* <Route path='/Wellcome' element={<Wellcome/>}/> */}
        <Route path='/effect1' element={<UseEffect/>}/>
        <Route path='/Effect2' element={<Effect2/>}/>
        <Route path='/effect3'element={<Effect3/>}/>
        <Route path='/effect4'element={<Effect4/>}/>
        <Route path='/register' element={<Register/>}/>

      </Routes>
    </div>
  );
}

export default App;
