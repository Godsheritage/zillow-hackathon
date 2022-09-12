import Home from "./home/Home";
import ZillowSave from "./save/ZillowSave";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/zsave" element={<ZillowSave />} />
      </Routes>
    </Router>
  );
};

export default App;
