import logo from './logo.svg';
import './App.css';
import Bai1  from './components/bai1';

function App() {
  return (
    <div className="App">
      <div className='wrap'>
      <Bai1 text='Cancel'/>
      <Bai1 text='Sell'/>
      <Bai1 text='Delist'/>
      <Bai1 text='OK'/>
      <Bai1 text='Create'/>
      </div>
    </div>
  );
}

export default App;
