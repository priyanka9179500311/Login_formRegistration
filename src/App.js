//import logo from './logo.svg';
import './App.css';
import Login from './component/Login';
import Home from './component/Home';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import {BrowserRouter,Route,Switch,Link} from 'react-router-dom';

const App=()=>{
  return (
    <div>
      
      <BrowserRouter>
        <Link to="home">Home</Link>
        <Link to="/">Login</Link>
        <Switch>
          <Route path="/home"><Home/></Route>
          <Route path="/"><Login/></Route>
        </Switch>
       
      </BrowserRouter>
    </div>
  );
}

export default App;
