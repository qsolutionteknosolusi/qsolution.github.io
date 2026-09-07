export const assessmentQuestions = [
  { id: "digital-processes", label: "Seberapa terdigitalisasi proses utama organisasi Anda?", options: ["Masih manual", "Sebagian sudah digital", "Terintegrasi"] },
  { id: "data-access", label: "Seberapa mudah tim mengakses data untuk mengambil keputusan?", options: ["Sulit ditemukan", "Tersedia tetapi terpisah", "Mudah dipantau"] },
  { id: "online-presence", label: "Seberapa kuat kehadiran digital organisasi Anda?", options: ["Belum ada", "Sudah ada tetapi belum optimal", "Aktif dan terkelola"] },
  { id: "customer-experience", label: "Seberapa mudah pelanggan atau orang tua mendapatkan informasi?", options: ["Bergantung pada komunikasi manual", "Informasi tersedia di beberapa kanal", "Informasi mudah ditemukan dan konsisten"] },
  { id: "team-collaboration", label: "Bagaimana tim berkolaborasi dalam pekerjaan sehari-hari?", options: ["Terpisah dan tidak terdokumentasi", "Menggunakan beberapa tools", "Terpusat dan terstruktur"] },
  { id: "reporting", label: "Seberapa rutin organisasi membuat laporan untuk evaluasi?", options: ["Jarang atau manual", "Dilakukan tetapi belum konsisten", "Teratur dan berbasis data"] },
  { id: "security", label: "Seberapa siap organisasi melindungi data penting?", options: ["Belum memiliki standar", "Ada praktik dasar", "Memiliki kebijakan dan kontrol"] },
  { id: "leadership", label: "Seberapa kuat dukungan pimpinan terhadap transformasi digital?", options: ["Belum menjadi prioritas", "Mulai didukung", "Menjadi agenda strategis"] },
  { id: "skills", label: "Seberapa siap tim menggunakan tools digital baru?", options: ["Membutuhkan banyak pendampingan", "Sebagian sudah siap", "Terbiasa belajar dan beradaptasi"] },
  { id: "automation", label: "Seberapa banyak pekerjaan berulang yang sudah diotomasi?", options: ["Hampir semuanya manual", "Beberapa proses sudah dibantu tools", "Proses utama sudah terotomasi"] },
  { id: "integration", label: "Seberapa terhubung tools yang digunakan organisasi?", options: ["Berjalan sendiri-sendiri", "Terhubung sebagian", "Terintegrasi dalam satu alur"] },
  { id: "measurement", label: "Apakah organisasi memiliki indikator keberhasilan digital?", options: ["Belum ada", "Ada tetapi belum rutin digunakan", "Dipantau untuk keputusan"] },
  { id: "innovation", label: "Seberapa sering organisasi menguji cara kerja baru?", options: ["Hampir tidak pernah", "Sesekali", "Teratur melalui eksperimen"] },
  { id: "ai-readiness", label: "Seberapa siap organisasi memanfaatkan AI secara bertanggung jawab?", options: ["Belum memahami manfaatnya", "Sedang mengeksplorasi", "Sudah menyiapkan use case dan data"] },
  { id: "roadmap", label: "Apakah organisasi memiliki roadmap transformasi digital?", options: ["Belum ada", "Ada rencana awal", "Memiliki prioritas dan target waktu"] },
];

export function createAssessmentPayload({ organizationType, answers, lead }) {
  return {
    organizationType,
    answers,
    lead,
    submittedAt: new Date().toISOString(),
    source: "qscore-assessment",
  };
}
