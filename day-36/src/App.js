import logo from './logo.svg';
import './App.css';
import MainMenu from "./components/MainMenu"
import Button from "react-bootstrap/Button"

function App() {
  return (
    <div className="App">
      <div className="menu">
        <MainMenu/>
      </div>


      <h1>React Bootstrap Component</h1>
      <Button variant="primary">Primary</Button>
    </div>
  );
}

export default App;
