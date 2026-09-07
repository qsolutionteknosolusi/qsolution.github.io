import { useMemo, useState } from "react";
import { Input, Option, Dropdown, Card } from "@fluentui/react-components";
import { Search24Regular } from "@fluentui/react-icons";
import { Link } from "react-router-dom";
import SEO from "../components/SEO";
import { categories, posts } from "../blog/posts";

export default function Insight() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("Semua");
  const filteredPosts = useMemo(() => posts.filter((post) => {
    const matchesCategory = category === "Semua" || post.category === category;
    const text = `${post.title} ${post.excerpt}`.toLowerCase();
    return matchesCategory && text.includes(query.toLowerCase());
  }), [category, query]);

  return (
    <>
      <SEO title="Insight" description="Perspektif QSolution tentang transformasi digital untuk sekolah, UMKM, dan teknologi hijau." path="/insight" />
      <main>
        <section className="page-hero section"><div className="container narrow"><p className="eyebrow">Insight QSolution</p><h1>Jual kejelasan arah,<br /><em>bukan sekadar teknologi.</em></h1><p>Catatan praktis untuk membantu sekolah dan UMKM mengambil keputusan digital yang lebih terarah.</p></div></section>
        <section className="section insight-list" aria-labelledby="insight-heading">
          <div className="container">
            <div className="insight-toolbar">
              <h2 id="insight-heading">Artikel terbaru</h2>
              <div className="insight-filters">
                <Input aria-label="Cari artikel" contentBefore={<Search24Regular />} placeholder="Cari insight" value={query} onChange={(event) => setQuery(event.target.value)} />
                <Dropdown aria-label="Filter kategori" value={category} selectedOptions={[category]} onOptionSelect={(_, data) => setCategory(data.optionValue)}>
                  {categories.map((item) => <Option key={item} value={item}>{item}</Option>)}
                </Dropdown>
              </div>
            </div>
            <div className="blog-grid">
              {filteredPosts.map((post) => <Card className="blog-card" key={post.slug}><div className="blog-image"><span>{post.category}</span><div className="blog-image-lines" /></div><div className="blog-card-body"><div className="post-meta">{post.date} · {post.readTime}</div><h3><Link to={`/insight/${post.slug}`}>{post.title}</Link></h3><p>{post.excerpt}</p><Link className="text-link" to={`/insight/${post.slug}`}>Baca artikel ↗</Link></div></Card>)}
            </div>
            {filteredPosts.length === 0 && <p className="empty-state">Tidak ada artikel yang cocok dengan pencarian Anda.</p>}
          </div>
        </section>
      </main>
    </>
  );
}
