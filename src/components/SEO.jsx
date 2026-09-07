import { Helmet } from "react-helmet-async";

const siteUrl =
  import.meta.env.VITE_SITE_URL ||
  "https://www.qsolution.id";
const ogImage = `${siteUrl}/og-image.png`;
const defaultDescription =
  "QSolution membantu sekolah dan UMKM mengukur kesiapan digital dan menentukan roadmap transformasi sebelum berinvestasi pada teknologi.";

export default function SEO({
  title,
  description = defaultDescription,
  path = "",
  type = "website",
  publishedTime,
  category,
}) {
  const pageTitle = title
    ? `${title} | QSolution Indonesia`
    : "QSOLUTION | Mitra Transformasi Digital untuk Sekolah dan UMKM";
  const canonical = `${siteUrl}${path || "/"}`;
  const organization = {
    "@type": "Organization",
    "@id": `${siteUrl}/#organization`,
    name: "QSolution Indonesia",
    url: siteUrl,
    logo: `${siteUrl}/favicon.svg`,
    description: defaultDescription,
    areaServed: "ID",
    knowsAbout: ["Transformasi Digital", "Pendidikan", "UMKM", "Green Technology"],
  };
  const structuredData = type === "article"
    ? {
        "@context": "https://schema.org",
        "@type": "Article",
        headline: title,
        description,
        mainEntityOfPage: canonical,
        author: { "@id": `${siteUrl}/#organization` },
        publisher: { "@id": `${siteUrl}/#organization` },
        datePublished: publishedTime,
        articleSection: category,
      }
    : {
        "@context": "https://schema.org",
        "@type": "WebSite",
        name: "QSolution Indonesia",
        url: siteUrl,
        description: defaultDescription,
        publisher: { "@id": `${siteUrl}/#organization` },
        potentialAction: {
          "@type": "SearchAction",
          target: `${siteUrl}/insight?q={search_term_string}`,
          "query-input": "required name=search_term_string",
        },
        about: organization,
      };

  return (
    <Helmet>
      <html lang="id" />
      <title>{pageTitle}</title>
      <meta name="description" content={description} />
      <meta name="robots" content="index, follow, max-image-preview:large" />
      <meta name="theme-color" content="#0F766E" />
      <meta property="og:locale" content="id_ID" />
      <meta property="og:site_name" content="QSolution Indonesia" />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content="QSolution — Transformasi Digital untuk Sekolah dan UMKM" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      {publishedTime && <meta property="article:published_time" content={publishedTime} />}
      {category && <meta property="article:section" content={category} />}
      <link rel="canonical" href={canonical} />
      <script type="application/ld+json">{JSON.stringify([organization, structuredData])}</script>
    </Helmet>
  );
}
