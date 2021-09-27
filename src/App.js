
import './App.css';
import {useEffect} from 'react';
import { allHeroes } from './components/Redux/actions';
import LoginForm from './components/LoginForm';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import HeroDetail from './components/HeroDetail';
import { useDispatch } from 'react-redux';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(allHeroes())
  }, [])
  return (
   
    <div className="App">
      
        <Router>
          <Route exact path='/home' component={Home} />
          <Route exact path='/' component={LoginForm} />
          <Route exact path='/detail/:id' component={HeroDetail} />
        </Router>
    </div>
  );
}

export default App;
