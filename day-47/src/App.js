import logo from './logo.svg';
import './App.css';
import Counter from './component/Counter';




function App() {
  return (
    <div className="App">
      <div className='counter'>
         <Counter className="Hover"/>
      </div>
     
      <div className='counter'>
        <Counter className="Hover"/>
      </div>
      
    </div>
  );
}

export default App;
