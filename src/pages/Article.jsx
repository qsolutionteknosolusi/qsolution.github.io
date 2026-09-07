import { Link, Navigate, useLocation, useParams } from "react-router-dom";
import SEO from "../components/SEO";
import { posts } from "../blog/posts";

function MarkdownContent({ content }) {
  return content.split("\n\n").map((block) => {
    if (block.startsWith("## ")) return <h2 key={block}>{block.slice(3)}</h2>;
    return <p key={block}>{block}</p>;
  });
}

export default function Article() {
  const { slug } = useParams();
  const { pathname } = useLocation();
  const post = posts.find((item) => item.slug === slug);
  if (!post) return <Navigate to="/insight" replace />;

  return (
    <>
      <SEO title={post.title} description={post.excerpt} path={pathname} type="article" publishedTime={post.publishedTime} category={post.category} />
      <main id="main-content" className="article-page" tabIndex="-1"><article className="container article"><Link className="back-link" to="/insight">← Kembali ke insight</Link><p className="eyebrow">{post.category} · {post.date} · {post.readTime}</p><h1>{post.title}</h1><p className="article-lead">{post.excerpt}</p><div className="article-visual"><span>QSOLUTION / INSIGHT</span><div className="blog-image-lines" /></div><div className="article-content"><MarkdownContent content={post.content} /></div></article></main>
    </>
  );
}
