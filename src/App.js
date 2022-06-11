import {BrowserRouter,Routes,Route} from 'react-router-dom'

import Home from './pages/Home';
import Catalog from './pages/Catalog';
import Cart from './pages/Cart';
import Product from './pages/Product';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/catalog/:slug' element={<Product />}/>
            <Route path='/catalog' element={<Catalog />} />
            <Route path='/cart' element={<Cart />} />
          </Routes>
        <Footer />
        {/* productviewmodal */}
      </BrowserRouter>
    </div>
  );
}

export default App;
