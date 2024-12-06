import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home";
import Footer from "./components/Footer/Footer";
import Holidays from "./pages/Holidays";
import PackageDeals from "./pages/Deals";
import PopularDestinations from "./pages/Destinations";

const App = () => {
  return (
    <div className="min-h-screen cursor-pointer">
      <Router>
        <Navbar />
        <div>
          <section id="home">
            <Home />
          </section>
          <section id="holidays">
            <Holidays />
          </section>
          <section id="deals">
            <PackageDeals />
          </section>
          <section id="destinations">
            <PopularDestinations />
          </section>
        </div>
        <section id="footer">
          <Footer />
        </section>
      </Router>
    </div>
  );
};

export default App;
