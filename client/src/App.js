import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js"
import  Navbar  from './component/Navbar';
import  Home  from './component/Home';
import  Register  from './component/Register';
import {Switch ,Route} from 'react-router-dom';
import Edit from './component/Edit';
import Details from './component/Details';

function App() {
  return (
    <>

    <Navbar/>
    <Switch>
      <Route exact path="/" component={Home}></Route>
      <Route exact path="/register" component={Register}></Route>
      <Route exact path="/edit/:id" component={Edit}></Route>
      <Route exact path="/view/:id" component={Details}></Route>
         </Switch>
    </>
  );
}

export default App;
