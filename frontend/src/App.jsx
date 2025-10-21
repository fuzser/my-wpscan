import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";

import Home from "./pages/home";
/* import Contact from "./pages/Contact"; */
/* import Terms from "./pages/Terms"; */
import Privacy from "./pages/Privacy";

export default function App() {
  return (
    <Router>
      <Header />
      {/* 主区域 */}
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/contact" element={<Contact />} />  */}
          {/* <Route path="/terms" element={<Terms />} /> */}
          <Route path="/privacy" element={<Privacy />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}
