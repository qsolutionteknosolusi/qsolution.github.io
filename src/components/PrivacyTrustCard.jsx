import { Card } from "@fluentui/react-components";
import { ShieldCheckmark24Regular } from "@fluentui/react-icons";

const safeguards = [
  "Assessment publik menggunakan simulasi",
  "Data organisasi tidak dipublikasikan",
  "Analisis detail dilakukan secara terbatas",
  "Rekomendasi spesifik diberikan melalui konsultasi",
  "NDA dapat digunakan untuk kebutuhan tertentu",
];

export default function PrivacyTrustCard() {
  return (
    <Card className="privacy-trust-card">
      <div className="privacy-trust-heading">
        <ShieldCheckmark24Regular aria-hidden="true" />
        <h2>Kerahasiaan Data Organisasi Terjaga</h2>
      </div>
      <p>QSolution memahami bahwa data sekolah, UMKM, dan organisasi merupakan aset yang harus dilindungi.</p>
      <p>Karena itu:</p>
      <ul>{safeguards.map((item) => <li key={item}>✓ {item}</li>)}</ul>
    </Card>
  );
}
