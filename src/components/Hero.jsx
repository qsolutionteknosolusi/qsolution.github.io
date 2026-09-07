import { Link } from "react-router-dom";
import { Button, Card } from "@fluentui/react-components";
import {
  ArrowRight24Regular,
  CheckmarkCircle24Filled,
  PlayCircle24Regular,
  Warning24Filled,
} from "@fluentui/react-icons";

export default function Hero() {
  return (
    <section className="hero section" aria-labelledby="hero-heading">
      <div className="container hero-grid">
        <div className="hero-copy">
          <p className="eyebrow">🌱 Mitra Transformasi Digital untuk Sekolah dan UMKM Indonesia</p>
          <h1 id="hero-heading">Jangan Biarkan Sekolah atau Bisnis Anda Tertinggal Saat Dunia Bergerak Lebih Cepat Secara Digital</h1>
          <p className="hero-description">
            Setiap keputusan digital yang kurang tepat dapat menghabiskan waktu, biaya, dan peluang pertumbuhan yang berharga.
            QSolution membantu sekolah dan UMKM memahami kondisi organisasi saat ini, mengukur tingkat kesiapan digital,
            dan menentukan langkah transformasi yang paling tepat sebelum berinvestasi pada teknologi.
          </p>
          <div className="button-row">
            <Button
              appearance="primary"
              as={Link}
              className="button button-primary"
              icon={<ArrowRight24Regular />}
              to="/contact"
            >
              <span aria-hidden="true">🚀</span>
              <span>Cek Skor Kesiapan Digital Gratis</span>
            </Button>
            <Button
              appearance="subtle"
              as="a"
              className="button button-quiet"
              href="#solution"
              icon={<PlayCircle24Regular />}
            >
              <span aria-hidden="true">📅</span>
              <span>Jadwalkan Konsultasi Awal</span>
            </Button>
          </div>
          <div className="hero-trust" aria-label="Fokus QSolution">
            <span><CheckmarkCircle24Filled aria-hidden="true" /> Fokus Sekolah</span>
            <span><CheckmarkCircle24Filled aria-hidden="true" /> Fokus UMKM</span>
            <span><CheckmarkCircle24Filled aria-hidden="true" /> Transformasi Digital</span>
            <span><CheckmarkCircle24Filled aria-hidden="true" /> Teknologi Berkelanjutan</span>
          </div>
        </div>
        <Card className="hero-visual" aria-label="Contoh hasil assessment QScore">
          <div className="visual-glow" />
          <div className="visual-card visual-card-main">
            <div className="assessment-heading">
              <div>
                <div className="mini-label">QScore™</div>
                <strong>72<span>/100</span></strong>
              </div>
              <span className="assessment-label">Digital Readiness Score</span>
            </div>
            <div className="assessment-status">
              <span><CheckmarkCircle24Filled aria-hidden="true" /> Website Aktif</span>
              <span><CheckmarkCircle24Filled aria-hidden="true" /> Administrasi Digital</span>
              <span><Warning24Filled aria-hidden="true" /> Branding Digital</span>
              <span><Warning24Filled aria-hidden="true" /> Otomasi Proses</span>
            </div>
          </div>
          <div className="visual-card visual-card-float one">Contoh hasil assessment</div>
          <div className="visual-card visual-card-float two">Roadmap awal</div>
          <div className="visual-orbit" />
          <div className="visual-caption">Measure first<br /><b>transform with clarity</b></div>
        </Card>
      </div>
    </section>
  );
}
