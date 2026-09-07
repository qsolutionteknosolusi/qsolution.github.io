import { Link } from "react-router-dom";
import { Button } from "@fluentui/react-components";
import { ArrowRight24Regular } from "@fluentui/react-icons";

export default function CTASection() {
  return (
    <section className="cta-section" id="contact" aria-labelledby="cta-heading">
      <div className="container cta-inner">
        <p className="eyebrow">Mulai dengan kejelasan arah</p>
        <h2 id="cta-heading">Siap Menentukan Langkah Transformasi Digital Anda?</h2>
        <p>Mari mulai dengan assessment gratis atau konsultasi awal bersama tim QSolution.</p>
        <Button appearance="secondary" as={Link} className="button button-white" to="/contact" icon={<ArrowRight24Regular />}>
          <span aria-hidden="true">🚀</span>
          <span>Cek Skor Kesiapan Digital Gratis</span>
        </Button>
      </div>
    </section>
  );
}
