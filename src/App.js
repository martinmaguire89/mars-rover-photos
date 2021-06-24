import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Home from './components/pages/Home';
import About from './components/pages/About';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar>
          <div className="container"></div>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
          </Switch>
        </Navbar>
      </div>
    </Router>
  );
}

export default App;
