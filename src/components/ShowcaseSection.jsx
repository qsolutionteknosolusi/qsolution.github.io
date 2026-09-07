import { Card, Button } from "@fluentui/react-components";
import {
  ArrowRight24Regular,
  ClipboardTask24Regular,
  DocumentFlowchart24Regular,
  Flowchart24Regular,
  PeopleCommunity24Regular,
} from "@fluentui/react-icons";
import { Link } from "react-router-dom";

const trustItems = [
  ["Assessment", ClipboardTask24Regular],
  ["Roadmap", DocumentFlowchart24Regular],
  ["Implementasi", Flowchart24Regular],
  ["Pendampingan", PeopleCommunity24Regular],
];

const showcases = [
  {
    title: "Showcase School™",
    description: "Website modern dan AI Assistant untuk sekolah.",
    visual: "school",
    to: "/qschool",
    cta: "Lihat Showcase",
  },
  {
    title: "Pathfinder School™",
    description: "Roadmap transformasi sekolah menuju pendidikan masa depan.",
    visual: "pathfinder",
    to: "/qschool",
    cta: "Pelajari Pathfinder",
  },
  {
    title: "QScore™",
    description: "Digital Readiness Assessment untuk mengukur kesiapan digital organisasi.",
    visual: "qscore",
    to: "/contact",
    cta: "Cek Kesiapan Digital",
  },
  {
    title: "Smart UMKM™",
    description: "Website bisnis, digital presence, dan pertumbuhan berkelanjutan.",
    visual: "umkm",
    to: "/qumkm",
    cta: "Lihat Solusi UMKM",
  },
];

export default function ShowcaseSection() {
  return (
    <section className="section showcase-section" aria-labelledby="showcase-heading">
      <div className="container">
        <div className="showcase-trust" aria-label="Pendekatan QSolution">
          {trustItems.map(([label, Icon]) => (
            <span key={label}><Icon aria-hidden="true" /> {label}</span>
          ))}
        </div>
        <div className="section-heading">
          <p className="eyebrow">Yang kami bangun</p>
          <h2 id="showcase-heading">Transformasi yang Sedang dan Telah Kami Bangun</h2>
          <p>Berbagai inisiatif digital yang dirancang untuk membantu sekolah dan UMKM bertumbuh lebih cepat di era digital.</p>
        </div>
        <div className="showcase-list">
          {showcases.map((showcase, index) => (
            <Card className={`showcase-card ${index % 2 ? "showcase-card-reverse" : ""}`} key={showcase.title}>
              <div className={`showcase-visual showcase-visual-${showcase.visual}`} aria-label={`Contoh visual ${showcase.title}`}>
                <span>QSolution</span>
                <strong>{showcase.title}</strong>
                <div className="showcase-visual-lines" aria-hidden="true" />
              </div>
              <div className="showcase-content">
                <p className="card-kicker">Inisiatif {String(index + 1).padStart(2, "0")}</p>
                <h3>{showcase.title}</h3>
                <p>{showcase.description}</p>
                <Button appearance="secondary" as={Link} to={showcase.to} icon={<ArrowRight24Regular />}>
                  {showcase.cta}
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
