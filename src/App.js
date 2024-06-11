import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import First from './pages/First';
import Second from './pages/Second';
import Third from './pages/Third';
import Four from './pages/Four';


function App() {
  return (
    <>
      <Router>
        {/* this write because we show in all page  */}
        <div className="navbar">
          <ol>
            <li> <Link to="/"> Hello world </Link>  </li>
            <li> <Link to="/second"> function / component  (Props)</Link>  </li>
            <li> <Link to="/third">Conditional Rendring</Link>  </li>
            <li> <Link to="/four">EVENT (Keyboard and mouse )</Link>  </li>
          </ol>
        </div>
        {/* this write because we show in all page  */}


        <Routes>
          <Route path="/" exact element={<First />} />
          <Route path="/second" exact element={<Second />} />
          <Route path="/third" exact element={<Third />} />
          <Route path="/four" exact element={<Four />} />

          {/* Route not fund then use */}
          <Route path='*' element={<First />} />
          {/* Route not fund then use */}
        </Routes>
      </Router>

    </>
  );
}

export default App;
