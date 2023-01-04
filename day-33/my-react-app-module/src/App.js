import logo from './up-arrow-icon.svg';
import './App.css';
import human from "./human-icon.svg"

function App() {
  return (
    <div className="App container">
      <h1 className="bg-dark">Popular Product</h1>
      <hr></hr>
      <div className="app-card">
        <img src="https://cdn-icons-png.flaticon.com/512/1160/1160358.png" />
        <div className="app-card-append">
          <div className="arrow">
            <img src={logo} className="App-logo" alt="logo" />
            <p>55</p>
          </div>
          <p>Haught or Naught</p>
          <p>Hight-minded or absent-minded?You decide.</p>

          <div className="submit">
            <p className="submit-1">Submitted by:</p>

            <img src={human} className="learn" alt="human" />
          </div>
        </div>
      </div>
      {/* <header className="App-header">
     
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
