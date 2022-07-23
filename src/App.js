import './App.css';
import Navbar from './Componentes/Navbar/Navbar';
import ItemListContainer from './Componentes/ItemListContainer/ItemListContainer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <ItemListContainer greeting="Carrito de tienda"/>
    </div>
  );
}

export default App;
