import { useState } from "react";
import { Button, Field, Input, Textarea } from "@fluentui/react-components";
import SEO from "../components/SEO";

export default function Contact() {
  const [sent, setSent] = useState(false);
  return (
    <>
      <SEO title="Contact" description="Mari mulai percakapan tentang tantangan dan peluang digital Anda." path="/contact" />
      <main><section className="page-hero section"><div className="container narrow"><p className="eyebrow">Let&apos;s talk</p><h1>Mari mulai dari<br /><em>percakapan.</em></h1><p>Ceritakan apa yang sedang Anda hadapi. Kami akan membantu menemukan langkah berikutnya.</p></div></section><section className="section contact-section"><div className="container contact-grid"><div className="contact-details"><p className="eyebrow">Get in touch</p><h2>Ruang untuk ide<br />yang lebih baik.</h2><p>Biasanya kami membalas dalam 1–2 hari kerja.</p><p className="contact-trust-statement">Setiap diskusi awal dilakukan dengan menghormati kerahasiaan informasi organisasi.<br /><br />Jika diperlukan, proses assessment dan rekomendasi lanjutan dapat didukung dengan perjanjian kerahasiaan (NDA).</p><a href="mailto:hello@qsolution.id">hello@qsolution.id</a><span>Jakarta · Indonesia</span></div><form className="contact-form" onSubmit={(event) => { event.preventDefault(); setSent(true); }}>{sent ? <div className="success-message"><span>✓</span><h3>Terima kasih sudah menghubungi kami.</h3><p>Pesan Anda sudah kami terima. Kami akan segera kembali.</p></div> : <><Field label="Nama" required><Input required placeholder="Nama lengkap" /></Field><Field label="Email" required><Input required type="email" placeholder="nama@organisasi.com" /></Field><Field label="Ceritakan tantangan Anda" required><Textarea required resize="vertical" placeholder="Apa yang ingin Anda bangun atau perbaiki?" /></Field><Button appearance="primary" type="submit">Kirim pesan →</Button></>}</form></div></section></main>
    </>
  );
}
