import { Badge, Card, Button } from "@fluentui/react-components";
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
    to: "/assessment",
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

function BrowserMockup({ type, title }) {
  return (
    <div className={`browser-mockup browser-mockup-${type}`} aria-label={`${title} product preview`}>
      <div className="browser-bar"><i /><i /><i /><span>qsolution.id / preview</span></div>
      <div className="browser-content">
        {type === "school" && <><div className="mock-nav">QSchool <span>Program | Tentang | Kontak</span></div><div className="mock-school-hero"><b>Belajar untuk masa depan.</b><span>Future skills untuk generasi siap berubah.</span><em>Jelajahi program →</em></div></>}
        {type === "pathfinder" && <><div className="mock-dashboard-title">Pathfinder School™ <Badge appearance="tint" color="success">On track</Badge></div><div className="mock-progress"><span /><span /><span /><span /></div><div className="mock-table"><b>Digital Foundation</b><b>Automation</b><b>AI Enablement</b></div></>}
        {type === "qscore" && <><div className="mock-dashboard-title">QScore™ <strong>72/100</strong></div><div className="mock-bars"><span /><span /><span /><span /><span /></div><div className="mock-metrics"><b>Website 88</b><b>Ops 74</b><b>AI 42</b></div></>}
        {type === "umkm" && <><div className="mock-nav">Kopi Nusantara <span>Menu | Cerita | Pesan</span></div><div className="mock-shop-hero"><b>Rasa yang tumbuh bersama.</b><span>Pesan kopi terbaik dari bisnis lokal.</span><em>Lihat produk →</em></div></>}
      </div>
    </div>
  );
}

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
              <div className={`showcase-visual showcase-visual-${showcase.visual}`}>
                <BrowserMockup type={showcase.visual} title={showcase.title} />
              </div>
              <div className="showcase-content">
                <div className="card-kicker">Inisiatif {String(index + 1).padStart(2, "0")} <Badge appearance="tint">Preview</Badge></div>
                <h3>{showcase.title}</h3>
                <p>{showcase.description}</p>
                <p className="showcase-disclaimer">Visual yang ditampilkan merupakan ilustrasi dan contoh hasil yang merepresentasikan pendekatan QSolution.</p>
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
