/**
 * App.jsx
 *
 * Purpose:
 * Defines the shared application shell and lazy-loaded route table.
 *
 * Used By:
 * src/main.jsx
 */
import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import { Spinner } from "@fluentui/react-components";

const Home = lazy(() => import("./pages/Home"));
const Insight = lazy(() => import("./pages/Insight"));
const Article = lazy(() => import("./pages/Article"));
const Contact = lazy(() => import("./pages/Contact"));
const Assessment = lazy(() => import("./pages/Assessment"));
const QSchool = lazy(() => import("./pages/QSchool"));
const QUMKM = lazy(() => import("./pages/QUMKM"));
const NotFound = lazy(() => import("./pages/NotFound"));

function App() {
  return (
    <div className="app-shell">
      <ScrollToTop />
      <a className="skip-link" href="#main-content">Lewati ke Konten Utama</a>
      <Navbar />
      <Suspense fallback={<main id="main-content" className="route-loading" tabIndex="-1" role="status"><Spinner label="Memuat halaman" /></main>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/insight" element={<Insight />} />
            <Route path="/insight/:slug" element={<Article />} />
            <Route path="/article/:slug" element={<Article />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/assessment" element={<Assessment />} />
            <Route path="/qschool" element={<QSchool />} />
            <Route path="/qumkm" element={<QUMKM />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
      </Suspense>
      <Footer />
    </div>
  );
}

export default App;
