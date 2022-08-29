import './App.css';
import { Routes, Route, 
  // useNavigate
 } from 'react-router-dom'
 import Landing from './pages/Landing'
 import Profile from './pages/Profile'
 import Cart from './pages/Cart'
 import DetailProduct from './pages/DetailProduct'
 import ComplaintClient from './pages/ComplaintClient'
import Dashboard from './adminPages/Dashboard';
import ComplainAdmin from './adminPages/ComplainAdmin';
import AddProduct from './adminPages/AddProduct';

function App() {
  return (
    <Routes>
      <Route exact path='/' element={<Landing />} />
      <Route path='/profile' element={<Profile />} />
      <Route path='/cart' element={<Cart />} />
      <Route path='/complain' element={<ComplaintClient />} />
      <Route path='/detail/:id' element={<DetailProduct />} />
      <Route path='/dashboard' element={<Dashboard />} />
      <Route path='/complain-admin' element={<ComplainAdmin />} />
      <Route path='/addproduct' element={<AddProduct />} />
    </Routes>
  );
}

export default App;
