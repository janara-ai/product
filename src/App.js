import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Home } from "./components/Home";
import { Instructions } from "./components/Instructions";
import { Navigation } from "./components/Navigation";
import { NotFoundPage } from "./components/NotFoundPage";
import { Product } from "./components/Products";
import { Login } from "./components/Login";
import { useState } from "react";

function App() {
  const [menuObject, setMenuObject] = useState("");
  const getMenuObject = (menu) => setMenuObject(menu);
  return (
    <div>
      <Navigation />
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/instructions"
            element={<Instructions menuObject={menuObject} />}
          />
          <Route path="*" element={<NotFoundPage />} />
          <Route
            path="/products"
            element={<Product getMenuObject={getMenuObject} />}
          />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
