import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import AboutLink from "./components/AboutLink";
import { FeedbackProvider } from "./context/feedbackContext";
import Footer from "./components/shared/Footer";

function App() {
  return (
    <FeedbackProvider>
      <div className="appContainer">
        <Router>
          <Header />
          <div className="container">
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
            </Routes>
          </div>
          <AboutLink />
          <Footer />
        </Router>
      </div>
    </FeedbackProvider>
  );
}

export default App;
