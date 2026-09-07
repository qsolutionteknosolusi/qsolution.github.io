import { Card, CardHeader, Text } from "@fluentui/react-components";
import { BuildingRegular, StoreMicrosoftRegular } from "@fluentui/react-icons";

export default function ProblemSection() {
  return (
    <section className="section problem-section" id="problem">
      <div className="container">
        <p className="eyebrow">Kenali tantangannya</p>
        <h2>Apakah Salah Satu Tantangan Ini Sedang Dihadapi Organisasi Anda?</h2>
        <div className="solution-grid">
          <Card className="solution-card">
            <CardHeader image={<BuildingRegular />} header={<Text weight="semibold">Sekolah</Text>} />
            <ul><li>Administrasi masih manual</li><li>Website sekolah belum optimal</li><li>PPDB belum terintegrasi</li><li>Data sulit dipantau</li></ul>
          </Card>
          <Card className="solution-card">
            <CardHeader image={<StoreMicrosoftRegular />} header={<Text weight="semibold">UMKM</Text>} />
            <ul><li>Sulit mendapatkan pelanggan</li><li>Belum memiliki website profesional</li><li>Operasional tidak efisien</li><li>Sulit bersaing secara digital</li></ul>
          </Card>
        </div>
      </div>
    </section>
  );
}
