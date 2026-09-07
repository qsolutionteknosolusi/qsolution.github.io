import { Link } from "react-router-dom";
import SEO from "../components/SEO";
import CTASection from "../components/CTASection";

export default function QUMKM() {
  return (
    <>
      <SEO title="Solusi Digital untuk UMKM" description="QSolution membantu UMKM memahami kondisi bisnis dan menentukan prioritas transformasi digital yang tepat." path="/qumkm" />
      <main><section className="product-hero product-umkm section"><div className="container product-grid"><div><p className="eyebrow">QUMKM / Business</p><h1>Bisnis kecil,<br /><em>dampak besar.</em></h1><p>Tools, insight, dan pendampingan digital untuk membantu UMKM bekerja lebih rapi, melayani lebih baik, dan tumbuh berkelanjutan.</p><Link className="button button-primary" to="/contact">Mulai perjalanan →</Link></div><div className="product-visual umkm-visual"><div className="umkm-stat"><small>Monthly growth</small><strong>+28.4%</strong><span>↗ from last month</span></div><div className="umkm-bars"><i /><i /><i /><i /><i /><i /></div></div></div></section><section className="section"><div className="container split-heading"><div><p className="eyebrow">Built for momentum</p><h2>Lebih banyak waktu untuk hal yang penting.</h2></div><p>Kami menyederhanakan proses digital agar pemilik usaha bisa fokus pada pelanggan, produk, dan pertumbuhan.</p></div><div className="container product-points"><div><b>01</b><h3>Rapi sejak awal</h3><p>Kelola data dan proses bisnis dengan cara yang sederhana dan konsisten.</p></div><div><b>02</b><h3>Keputusan lebih cepat</h3><p>Ubah angka harian menjadi insight yang membantu menentukan langkah.</p></div><div><b>03</b><h3>Tumbuh bersama</h3><p>Pendampingan praktis yang mengikuti ritme dan kebutuhan bisnis Anda.</p></div></div></section><CTASection /></main>
    </>
  );
}
