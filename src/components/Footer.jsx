import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-main">
        <div><Link className="brand footer-brand" to="/"><span className="brand-mark">Q</span><span>Solution</span></Link><p>Mitra Transformasi Digital untuk Sekolah dan UMKM Indonesia.</p></div>
        <div className="footer-links"><div><strong>Jelajahi</strong><Link to="/qschool">Untuk Sekolah</Link><Link to="/qumkm">Untuk UMKM</Link><Link to="/insight">Insight</Link></div><div><strong>Hubungi</strong><Link to="/contact">Konsultasi</Link><a href="mailto:hello@qsolution.id">hello@qsolution.id</a><span>Indonesia</span></div></div>
      </div>
      <div className="container footer-bottom"><span>© {new Date().getFullYear()} QSolution. All rights reserved.</span><span>Made with purpose.</span></div>
    </footer>
  );
}
