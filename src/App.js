import { Routes, Route, BrowserRouter } from "react-router-dom";
import Layout from "./layout";
import Home from "./views/home";
import Speakers from "./views/speakers/Speakers";
import Registration from "./views/registration/Registration";
import Contact from "./views/contact";

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/speakers" element={<Speakers />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
