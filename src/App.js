import './App.css';
import { ItemListContainer } from './Components/Containers/ItemListContainer';
import { NavBar } from './Components/Header/NavBar';

function App() {
  return (
    <div>
      <NavBar />

      <ItemListContainer />
    </div>
  );
}

export default App;
