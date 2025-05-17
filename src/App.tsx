import { Route, Routes } from "react-router-dom";

import IndexPage from "@/pages/index";
import DocsPage from "@/pages/about";
import PricingPage from "@/pages/services";
import BlogPage from "@/pages/portfolio";
import AboutPage from "@/pages/contact";

function App() {
  return (
    <Routes>
      <Route element={<IndexPage />} path="/" />
      <Route element={<DocsPage />} path="/about" />
      <Route element={<PricingPage />} path="/services" />
      <Route element={<BlogPage />} path="/portfolio" />
      <Route element={<AboutPage />} path="/contact" />
    </Routes>
  );
}

export default App;
