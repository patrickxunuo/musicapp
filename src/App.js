import './App.css';
import Header from "./components/Header/Header";
import Shop from "./pages/Shop/Shop";
import {Route, BrowserRouter as Router, Switch, useLocation} from "react-router-dom";
import Product from "./pages/Product/Product";
import Footer from "./components/Footer/Footer";
import Cart from "./components/Cart/Cart";

function App() {

  return (
    <div className="App">
      <Router>
        <Header/>
        <Switch>
          <Route path="/shop">
            <Shop/>
          </Route>
          <Route path="/product/:id">
            <Product/>
          </Route>
        </Switch>
        <Footer/>
        <Cart/>
      </Router>
    </div>
  );
}

export default App;
