import { useMemo, useState } from "react";
import { Badge, Button, Card, Field, Input, ProgressBar, Radio, RadioGroup } from "@fluentui/react-components";
import { ArrowLeft24Regular, ArrowRight24Regular, CheckmarkCircle24Filled } from "@fluentui/react-icons";
import { Link } from "react-router-dom";
import SEO from "../components/SEO";
import { assessmentQuestions, createAssessmentPayload } from "../services/AssessmentService";
import { assessmentQuestionCount } from "../services/AssessmentConfig";
import { calculateScore, getAssessmentInsights, getScoreCategory } from "../services/ScoringService";
import { submitAssessmentLead } from "../services/LeadService";

const initialLead = { name: "", organization: "", email: "", whatsapp: "" };

function getPersonalizedInsights(organizationType, insights) {
  const context = organizationType === "Sekolah"
    ? {
        strengths: ["Kesiapan pengalaman digital sekolah", ...insights.strengths],
        improvements: ["Integrasi PPDB dan administrasi sekolah", ...insights.improvements],
      }
    : {
        strengths: ["Kesiapan digital presence bisnis", ...insights.strengths],
        improvements: ["Efisiensi operasional dan akuisisi pelanggan", ...insights.improvements],
      };
  return {
    strengths: [...new Set(context.strengths)].slice(0, 3),
    improvements: [...new Set(context.improvements)].slice(0, 3),
  };
}

function roadmapFor(category, organizationType) {
  const firstStep = category === "Awal" ? "Digital foundation dan prioritas dasar" : "Quick wins dan standardisasi proses";
  const focus = organizationType === "Sekolah" ? "Modernisasi website dan PPDB sekolah" : "Modernisasi website dan digital presence bisnis";
  return {
    ninetyDays: [firstStep, focus, "Tetapkan indikator keberhasilan"],
    oneYear: organizationType === "Sekolah"
      ? ["Integrasikan data siswa dan administrasi", "Otomasi komunikasi sekolah", "Siapkan AI Assistant pendidikan"]
      : ["Integrasikan data pelanggan dan operasional", "Otomasi proses penjualan", "Siapkan AI Assistant bisnis"],
  };
}

export default function Assessment() {
  const [stage, setStage] = useState("type");
  const [organizationType, setOrganizationType] = useState("");
  const [questionIndex, setQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState({});
  const [lead, setLead] = useState(initialLead);
  const [leadError, setLeadError] = useState("");
  const [submissionState, setSubmissionState] = useState("idle");

  const score = useMemo(() => calculateScore(answers, assessmentQuestions.length), [answers]);
  const category = getScoreCategory(score);
  const insights = useMemo(() => getAssessmentInsights(answers, assessmentQuestions), [answers]);
  const personalizedInsights = getPersonalizedInsights(organizationType, insights);
  const roadmap = roadmapFor(category, organizationType);
  const currentQuestion = assessmentQuestions[questionIndex];

  const updateLead = (field, value) => setLead((current) => ({ ...current, [field]: value }));

  const validateLead = () => {
    if (!lead.name.trim() || !lead.organization.trim() || !lead.email.trim() || !lead.whatsapp.trim()) {
      setLeadError("Lengkapi semua data agar hasil assessment dapat disiapkan.");
      return false;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(lead.email)) {
      setLeadError("Masukkan alamat email yang valid.");
      return false;
    }
    setLeadError("");
    return true;
  };

  const finishAssessment = async (event) => {
    event.preventDefault();
    if (!validateLead()) return;
    setSubmissionState("submitting");
    try {
      const result = await submitAssessmentLead(createAssessmentPayload({ organizationType, answers, lead }));
      setSubmissionState(result.configured ? "submitted" : "preview");
      setStage("result");
    } catch (error) {
      setSubmissionState("error");
      setLeadError(error.message);
    }
  };

  return (
    <>
      <SEO title="Cek Skor Kesiapan Digital" description="Ukur kesiapan digital organisasi Anda dalam 5 menit bersama QScore." path="/assessment" />
      <main id="main-content" className="assessment-page" tabIndex="-1">
        <section className="page-hero section">
          <div className="container narrow">
            <p className="eyebrow">QScore™ Assessment</p>
            <h1>Ketahui arah transformasi digital Anda.</h1>
            <p>Jawab {assessmentQuestionCount} pertanyaan singkat untuk mendapatkan skor, prioritas, dan roadmap awal yang lebih terarah.</p>
          </div>
        </section>
        <section className="section assessment-flow-section">
          <div className="container assessment-container">
            <div className="assessment-progress"><span>QScore™</span><span>{stage === "result" ? "Selesai" : "Langkah berikutnya"}</span></div>
            {stage === "type" && (
              <Card className="assessment-card">
                <p className="eyebrow">Langkah 1 dari 3</p>
                <h2>Organisasi Anda bergerak di bidang apa?</h2>
                <RadioGroup value={organizationType} onChange={(_, data) => setOrganizationType(data.value)}>
                  <Radio value="Sekolah" label="Sekolah" />
                  <Radio value="UMKM" label="UMKM" />
                </RadioGroup>
                <Button appearance="primary" disabled={!organizationType} onClick={() => setStage("questions")} icon={<ArrowRight24Regular />}>Mulai assessment</Button>
              </Card>
            )}
            {stage === "questions" && (
              <Card className="assessment-card">
                <div className="assessment-step-meta"><span>Langkah 2 dari 3</span><span>{questionIndex + 1} / {assessmentQuestions.length}</span></div>
                <ProgressBar value={(questionIndex + 1) / assessmentQuestions.length} />
                <h2>{currentQuestion.label}</h2>
                <RadioGroup value={answers[currentQuestion.id] ?? ""} onChange={(_, data) => setAnswers((current) => ({ ...current, [currentQuestion.id]: data.value }))}>
                  {currentQuestion.options.map((option, index) => <Radio key={option} value={String(index)} label={option} />)}
                </RadioGroup>
                <div className="assessment-actions">
                  <Button appearance="subtle" disabled={questionIndex === 0} onClick={() => setQuestionIndex((current) => current - 1)} icon={<ArrowLeft24Regular />}>Sebelumnya</Button>
                  <Button appearance="primary" disabled={answers[currentQuestion.id] === undefined} onClick={() => questionIndex === assessmentQuestions.length - 1 ? setStage("lead") : setQuestionIndex((current) => current + 1)} icon={<ArrowRight24Regular />}>{questionIndex === assessmentQuestions.length - 1 ? "Lanjut ke hasil" : "Berikutnya"}</Button>
                </div>
              </Card>
            )}
            {stage === "lead" && (
              <Card className="assessment-card">
                <p className="eyebrow">Langkah 3 dari 3</p>
                <h2>Ke mana kami kirim hasil assessment Anda?</h2>
                <p className="assessment-value-exchange">Masukkan data organisasi untuk menerima hasil assessment dan roadmap awal.</p>
                <div className="assessment-privacy-explanation">
                  <h3>Mengapa kami meminta data ini?</h3>
                  <p>Data yang Anda berikan digunakan untuk:</p>
                  <ul>
                    <li>mengirimkan hasil assessment</li>
                    <li>menyusun rekomendasi awal</li>
                    <li>menghubungi Anda jika diperlukan</li>
                  </ul>
                  <p>Data tidak akan dipublikasikan atau dibagikan kepada pihak lain.</p>
                </div>
                <form className="assessment-lead-form" onSubmit={finishAssessment}>
                  <Field label="Nama" required><Input value={lead.name} onChange={(_, data) => updateLead("name", data.value)} /></Field>
                  <Field label="Organisasi" required><Input value={lead.organization} onChange={(_, data) => updateLead("organization", data.value)} /></Field>
                  <Field label="Email" required><Input type="email" value={lead.email} onChange={(_, data) => updateLead("email", data.value)} /></Field>
                  <Field label="WhatsApp" required><Input value={lead.whatsapp} onChange={(_, data) => updateLead("whatsapp", data.value)} /></Field>
                  {leadError && <p className="assessment-error" role="alert">{leadError}</p>}
                  <Button appearance="primary" type="submit" disabled={submissionState === "submitting"} icon={<ArrowRight24Regular />}>{submissionState === "submitting" ? "Menyiapkan hasil..." : "Lihat hasil assessment"}</Button>
                </form>
              </Card>
            )}
            {stage === "result" && (
              <Card className="assessment-card assessment-result-card">
                <div className="assessment-result-header">
                  <div><p className="eyebrow">Hasil QScore™</p><h2>{score}<span>/100</span></h2></div>
                  <Badge appearance="filled" color="informative">{category}</Badge>
                </div>
                {submissionState === "preview" && <p className="assessment-notice">Hasil siap ditinjau. Integrasi Google Sheets dapat diaktifkan melalui VITE_APPS_SCRIPT_URL.</p>}
                {submissionState === "submitted" && <p className="assessment-notice success"><CheckmarkCircle24Filled aria-hidden="true" /> Data assessment berhasil dikirim.</p>}
                <div className="result-columns">
                  <div><h3>Strengths</h3><ul>{personalizedInsights.strengths.map((item) => <li key={item}>{item}</li>)}</ul></div>
                  <div><h3>Improvement Areas</h3><ul>{personalizedInsights.improvements.map((item) => <li key={item}>{item}</li>)}</ul></div>
                </div>
                <div className="result-roadmaps"><div><h3>90-Day Roadmap</h3><ul>{roadmap.ninetyDays.map((item) => <li key={item}>{item}</li>)}</ul></div><div><h3>1-Year Roadmap</h3><ul>{roadmap.oneYear.map((item) => <li key={item}>{item}</li>)}</ul></div></div>
                <div className="assessment-result-actions">
                  <Button appearance="primary" as={Link} to="/contact">Review Roadmap Bersama QSolution</Button>
                  <Button appearance="secondary" as={Link} to="/contact">Jadwalkan Konsultasi Awal</Button>
                </div>
              </Card>
            )}
          </div>
        </section>
      </main>
    </>
  );
}
