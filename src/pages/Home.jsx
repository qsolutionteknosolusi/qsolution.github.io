/**
 * Home.jsx
 *
 * Purpose:
 * Composes the homepage conversion funnel and its supporting proof sections.
 *
 * Used By:
 * The root route (/).
 */
import SEO from "../components/SEO";
import Hero from "../components/Hero";
import ProblemSection from "../components/ProblemSection";
import QScoreDashboardPreview from "../components/QScoreDashboardPreview";
import PrivacyTrustCard from "../components/PrivacyTrustCard";
import TransformationRoadmap from "../components/TransformationRoadmap";
import ShowcaseSection from "../components/ShowcaseSection";
import BeforeAfterSection from "../components/BeforeAfterSection";
import ImpactSection from "../components/ImpactSection";
import BlogPreview from "../components/BlogPreview";
import CTASection from "../components/CTASection";

export default function Home() {
  return (
    <>
      <SEO
        title="Mitra Transformasi Digital untuk Sekolah dan UMKM"
        description="QSolution membantu sekolah dan UMKM mengukur kesiapan digital dan menentukan roadmap transformasi sebelum berinvestasi pada teknologi."
        path="/"
      />
      <main id="main-content" tabIndex="-1">
        <Hero />
        <QScoreDashboardPreview />
        <PrivacyTrustCard />
        <ProblemSection />
        <TransformationRoadmap />
        <ShowcaseSection />
        <BeforeAfterSection />
        <ImpactSection />
        <BlogPreview />
        <CTASection />
      </main>
    </>
  );
}
