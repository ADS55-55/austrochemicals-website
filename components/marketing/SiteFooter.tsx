import Link from "next/link";

export function SiteFooter() {
  return (
    <footer>
      <div className="foot-big">
        <span className="foot-big-word">OSTRO</span>{" "}
        <em className="foot-big-chem">CHEMICALS</em>
      </div>
      <div className="foot-grid">
        <div className="foot-col">
          <h5>Headquarters</h5>
          <p className="foot-addr">
            Austro Chem Technologies Pvt. Ltd.
            <br />
            Plot 14B, Phase II, GIDC Vatva
            <br />
            Ahmedabad, 382 445
            <br />
            Gujarat, India
          </p>
          <Link className="foot-mail" href="mailto:hello@austrochem.com">
            hello@austrochem.com →
          </Link>
        </div>
        <div className="foot-col">
          <h5>Explore</h5>
          <Link href="/">Home</Link>
          <Link href="/about">About Us</Link>
          <Link href="/products">Products</Link>
          <Link href="/services">Services</Link>
          <Link href="/industries">Industries</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/contact">Contact</Link>
        </div>
        <div className="foot-col">
          <h5>About</h5>
          <Link href="/about">MD&apos;s Desk</Link>
          <Link href="/about">Company Profile</Link>
          <Link href="/industries">Client List</Link>
          <Link href="/about">Certifications</Link>
          <Link href="/about">Sustainability</Link>
          <Link href="/about">Careers</Link>
          <Link href="/blog">Press &amp; Media</Link>
        </div>
        <div className="foot-col">
          <h5>Solutions</h5>
          <Link href="/products">Zero Liquid Discharge</Link>
          <Link href="/products">Effluent Treatment (ETP)</Link>
          <Link href="/products">Sewage Treatment (STP)</Link>
          <Link href="/products">Reverse Osmosis</Link>
          <Link href="/products">Evaporators &amp; Crystallizers</Link>
          <Link href="/products">Specialty Chemistry</Link>
          <Link href="/products">SCADA &amp; Controls</Link>
        </div>
      </div>
      <div className="foot-bottom">
        <span>
          © {new Date().getFullYear()} OSTRO CHEMICALS · All rights reserved
        </span>
        <div className="links">
          <Link href="/contact">Privacy</Link>
          <Link href="/contact">Terms</Link>
          <Link href="/contact">Cookies</Link>
          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}
