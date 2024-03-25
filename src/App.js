import logo from './logo.svg';
import './App.css';
import Navbar from './components/header/Navbar';
import Hero from './components/hero/Hero';
import Prodacts from './components/prodacts/Prodacts';
import Main from './components/main/Main';
import Footer from './components/footer/Footer'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Prodacts />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
