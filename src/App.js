import './App.css';
import { ItemDetailContainer } from './Components/Containers/ItemDetailContainer/ItemDetailContainer';
import { ItemListContainer } from './Components/Containers/ItemListContainer';
import { NavBar } from './Components/Header/NavBar';
import { BrowserRouter as Router,Switch, Route,Link, BrowserRouter, Routes} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Cart from "./Components/Cart/Cart"


function App() {
  return (
      <BrowserRouter>
      
        <NavBar />
        <Routes>
          <Route  path='/' element={<ItemListContainer greeting={"Bienvenido "} />} />
          <Route  path='/categories/:categoryId' element={<ItemListContainer greeting={"Bienvenido "} />} />
          <Route  path='/product/:productId' element={<ItemDetailContainer />} />
          <Route  path='/cart' element={<Cart />} />
        </Routes>
        {/* <ItemListContainer />
        <ItemDetailContainer /> */}
      </BrowserRouter>
  );
}

export default App;
