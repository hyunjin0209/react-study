import Header from "./component/header";
import Footer from "./component/footer";
import Contents1 from "./component/contents1";
import Contents2 from "./component/contents2";
import "./css/header_footer.css";
import Contents3 from "./component/contents3";
import Contents4 from "./component/contents4";
import Contents5 from "./component/contents5";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route exact path="/component" element={<Contents1 />} />
          <Route exact path="/component2" element={<Contents2 />} />
          <Route exact path="/component3" element={<Contents3 />} />
          <Route exact path="/component4" element={<Contents4 />} />
          <Route exact path="/component5" element={<Contents5 />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
