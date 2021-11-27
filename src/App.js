
import './App.css';

import Login from './pages/LoginIndex';
import Home from './pages/Inicio';
//import Footer from './pages/Footer';
import Header from './pages/Header';
import Registro2 from './pages/Registro';
import ListPoem from './pages/ListPoems';
import ViewPoem from './pages/ViewPoem';
import Admin from './pages/Admin';
import {
  BrowserRouter as Router,
  Switch,
  Route
}from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <Header />  
        <Switch>
          <Route exact path="/lpo" component={ListPoem}/>
          <Route exact path="/view" component={ViewPoem}/>
          <Route exact path="/home" component={Home}/>
          <Route exact path="/user" component={Registro2}/>
          <Route exact path="/adm" component={Admin}/>
          <Route path="/" component={Login}/>
        </Switch>
        
      </div>
    </Router>
  );
}

export default App;
