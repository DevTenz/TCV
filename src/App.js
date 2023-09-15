import NavBar from "./components/Nav";
import Home from "./pages/Home";
import Html from "./pages/Html";
import Footer from "./components/footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScroolToTop from "./functions/Scrolltotop";

function App() {
  return (
    <div className="flex justify-center">
      <div className="max-w-screen-2xl w-screen">
        <NavBar />
        <Router>
          <ScroolToTop />
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/html" element={<Html />}></Route>
          </Routes>
        </Router>
        <Footer />
      </div>
    </div>
  );
}

export default App;
