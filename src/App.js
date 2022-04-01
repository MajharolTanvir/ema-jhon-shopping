import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './component/Header/Header';
import Inventory from './component/Inventory/Inventory';
import Order from './component/Order/Order';
import Shop from './component/Shop/Shop';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Shop></Shop>}></Route>``
        <Route path="order" element={<Order></Order>}></Route>
        <Route path="inventory" element={<Inventory />}></Route>
      </Routes>
    </div>
  );
}

export default App;
