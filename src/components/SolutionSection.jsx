import { ArrowUpRight24Regular } from "@fluentui/react-icons";
import { Link } from "react-router-dom";

export default function SolutionSection() {
  return (
    <section className="section solution-section" id="solution">
      <div className="container">
        <div className="section-heading">
          <p className="eyebrow">Our approach</p>
          <h2>Solusi yang bergerak dari insight ke impact.</h2>
          <p>Kami menyatukan strategi, desain, dan teknologi dalam proses yang kolaboratif.</p>
        </div>
        <div className="solution-grid">
          <Link to="/qschool" className="solution-card solution-card-blue">
            <span className="card-kicker">01</span><h3>Digital Transformation</h3>
            <p>Strategi dan roadmap yang membantu organisasi bergerak digital dengan arah yang jelas.</p>
            <ArrowUpRight24Regular />
          </Link>
          <Link to="/qumkm" className="solution-card solution-card-dark">
            <span className="card-kicker">02</span><h3>Education Solution</h3>
            <p>Solusi digital yang membuat sekolah lebih terhubung, efisien, dan siap berkembang.</p>
            <ArrowUpRight24Regular />
          </Link>
          <div className="solution-card solution-card-light">
            <span className="card-kicker">03</span><h3>Green Technology</h3>
            <p>Pendekatan teknologi yang efisien dan berkelanjutan untuk masa depan Indonesia.</p>
            <ArrowUpRight24Regular />
          </div>
        </div>
      </div>
    </section>
  );
}
