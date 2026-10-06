import Article from "./assets/components/Article";
import Biography from "./assets/components/Biography";
import Footer from "./assets/components/Footer";
import Navbar from "./assets/components/Navbar";
import Products from "./assets/components/Products";

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
