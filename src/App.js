import './App.css';
import { ItemDetailContainer } from './Components/Containers/ItemDetailContainer/ItemDetailContainer';
import { ItemListContainer } from './Components/Containers/ItemListContainer';
import { NavBar } from './Components/Header/NavBar';
import { BrowserRouter as Router,Switch, Route,Link, BrowserRouter, Routes} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Cart from "./Components/Cart/Cart"
import CustomProvider from './Components/Context/CartContexto';
import { CartForm } from './Components/Cart/CartForm/CartForm';


function App() {
  return (
    <BrowserRouter>
      <CustomProvider>      
        <NavBar />
        <Routes>
          <Route  path='/' element={<ItemListContainer greeting={"Bienvenido estos son nuestros productos "} />} />
          <Route  path='/categories/:categoryId' element={<ItemListContainer greeting={"Bienvenido estos son nuestro productos"} />} />
          <Route  path='/product/:productId' element={<ItemDetailContainer />} />
          <Route  path='/cart' element={<Cart />} />
        </Routes>
      </CustomProvider>
    </BrowserRouter>
  );
}

export default App;
