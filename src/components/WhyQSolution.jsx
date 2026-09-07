const reasons = [
  ["01", "Pahami", "Kami mulai dari kondisi nyata organisasi, bukan asumsi atau tren teknologi."],
  ["02", "Rencanakan", "Kami menyusun prioritas dan roadmap yang sesuai kemampuan serta tujuan Anda."],
  ["03", "Implementasikan", "Kami mendampingi eksekusi dan mengukur dampak agar perubahan berkelanjutan."],
];

export default function WhyQSolution() {
  return (
    <section className="section why-section">
      <div className="container">
        <div className="section-heading centered">
          <p className="eyebrow">Why QSolution</p>
          <h2>Kami Tidak Menjual Teknologi Terlebih Dahulu</h2>
        </div>
        <div className="reason-grid">
          {reasons.map(([number, title, description]) => (
            <article className="reason-card" key={number}>
              <span>{number}</span><h3>{title}</h3><p>{description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
