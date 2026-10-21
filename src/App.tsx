import Article from "./components/Article";
import Biography from "./components/Biography";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Products from "./components/Products";
import TrustAndFeatures from "./components/TrustAndFeatures";


function App() {
  return (
    <div className="relative">
      <Navbar />
      <Biography />
      <Article />
      <Products />
      <TrustAndFeatures/>
      <Footer />
    </div>
  );
}

export default App;
