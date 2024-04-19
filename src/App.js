import './App.css';
import Header from './Components/Header';
import HomeApp from './Components/HomeApp';
import Footer from './Components/Footer';
import { Routes ,Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
     <div >
     <Header/>
     </div>
   
      <div>
      <Routes>
    
    <Route path='/home' element= {<HomeApp/>}/>
    </Routes>

        </div>  
       
      
    </div>
  );
}

export default App;
