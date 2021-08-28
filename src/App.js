import './App.css';
import Header from "./components/Header/Header";
import Shop from "./pages/Shop/Shop";
import {Route, Switch, useHistory, useLocation} from "react-router-dom";
import Product from "./pages/Product/Product";
import Footer from "./components/Footer/Footer";
import {Cart as CartWidgets} from "./components/Cart/Cart";
import Home from "./pages/Home/Home";
import {useEffect} from "react";
import {useDispatch} from "react-redux";
import {loadProducts} from "./redux/reducers/productReducer";
import Cart from "./pages/Cart/Cart";
import AddProduct from "./components/AddProduct/AddProduct";
import Add from "./pages/Add/Add";
import Ticket from "./pages/Ticket/Ticket";
import HeaderLoader from "./components/HeaderLoader/HeaderLoader";
import {changePage} from "./redux/reducers/pageReducer";
import {AnimatePresence} from "framer-motion";

function App() {
  const location = useLocation()
  const dispatch = useDispatch()

  useEffect(() => {
    loadProducts()(dispatch)
  }, [])

  useEffect(() => {
    changePage()(dispatch)
  }, [location.pathname])

  return (
    <div className="App">
      <HeaderLoader/>
      <Header/>
      <AnimatePresence>
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
          <Route path="/add">
            <Add/>
          </Route>
          <Route path="/ticket/:ticketId">
            <Ticket/>
          </Route>
        </Switch>
        <CartWidgets key="cart-widget"/>
      </AnimatePresence>
      <AddProduct/>
      <Footer/>
    </div>
  );
}

export default App;
