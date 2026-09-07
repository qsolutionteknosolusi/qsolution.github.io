export default function About() {
  return (
    <section className="section section-muted" id="about">
      <div className="container split-heading">
        <div>
          <p className="eyebrow">Why QSolution</p>
          <h2>Teknologi yang terasa <em>manusiawi.</em></h2>
        </div>
        <p>
          Kami percaya transformasi bukan sekadar memindahkan proses ke layar.
          Transformasi adalah membuat orang bekerja, belajar, dan bertumbuh lebih baik.
        </p>
      </div>
      <div className="container feature-grid">
        <article className="feature-card"><span className="feature-number">01</span><h3>Relevan</h3><p>Berangkat dari konteks dan kebutuhan nyata, bukan solusi satu ukuran untuk semua.</p></article>
        <article className="feature-card"><span className="feature-number">02</span><h3>Terukur</h3><p>Setiap inisiatif memiliki indikator keberhasilan yang jelas dan dapat dipelajari bersama.</p></article>
        <article className="feature-card"><span className="feature-number">03</span><h3>Berkelanjutan</h3><p>Membangun kemampuan tim agar dampak terus tumbuh bahkan setelah proyek selesai.</p></article>
      </div>
    </section>
  );
}
