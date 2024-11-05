import Link from 'next/link';

export default function Header() {
  return (
    <header>
      <div className="header-container">
        <div className="logo-container">
          <Link href="/" className="logo">
            <img src="/image/programmer.jpg" alt="Logo" />
          </Link>
        </div>
        <nav>
          <Link href="/">Home</Link>
          <Link href="/portfolio">Portfolio</Link>
          <Link href="/projects">Projects</Link>
          <Link href="/contact">Contact</Link>
          <Link href="/services">Services</Link>
          <Link href="/about">About</Link>
          <Link href="/blog">Blog</Link>
        </nav>
      </div>
    </header>
  );
}
