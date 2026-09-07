import { Link } from "react-router-dom";
import SEO from "../components/SEO";
import CTASection from "../components/CTASection";

export default function QSchool() {
  return (
    <>
      <SEO title="Solusi Digital untuk Sekolah" description="QSolution membantu sekolah memahami kesiapan digital dan membangun roadmap transformasi yang realistis." path="/qschool" />
      <main id="main-content" tabIndex="-1"><section className="product-hero product-school section"><div className="container product-grid"><div><p className="eyebrow">QSchool / Education</p><h1>Belajar untuk<br /><em>masa depan.</em></h1><p>Ekosistem pembelajaran yang membuat coding, AI, dan kemampuan abad 21 terasa relevan, menyenangkan, dan bisa diakses siapa saja.</p><Link className="button button-primary" to="/contact">Jelajahi kolaborasi →</Link></div><div className="product-visual"><span>Learning is a journey</span><div className="journey-line"><i /><i /><i /></div><b>curious<br />capable<br />confident</b></div></div></section><section className="section"><div className="container split-heading"><div><p className="eyebrow">What we believe</p><h2>Rasa ingin tahu adalah awal dari perubahan.</h2></div><p>QSchool hadir untuk membantu sekolah dan organisasi pendidikan merancang pengalaman belajar yang mempersiapkan peserta didik untuk dunia yang terus berubah.</p></div><div className="container product-points"><div><b>01</b><h3>Future skills</h3><p>Coding, computational thinking, AI literacy, dan creative problem solving.</p></div><div><b>02</b><h3>Teacher enablement</h3><p>Mendampingi pendidik dengan tools dan metode yang mudah dipraktikkan.</p></div><div><b>03</b><h3>Learning ecosystem</h3><p>Menghubungkan sekolah, orang tua, dan komunitas dalam satu perjalanan.</p></div></div></section><CTASection /></main>
    </>
  );
}
