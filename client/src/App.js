import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap";
import Home from "./screens/Home";
import Cart from "./screens/Cart";
import Login from "./screens/Login";
import Register from "./screens/Register";
import Order from "./screens/Order";
import Admin from "./screens/Admin";
import EditPizza from "./screens/EditPizza";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/cart" exact component={Cart} />
          <Route path="/login" exact component={Login} />
          <Route path="/register" exact component={Register} />
          <Route path="/orders" exact component={Order} />
          <Route path="/admin" exact component={Admin} />
          <Route path="/admin/edit/:pizzaid" exact component={EditPizza} />
        </Switch>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
