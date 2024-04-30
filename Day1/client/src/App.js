
import './App.css';
import {Routes,Route} from 'react-router-dom'
import Login from './Components/Login';
import Counter from './Components/Day 2/counter';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/login' element={<Login/>}/>
        <Route path='/Counter' element={<Counter/>}/>
      </Routes>
    </div>
  );
}

export default App;
