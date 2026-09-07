const steps = [
  ["01", "Assessment", "Memahami kondisi dan mengukur kesiapan digital organisasi."],
  ["02", "Roadmap", "Menentukan prioritas dan langkah transformasi yang paling tepat."],
  ["03", "Implementasi", "Mewujudkan solusi secara bertahap, terukur, dan realistis."],
  ["04", "Pendampingan", "Menjaga perubahan terus bertumbuh bersama tim Anda."],
];

export default function ProcessSection() {
  return (
    <section className="section process-section">
      <div className="container">
        <div className="split-heading">
          <div><p className="eyebrow">How we work</p><h2>Proses yang jelas.<br />Kemajuan yang nyata.</h2></div>
          <p>Dari pertanyaan pertama hingga dampak yang terasa, kami hadir sebagai partner jangka panjang.</p>
        </div>
        <div className="process-grid">
          {steps.map(([number, title, description]) => <article key={number}><span>{number}</span><h3>{title}</h3><p>{description}</p></article>)}
        </div>
      </div>
    </section>
  );
}
