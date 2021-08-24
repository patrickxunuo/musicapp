import './App.css';
import Header from "./components/Header/Header";
import Shop from "./pages/Shop/Shop";
import {Route, Switch, useLocation} from "react-router-dom";
import Product from "./pages/Product/Product";
import Footer from "./components/Footer/Footer";
import {Cart as CartWidgets} from "./components/Cart/Cart";
import Home from "./pages/Home/Home";
import {useEffect} from "react";
import {useDispatch} from "react-redux";
import {loadProducts} from "./redux/reducers/productReducer";
import Cart from "./pages/Cart/Cart";

function App() {
  const location = useLocation()
  const dispatch = useDispatch()

  useEffect(() => {
    loadProducts()(dispatch)
  }, [])

  return (
    <div className="App">
      <Header/>
      <Switch location={location} key={location.pathname}>
        <Route path="/" exact>
          <Home/>
        </Route>
        <Route path="/shop">
          <Shop/>
        </Route>
        <Route path="/song/:id">
          <Product/>
        </Route>
        <Route path="/cart">
          <Cart/>
        </Route>
      </Switch>
      <CartWidgets key="cart-widget"/>
      <Footer/>
    </div>
  );
}

export default App;
