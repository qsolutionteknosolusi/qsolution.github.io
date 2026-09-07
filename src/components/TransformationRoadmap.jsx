import { Card } from "@fluentui/react-components";
import { ArrowRight24Regular, ClipboardTask24Regular, Flowchart24Regular, Sparkle24Regular } from "@fluentui/react-icons";

const stages = [
  ["01", "Assessment", ["Digital Readiness Score"], ClipboardTask24Regular],
  ["02", "Quick Wins (0-3 Months)", ["Website Improvement", "Google Presence", "Basic Reporting"], ArrowRight24Regular],
  ["03", "Digital Foundation (3-6 Months)", ["Process Standardization", "Data Centralization", "Team Collaboration"], Flowchart24Regular],
  ["04", "Automation (6-12 Months)", ["Digital Workflows", "CRM", "Reporting Dashboard"], ArrowRight24Regular],
  ["05", "AI Enablement (12+ Months)", ["AI Assistant", "Predictive Insights", "Knowledge Base"], Sparkle24Regular],
];

export default function TransformationRoadmap() {
  return (
    <section className="section roadmap-section" aria-labelledby="roadmap-heading">
      <div className="container">
        <div className="section-heading">
          <p className="eyebrow">From insight to action</p>
          <h2 id="roadmap-heading">Contoh Roadmap Transformasi Digital</h2>
          <p>Setiap organisasi memulai dari kondisi yang berbeda.<br />Berikut contoh roadmap yang dihasilkan setelah assessment QScore.</p>
        </div>
        <div className="roadmap-disclaimer">
          <strong>Contoh Roadmap Transformasi</strong>
          <p>Roadmap ini merupakan simulasi yang menunjukkan bagaimana hasil assessment dapat diterjemahkan menjadi langkah implementasi yang terstruktur.</p>
          <p>Setiap roadmap aktual disesuaikan dengan kebutuhan dan kondisi masing-masing organisasi.</p>
        </div>
        <div className="roadmap-track">
          {stages.map(([number, title, items, Icon], index) => (
            <div className="roadmap-stage" key={title}>
              <Card className="roadmap-card">
                <div className="roadmap-number">{number}</div>
                <Icon aria-hidden="true" />
                <h3>{title}</h3>
                <ul>{items.map((item) => <li key={item}>{item}</li>)}</ul>
              </Card>
              {index < stages.length - 1 && <span className="roadmap-connector" aria-hidden="true">→</span>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
