import { Link } from "react-router-dom";
import { Button, Card } from "@fluentui/react-components";
import { ArrowRight24Regular, PlayCircle24Regular } from "@fluentui/react-icons";

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
          <div className="hero-proof">
            <span className="proof-dot" aria-hidden="true" />
            <span>Dipercaya untuk membantu organisasi mengambil keputusan digital yang lebih terarah, efisien, dan berkelanjutan.</span>
          </div>
        </div>
        <Card className="hero-visual" aria-label="Ilustrasi skor kesiapan digital QSolution">
          <div className="visual-glow" />
          <div className="visual-card visual-card-main">
            <div className="mini-label">QScore insight</div>
            <strong>+42%</strong>
            <span>student engagement</span>
            <div className="chart" aria-hidden="true"><i /><i /><i /><i /><i /><i /></div>
          </div>
          <div className="visual-card visual-card-float one"><b>01</b><span>Understand</span></div>
          <div className="visual-card visual-card-float two"><b>02</b><span>Build</span></div>
          <div className="visual-orbit" />
          <div className="visual-caption">Human-centered<br /><b>technology</b></div>
        </Card>
      </div>
    </section>
  );
}
