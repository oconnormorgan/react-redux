import { BrowserRouter as Router, Switch, Route} from "react-router-dom";

import Accueil from "./components/Accueil";
import Contact from "./components/Contact";

import './App.css';

function App() {
  return (
      <Router>
        <div className="App">
          <Switch>
            <Route path="/" exact component={Accueil} />
            <Route path="/contact" component={Contact} />
          </Switch>
        </div>
      </Router>
  );
}

export default App;
