import { Card } from "@fluentui/react-components";
import { CheckmarkCircle24Filled } from "@fluentui/react-icons";

const impacts = [
  {
    title: "Sekolah",
    items: ["Peningkatan citra institusi", "Kepercayaan orang tua meningkat", "Proses penerimaan siswa lebih efektif"],
  },
  {
    title: "UMKM",
    items: ["Pelanggan lebih mudah menemukan bisnis", "Operasional lebih efisien", "Keputusan bisnis lebih cepat"],
  },
  {
    title: "Organisasi",
    items: ["Siap menghadapi era AI", "Kolaborasi lebih baik", "Transformasi digital lebih terarah"],
  },
];

export default function ImpactSection() {
  return (
    <section className="section impact-section" aria-labelledby="impact-heading">
      <div className="container">
        <div className="section-heading centered">
          <p className="eyebrow">Dampak nyata</p>
          <h2 id="impact-heading">Dampak yang Bisa Dirasakan</h2>
        </div>
        <div className="impact-grid">
          {impacts.map((impact) => (
            <Card className="impact-card" key={impact.title}>
              <p className="card-kicker">Untuk {impact.title}</p>
              <h3>{impact.title}</h3>
              <ul>
                {impact.items.map((item) => (
                  <li key={item}><CheckmarkCircle24Filled aria-hidden="true" /> {item}</li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
