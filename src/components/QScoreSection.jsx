import { useMemo, useState } from "react";
import {
  Button,
  Card,
  Field,
  Radio,
  RadioGroup,
} from "@fluentui/react-components";
import {
  ArrowRight24Regular,
  CheckmarkCircle24Filled,
  DataBarVertical24Regular,
} from "@fluentui/react-icons";

const questions = [
  {
    id: "process",
    label: "Seberapa terdigitalisasi proses utama organisasi Anda?",
    options: ["Masih manual", "Sebagian sudah digital", "Terintegrasi"],
  },
  {
    id: "data",
    label: "Seberapa mudah tim Anda mengakses data untuk mengambil keputusan?",
    options: ["Sulit ditemukan", "Tersedia tetapi terpisah", "Mudah dipantau"],
  },
  {
    id: "readiness",
    label: "Seberapa siap tim Anda menjalankan perubahan digital?",
    options: ["Perlu banyak pendampingan", "Mulai siap", "Sangat siap"],
  },
];

export default function QScoreSection() {
  const [started, setStarted] = useState(false);
  const [answers, setAnswers] = useState({});
  const answeredCount = Object.keys(answers).length;
  const score = useMemo(
    () => Math.round((Object.values(answers).reduce((total, value) => total + Number(value), 0) / (questions.length * 2)) * 100),
    [answers],
  );
  const visibleScore = answeredCount ? score : 78;

  return (
    <section className="section qscore-section" id="qscore" aria-labelledby="qscore-heading">
      <div className="container qscore-grid">
        <Card className="qscore-panel">
          <div className="qscore-header"><DataBarVertical24Regular /><span>QScore / live view</span></div>
          <div className="qscore-value">{visibleScore}<span>/100</span></div>
          <p>{answeredCount ? `${answeredCount} dari ${questions.length} pertanyaan terjawab` : "Contoh digital readiness index"}</p>
          <div className="score-bars" aria-label={`Skor kesiapan digital ${visibleScore} dari 100`}>
            {Array.from({ length: 10 }, (_, index) => <i className={index < Math.round(visibleScore / 10) ? "is-filled" : ""} key={index} />)}
          </div>
          <div className="qscore-meta"><span><CheckmarkCircle24Filled /> Hasil awal, tanpa biaya</span><span>± 5 menit</span></div>
        </Card>
        <div className="qscore-copy">
          <p className="eyebrow">QScore</p>
          <h2 id="qscore-heading">Ketahui Tingkat Kesiapan Digital Organisasi Anda Dalam 5 Menit</h2>
          {!started ? (
            <>
              <p>Jawab beberapa pertanyaan singkat untuk mendapatkan gambaran awal kondisi digital, prioritas transformasi, dan langkah berikutnya.</p>
              <Button appearance="primary" icon={<ArrowRight24Regular />} onClick={() => setStarted(true)}>
                <span aria-hidden="true">🚀</span>
                <span>Mulai Assessment Gratis</span>
              </Button>
            </>
          ) : (
            <div className="qscore-assessment">
              {questions.map((question) => (
                <Field label={question.label} key={question.id}>
                  <RadioGroup
                    layout="horizontal"
                    value={answers[question.id] ?? ""}
                    onChange={(_, data) => setAnswers((current) => ({ ...current, [question.id]: data.value }))}
                  >
                    {question.options.map((option, index) => <Radio key={option} value={String(index)} label={option} />)}
                  </RadioGroup>
                </Field>
              ))}
              {answeredCount === questions.length && <p className="qscore-result" role="status">Skor awal Anda <strong>{score}/100</strong>. Gunakan hasil ini sebagai titik awal untuk menyusun roadmap yang tepat.</p>}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
