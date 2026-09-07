import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Spinner } from "@fluentui/react-components";

const Home = lazy(() => import("./pages/Home"));
const Insight = lazy(() => import("./pages/Insight"));
const Article = lazy(() => import("./pages/Article"));
const Contact = lazy(() => import("./pages/Contact"));
const QSchool = lazy(() => import("./pages/QSchool"));
const QUMKM = lazy(() => import("./pages/QUMKM"));

function App() {
  return (
    <div className="app-shell">
      <a className="skip-link" href="#main-content">Lewati ke Konten Utama</a>
      <Navbar />
      <div id="main-content">
        <Suspense fallback={<div className="route-loading" role="status"><Spinner label="Memuat halaman" /></div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/insight" element={<Insight />} />
            <Route path="/insight/:slug" element={<Article />} />
            <Route path="/article/:slug" element={<Article />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/qschool" element={<QSchool />} />
            <Route path="/qumkm" element={<QUMKM />} />
          </Routes>
        </Suspense>
      </div>
      <Footer />
    </div>
  );
}

export default App;
