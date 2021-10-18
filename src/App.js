import Nav from './components/Nav';
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import {Provider} from "react-redux";
import Cart from './components/Cart';
import Home from './components/Home';
import store from './store';
import Details from './components/Details';


function App() {
  return (
    <Router>
    <Provider store={store}>
     <Nav/>
     <Route path="/cart" exact  component={Cart}/> 
     <Route path="/" exact component={Home}/> 
     
     <Route path="/details/:id" exact  component={Details}/> 
     </Provider>
    </Router>

  );
}

export default App;
