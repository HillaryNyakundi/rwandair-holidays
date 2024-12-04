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
          <section>
            <Holidays />
          </section>
          <section>
            <PackageDeals />
          </section>
          <section>
            <PopularDestinations />
          </section>
        </div>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
