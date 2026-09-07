import { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { Button, Tooltip } from "@fluentui/react-components";
import { Dismiss24Regular, Navigation24Regular } from "@fluentui/react-icons";

const links = [
  { label: "Beranda", to: "/" },
  { label: "Untuk Sekolah", to: "/qschool" },
  { label: "Untuk UMKM", to: "/qumkm" },
  { label: "Insight", to: "/insight" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const goToAssessment = () => {
    setOpen(false);
    navigate("/assessment");
  };

  return (
    <header className="site-header">
      <nav className="container nav-bar" aria-label="Navigasi utama">
        <Link className="brand" to="/" onClick={() => setOpen(false)} aria-label="QSolution beranda">
          <span className="brand-mark">Q</span>
          <span>Solution</span>
        </Link>
        <div id="primary-navigation" className={`nav-links ${open ? "is-open" : ""}`}>
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === "/"}
              className={({ isActive }) => (isActive ? "active" : "")}
              onClick={() => setOpen(false)}
            >
              {link.label}
            </NavLink>
          ))}
          <Button appearance="primary" className="nav-cta" onClick={goToAssessment}>
            <span aria-hidden="true">🚀</span>
            <span>Cek Kesiapan Digital</span>
          </Button>
        </div>
        <Tooltip content={open ? "Tutup menu" : "Buka menu"} relationship="label">
          <Button
            appearance="subtle"
            className="mobile-menu"
            icon={open ? <Dismiss24Regular /> : <Navigation24Regular />}
            aria-controls="primary-navigation"
            aria-label={open ? "Tutup menu" : "Buka menu"}
            aria-expanded={open}
            onClick={() => setOpen((value) => !value)}
          />
        </Tooltip>
      </nav>
    </header>
  );
}
