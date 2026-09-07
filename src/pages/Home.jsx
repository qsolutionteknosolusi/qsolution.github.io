import SEO from "../components/SEO";
import Hero from "../components/Hero";
import ProblemSection from "../components/ProblemSection";
import SolutionSection from "../components/SolutionSection";
import QScoreSection from "../components/QScoreSection";
import WhyQSolution from "../components/WhyQSolution";
import ProcessSection from "../components/ProcessSection";
import ShowcaseSection from "../components/ShowcaseSection";
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
      <main>
        <Hero />
        <ProblemSection />
        <SolutionSection />
        <QScoreSection />
        <WhyQSolution />
        <ProcessSection />
        <ShowcaseSection />
        <ImpactSection />
        <BlogPreview />
        <CTASection />
      </main>
    </>
  );
}
