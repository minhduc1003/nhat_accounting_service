import { Route, Routes } from "react-router-dom";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import "./animation.css";
import { Suspense, lazy, useEffect } from "react";
import ScrollTop from "./Components/ScrollTop";
const HomePage = lazy(() => import("./page/HomePage"));
const Services = lazy(() => import("./page/Services"));
const Contact = lazy(() => import("./page/Contact"));
const Blog = lazy(() => import("./page/Items"));
const BlogDetail = lazy(() => import("./page/Blogdetail"));
function App() {
  useEffect(() => {
    document.title = "marketting";
  }, []);
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Header></Header>}>
            <Route path="/" element={<HomePage></HomePage>}></Route>
            <Route path="/Blogs" element={<Blog></Blog>}></Route>
            <Route path="/Contact" element={<Contact></Contact>}></Route>
            <Route path="/Services" element={<Services></Services>}></Route>
            <Route path="/:slug" element={<BlogDetail></BlogDetail>}></Route>
          </Route>
        </Routes>
      </Suspense>
      <Footer></Footer>
    </>
  );
}

export default App;
