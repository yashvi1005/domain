import './App.css';
import Tabled from './components/Tabled';
import Header from './components/Header';
import style from "./components/table.module.css"

function App() {
  return (
    <>
    <Header />
    <div className="App">
      <Tabled/>
    </div>
    </>
  );
}

export default App;
