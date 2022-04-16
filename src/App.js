import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './component/Header/Header';
import Inventory from './component/Inventory/Inventory';
import Login from './component/Login/Login';
import Order from './component/Order/Order';
import Registration from './component/Registration/Registration';
import RequireAuth from './component/RequireAuth/RequireAuth';
import Shop from './component/Shop/Shop';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Shop></Shop>}></Route>``
        <Route path="order" element={<Order></Order>}></Route>
        <Route path="inventory" element={
          <RequireAuth>
            <Inventory />
          </RequireAuth>
        }></Route>
        <Route path="login" element={<Login />}></Route>
        <Route path='/registration' element={<Registration />}></Route>
      </Routes>
    </div>
  );
}

export default App;
