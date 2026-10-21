import Article from "./components/Article";
import Biography from "./components/Biography";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Products from "./components/Products";


function App() {
  return (
    <div className="relative">
      <Navbar />
      <Biography />
      <Article />
      <Products />
      <Footer />
    </div>
  );
}

export default App;
