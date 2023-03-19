
import './App.css';
import FavouriteCoffee from './components/FavouriteCoffee';
import { Footer } from './components/Footer';
import { Hero } from './components/Hero';
import NavBar from './components/NavBar';
import { NewsLetter } from './components/NewsLetter';
import Shop from './components/shop';

function App() {
  return (
    <div>
      <NavBar />
      <Hero rating={4} />
      <Shop />
      <FavouriteCoffee />
      <NewsLetter />
      <Footer />
    </div>
  );
}

export default App;
