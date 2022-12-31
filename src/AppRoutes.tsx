import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom"
import Navbar from './components/Navbar';
import Admin from './pages/Admin';
import Catalog from './pages/Catalog';
import Home from './pages/Home';
import ProductDetails from './pages/ProductDetails';

     // {//<Redirect from="/admin" to="/admin/products" exact />}

const AppRoutes = () => (
  <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/products" element={<Catalog />} />
      <Route path="/products/:productId" element={<ProductDetails />} />
      <Route path="/admin" element={<Admin />} />

    </Routes>
  </BrowserRouter>
);

export default AppRoutes;
