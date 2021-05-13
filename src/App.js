 import './App.css';
 import { Route, Switch } from "react-router-dom";
import Login from './pages/login'
import Dahboard from './pages/dahboard'
 
function App() {
  return (
    <>
    <Switch>  
         <Route path="/" exact  component={Login} />
         <Route path="/admin"   component={Dahboard} />
     </Switch>


</>
  );
}

export default App;
