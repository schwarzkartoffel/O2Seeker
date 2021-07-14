import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Mynavbar from './components/mynavbar.component';
import Home from './components/home.component';
import Suppliers from './components/suppliers.component';
import AddSupplier from './components/addsupplier.component';
import EditSupplier from './components/editsupplier.component';

function App() {
  return (
    <BrowserRouter>
      <Container>
        <Mynavbar />
        <Switch>
          <Route path="/home" component={Home} />
          <Route exact path="/suppliers" component={Suppliers} />
          <Route path="/suppliers/add" component={AddSupplier} />
          <Route path="/suppliers/edit/:id" component={EditSupplier} />
          <Redirect to="/home" />
        </Switch>
      </Container>
    </BrowserRouter>
  );
}

export default App;
