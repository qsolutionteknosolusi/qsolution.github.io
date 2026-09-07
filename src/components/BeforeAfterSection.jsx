import { Card } from "@fluentui/react-components";
import { ArrowRight24Regular } from "@fluentui/react-icons";

const comparisons = [
  ["Manual Administration", "Integrated Dashboard"],
  ["Tidak Ada Data Terpusat", "Data Driven Management"],
  ["Website Pasif", "Digital Presence Aktif"],
];

export default function BeforeAfterSection() {
  return (
    <section className="section before-after-section" aria-labelledby="before-after-heading">
      <div className="container">
        <div className="section-heading centered">
          <p className="eyebrow">Perubahan yang terlihat</p>
          <h2 id="before-after-heading">Sebelum dan Sesudah Transformasi</h2>
        </div>
        <p className="before-after-disclaimer">Seluruh ilustrasi sebelum dan sesudah merupakan contoh simulasi yang dirancang untuk menggambarkan perubahan yang umum terjadi dalam proses transformasi digital.</p>
        <div className="before-after-grid">
          {comparisons.map(([before, after]) => (
            <Card className="before-after-card" key={before}>
              <div><span className="comparison-label">Sebelum</span><strong>{before}</strong></div>
              <ArrowRight24Regular aria-hidden="true" />
              <div><span className="comparison-label comparison-label-after">Sesudah</span><strong>{after}</strong></div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
