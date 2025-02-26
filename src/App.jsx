import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './component/Home';
import Paste from './component/Paste';
import ViewPaste from './component/ViewPaste';
import Navbar from './component/Navbar';

function App() {
  return (
    <Router>
      <div className="bg-black min-h-screen text-white">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pastes" element={<Paste />} />
          <Route path="/pastes/:id" element={<ViewPaste />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
