import NavBar from "./components/Nav";
import Home from "./pages/Home";
import Footer from "./components/footer";
import ScrollToTop from "./functions/Scrolltotop";
import Loadinggif from "./pages/loading";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { Suspense, lazy } from "react";

const Html = lazy(() => import("./pages/Html"));

function App() {
  return (
    <div className="flex justify-center">
      <div className="max-w-screen-2xl w-screen">
        <Suspense fallback={<Loadinggif />}>
          <Router>
            <NavBar />
            <ScrollToTop />
            <Routes>
              <Route path="/" element={<Home />}></Route>
              <Route path="/html" element={<Html />}></Route>
            </Routes>
          </Router>
          <Footer />
        </Suspense>
      </div>
    </div>
  );
}

export default App;
