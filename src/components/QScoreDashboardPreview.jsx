import { Badge, Card, Divider, ProgressBar } from "@fluentui/react-components";
import { CheckmarkCircle24Filled, DataBarVertical24Regular } from "@fluentui/react-icons";

const breakdown = [
  ["Website & Presence", 88],
  ["Operations", 74],
  ["Data Management", 69],
  ["Automation", 55],
  ["AI Readiness", 42],
];

function scoreColor(score) {
  if (score >= 85) return "green";
  if (score >= 60) return "teal";
  if (score >= 40) return "orange";
  return "red";
}

export default function QScoreDashboardPreview() {
  return (
    <section className="section qscore-preview-section" aria-labelledby="qscore-preview-heading">
      <div className="container">
        <div className="section-heading centered">
          <p className="eyebrow">QScore™ / Contoh hasil assessment</p>
          <h2 id="qscore-preview-heading">Lihat Kondisi Digital Organisasi Anda dengan Lebih Jelas</h2>
        </div>
        <Card className="qscore-dashboard">
          <div className="qscore-dashboard-top">
            <div>
              <div className="qscore-dashboard-kicker"><DataBarVertical24Regular aria-hidden="true" /> Digital Readiness Assessment</div>
              <div className="qscore-dashboard-score">72<span>/100</span></div>
              <Badge appearance="filled" color="informative">Berkembang</Badge>
            </div>
            <div className="qscore-dashboard-meta"><span>School Category</span><span>Last Updated: September 2026</span></div>
          </div>
          <Divider />
          <div className="qscore-dashboard-body">
            <div className="qscore-breakdown">
              <h3>Digital Readiness Breakdown</h3>
              {breakdown.map(([label, score]) => (
                <div className="qscore-breakdown-row" key={label}>
                  <div><span>{label}</span><strong>{score}</strong></div>
                  <ProgressBar value={score / 100} className={`score-progress score-${scoreColor(score)}`} />
                </div>
              ))}
            </div>
            <div className="qscore-actions">
              <div>
                <h3>Priority Actions</h3>
                <ol>
                  <li>Modernisasi Website</li>
                  <li>Digital Branding</li>
                  <li>Process Automation</li>
                </ol>
              </div>
              <div className="qscore-completed"><CheckmarkCircle24Filled aria-hidden="true" /><span>Assessment Completed</span></div>
            </div>
          </div>
          <div className="qscore-roadmap-preview">
            <h3>Roadmap Preview</h3>
            <div className="qscore-roadmap-items">
              <span><b>Q4 2026</b>Digital Foundation</span>
              <span><b>Q1 2027</b>Automation</span>
              <span><b>Q2 2027</b>AI Adoption</span>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}
