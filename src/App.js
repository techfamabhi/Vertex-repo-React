
import './App.css';
import Dashboard from './Component/Dashboard';
import Form from './Component/Form';
import Login from './Component/Login';
import AddHistory from './Component/Pages/AccounHistory/AddHistory';
import History from './Component/Pages/AccounHistory/History';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Dashboard/>}/>
      <Route path='/Form' element={<Form/>}/>
      <Route path='/Login' element={<Login/>}/>
      <Route path='/AddHistory' element={<AddHistory/>}/>

      <Route path='/AddHistory' element={<AddHistory/>}/>


     </Routes>
    </BrowserRouter>
  );
}

export default App;
