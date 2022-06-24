import './App.css';
import { ItemListContainer } from './Components/Containers/ItemListContainer';
import { NavBar } from './Components/Header/NavBar';

function App() {
  return (
    <div>
      <NavBar />

      <ItemListContainer greting="Hola, estos son los productos " />
    </div>
  );
}

export default App;
