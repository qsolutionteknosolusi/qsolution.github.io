import { Link } from "react-router-dom";
import { ArrowUpRight24Regular } from "@fluentui/react-icons";
import { posts } from "../blog/posts";

export default function BlogPreview() {
  return (
    <section className="section blog-section">
      <div className="container">
        <div className="section-heading blog-heading">
          <div><p className="eyebrow">From the insight desk</p><h2>Ide untuk bergerak maju.</h2></div>
          <Link className="text-link" to="/insight">Lihat semua insight <span aria-hidden="true">↗</span></Link>
        </div>
        <div className="blog-grid">
          {posts.slice(0, 3).map((post) => (
            <article className="blog-card" key={post.slug}>
              <div className="blog-image"><span>{post.category}</span><div className="blog-image-lines" /></div>
              <div className="blog-card-body"><div className="post-meta">{post.date} · {post.readTime}</div><h3><Link to={`/insight/${post.slug}`}>{post.title}</Link></h3><p>{post.excerpt}</p><Link className="post-link" to={`/insight/${post.slug}`} aria-label={`Baca ${post.title}`}><ArrowUpRight24Regular /></Link></div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
