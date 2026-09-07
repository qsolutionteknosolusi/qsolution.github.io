import { Button, Card } from "@fluentui/react-components";
import { ArrowLeft24Regular, ChatBubblesQuestion24Regular } from "@fluentui/react-icons";
import { Link } from "react-router-dom";
import SEO from "../components/SEO";

export default function NotFound() {
  return (
    <>
      <SEO
        title="Halaman Tidak Ditemukan"
        description="Halaman yang Anda cari tidak ditemukan."
        path="/404"
        robots="noindex, nofollow"
      />
      <main id="main-content" tabIndex="-1">
        <section className="page-hero section not-found-page" aria-labelledby="not-found-heading">
          <div className="container narrow">
            <Card className="not-found-card">
              <p className="eyebrow">QSolution</p>
              <h1 id="not-found-heading">404</h1>
              <p>Halaman yang Anda cari tidak ditemukan.</p>
              <div className="button-row">
                <Button appearance="primary" as={Link} to="/" icon={<ArrowLeft24Regular />}>
                  Kembali ke Beranda
                </Button>
                <Button appearance="secondary" as={Link} to="/contact" icon={<ChatBubblesQuestion24Regular />}>
                  Hubungi QSolution
                </Button>
              </div>
            </Card>
          </div>
        </section>
      </main>
    </>
  );
}
