import { BrowserRouter as Router } from 'react-router-dom';
import Menus from './components/Menus';
import './App.scss';

function App() {
  return (
    <Router>
      <Menus />
    </Router>
  );
}

export default App;
