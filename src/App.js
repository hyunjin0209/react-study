import Header from "./component/header";
import Footer from "./component/footer";
import Contents1 from "./component/contents1";
import Contents2 from "./component/contents2";
import "./css/header_footer.css";
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
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
