import "./App.css";
import { Route, BrowserRouter } from "react-router-dom";
import { Switch } from "react-router-dom/cjs/react-router-dom.min";
import Home from "./pages/Home";
import Navbar from "./components/NavBar";
import NotFound from "./pages/NotFound";
import LoginForm from "./components/LoginForm";
import Products from "./pages/Products";
import Cart from "./pages/Cart";
import RegistrationForm from "./pages/Register";
import withAuth from "./utils/withAuth";
import Orders from "./pages/Orders";

function App() {
  return (
    <div className="App" style={{ backgroundColor: "#f0f2f5", display: "flex", flexDirection: "column" }}>
      <BrowserRouter>
        <Navbar />
        <div style={{ flex: 1, paddingTop: "10px" }}>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/products" component={Products} />
            <Route path="/cart" component={withAuth(Cart)} />
            <Route path="/orders" component={withAuth(Orders)} />
            <Route exact path="/login" component={LoginForm} />
            <Route exact path="/register" component={RegistrationForm} />
            <Route path="**" component={NotFound} />
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
