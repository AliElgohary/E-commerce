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

function App() {
  return (
    <div div className="min-h-screen flex flex-col justify-between" style={{ backgroundColor: "#111827" }}>
      <BrowserRouter>
        <Navbar></Navbar>
        <Switch>
          <Route exact path={"/"} component={Home} />
          <Route exact path={"/products"} component={Products} />
          <Route path="/cart" component={withAuth(Cart)} />
          <Route exact path={"/login"} component={LoginForm} />
          <Route exact path={"/register"} component={RegistrationForm} />
          <Route path={"**"} component={NotFound}></Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
