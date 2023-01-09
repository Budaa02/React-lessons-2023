import logo from './logo.svg';
import './App.css';
import Button from "./components/Button"
import AlertButton from './components/AlertButton';
import Toolbar from './components/Toolbar';
import ToolbarNext from './components/ToolbarNext';
import ParentToolbar from './components/ParentToolbar';
import SignUp from './components/SignUp';



function App() {
  return (
  <div className="App">
    <h1>Day-38-React-Events</h1>
    <Button/>
    <Toolbar/>
    <ToolbarNext/>
    <ParentToolbar/>
    <SignUp/>
  </div>
  );
}

export default App;
