
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Components/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import NoMatch from './Components/NoMatch/NoMatch';
import CountryDetail from './Components/CountryDetail/CountryDetail';


function App() {
  return (
   <Router>
     <Switch>
       <Route path="/home">
       <Home></Home>
       </Route>
       <Route path="/country/:countryCapital">
          <CountryDetail></CountryDetail>
       </Route>
       <Route exact path="/">
       <Home></Home>
       </Route>
       <Route path="*">
       <NoMatch></NoMatch>
       </Route>
       
     </Switch>
   </Router>
  );
}

export default App;
