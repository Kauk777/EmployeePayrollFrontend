import './App.css'
import AddUpdateEmployee from './components/AddUpdateEmployee'
import Footer from './components/Footer'
import Header from './components/Header';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom'
import GetEmployee from './components/GetEmployee';

function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <Switch>
          <Route path="/" exact component={GetEmployee}></Route>
          <Route path="/add-update-employee/:id" component={AddUpdateEmployee}></Route>
        </Switch>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
