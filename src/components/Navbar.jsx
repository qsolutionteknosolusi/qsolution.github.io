/**
 * Navbar.jsx
 *
 * Purpose:
 * Provides primary navigation, assessment CTA, and accessible mobile-menu behavior.
 */
import { useEffect, useRef, useState } from "react";
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
  const menuButtonRef = useRef(null);
  const navigationRef = useRef(null);

  useEffect(() => {
    if (!open) return;

    const firstMenuItem = navigationRef.current?.querySelector("a, button");
    firstMenuItem?.focus();

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setOpen(false);
        menuButtonRef.current?.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [open]);

  const closeMenu = () => {
    setOpen(false);
    menuButtonRef.current?.focus();
  };

  const goToAssessment = () => {
    closeMenu();
    navigate("/assessment");
  };

  return (
    <header className="site-header">
      <nav className="container nav-bar" aria-label="Navigasi utama">
        <Link className="brand" to="/" onClick={() => setOpen(false)} aria-label="QSolution beranda">
          <span className="brand-mark">Q</span>
          <span>Solution</span>
        </Link>
        <div id="primary-navigation" ref={navigationRef} className={`nav-links ${open ? "is-open" : ""}`}>
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === "/"}
              className={({ isActive }) => (isActive ? "active" : "")}
              onClick={closeMenu}
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
            ref={menuButtonRef}
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
