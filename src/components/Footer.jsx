import {
  FaGithub as FaGh,
  FaLinkedin as FaLi,
  FaInstagram as FaIg,
} from "react-icons/fa";

export default function Footer() {
  const GH =
    import.meta.env.VITE_SOCIAL_GITHUB || "https://github.com/syed-thahir-0406";
  const LI =
    import.meta.env.VITE_SOCIAL_LINKEDIN ||
    "https://www.linkedin.com/in/syed-thahir-ahamedd-s-h";
  const MD =
    import.meta.env.VITE_SOCIAL_INSTAGRAM ||
    "https://www.instagram.com/syed_thahir_0406/";
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <div className="footer-left">©syedthahir0406</div>
        <div className="footer-center">All rights reserved</div>
        <div className="footer-right">
          <a
            className="social-link"
            href={GH}
            target="_blank"
            rel="noopener"
            aria-label="GitHub"
          >
            <FaGh size={22} />
          </a>
          <a
            className="social-link"
            href={LI}
            target="_blank"
            rel="noopener"
            aria-label="LinkedIn"
          >
            <FaLi size={22} />
          </a>
          <a
            className="social-link"
            href={MD}
            target="_blank"
            rel="noopener"
            aria-label="Instagram"
          >
            <FaIg size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
}
