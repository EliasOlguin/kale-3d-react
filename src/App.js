import './App.css';
import { ItemListContainer } from './Components/Containers/ItemListContainer';
import { NavBar } from './Components/Header/NavBar';

function App() {
  return (
    <div>
      <NavBar />

      <ItemListContainer greting="Lampara " />
    </div>
  );
}

export default App;
