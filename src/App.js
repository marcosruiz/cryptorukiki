import './App.css';
import CoinList from './pages/CoinList';
import CoinDetail from './pages/CoinDetail';
import {Link, Route} from "wouter"

function App() {
  return (
    <div className="contanier mx-auto p-6 bg-gray-500">
      <Link to='/all'>Zona minado</Link>
      <Route component={CoinList} path="/all"/>
      <Route component={CoinDetail} path="/coin/:id"/>
    </div>
  );
}

export default App;
