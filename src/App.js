import './App.css';
import { ItemDetailContainer } from './Components/Containers/ItemDetailContainer/ItemDetailContainer';
import { ItemListContainer } from './Components/Containers/ItemListContainer';
import { NavBar } from './Components/Header/NavBar';

function App() {
  return (
    <div>
      <NavBar />

      <ItemListContainer greting="Lampara " />
      <ItemDetailContainer />
    </div>
  );
}

export default App;
