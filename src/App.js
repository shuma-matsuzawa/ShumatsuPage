import "./App.css";
import BlogPage from "./components/BlogPage";
import Header from "./components/Header";
import HomePage from "./components/HomePage";
import CreativePage from "./components/CreativePage";
import Footer from "./components/Footer";
import SNS from "./components/SNS";
import BlockYoutube from "./components/BlockYoutube";
import CostCalculatorPage from "./components/CostCalculatorPage";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom"

function App() {
  return (
    <Router>

    <div className="App">

      <Header />

    <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/blog" element={<BlogPage />} />
    <Route path="/MySNS" element={<SNS />} />
    <Route path="/MyArts" element={<CreativePage />} />
    <Route path="/BlockYoutubeApp" element={<BlockYoutube/>}/>
    <Route path="/CostCalculatorPage" element={<CostCalculatorPage/>}/>
    </Routes>

    <Footer />
  

    </div>
    </Router>
  );
}

export default App;
