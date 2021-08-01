import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Mynavbar from './components/mynavbar.component';
import Home from './components/home.component';
import Suppliers from './components/suppliers.component';
import AddSupplier from './components/addsupplier.component';
import EditSupplier from './components/editsupplier.component';
import { useState } from 'react';
import LoginSignup from './components/loginsignupmodal.component';

function App() {
  const [showLoginModal, setShowLoginModal] = useState(false);
  const toggleLoginModal = () => { setShowLoginModal(!showLoginModal) };

  return (
    <BrowserRouter>
      <Container>
        <Mynavbar toggleLoginModal={toggleLoginModal}/>
        <Switch>
          <Route path="/home" component={Home} />
          <Route exact path="/suppliers" component={Suppliers} />
          <Route path="/suppliers/add" component={AddSupplier} />
          <Route path="/suppliers/edit/:id" component={EditSupplier} />
          <Redirect to="/home" />
        </Switch>
        <LoginSignup show={showLoginModal} toggleModal={toggleLoginModal} />
      </Container>
    </BrowserRouter>
  );
}

export default App;
