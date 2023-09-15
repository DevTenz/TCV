import NavBar from "./components/Nav";
import Home from "./pages/Home";
import Html from "./pages/Html";
import Footer from "./components/footer";
import ScroolToTop from "./functions/Scrolltotop";
import { HashRouter, Route } from "react-router-dom";

function App() {
  return (
    <div className="flex justify-center">
      <div className="max-w-screen-2xl w-screen">
        <HashRouter>
          <ScroolToTop />
          <NavBar />
          <Route path="/" Component={Home} />
          <Route path="/html" Component={Html} />
          <Footer />
        </HashRouter>
      </div>
    </div>
  );
}

export default App;
