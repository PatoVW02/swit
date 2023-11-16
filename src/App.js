import { Routes, Route, BrowserRouter } from "react-router-dom";
import Layout from "./layout";
import Home from "./views/home";
import Speakers from "./views/speakers/Speakers";
import Registration from "./views/registration/Registration";
import Contact from "./views/contact";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <Home />
            </Layout>
          }
        />
        <Route
          path="/speakers"
          element={
            <Layout>
              <Speakers />
            </Layout>
          }
        />
        
        <Route
          path="/registration"
          element={
            <Layout>
              <Registration />
            </Layout>
          }
        />
        <Route
          path="/contact"
          element={
            <Layout>
              <Contact />
            </Layout>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
