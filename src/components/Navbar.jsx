import '../styles/navbar.css';

function Navbar() {
  return (
    <header className="navbar">
      <div className="container navbar-inner">
        <a href="#" className="brand">
          Finn Digital
        </a>

        <nav className="nav-links">
          <a href="#work">Work</a>
          <a href="#about">About</a>
          <a href="#contact" className="nav-contact">
            Get in touch
          </a>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;