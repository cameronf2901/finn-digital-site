import '../styles/navbar.css';

function Navbar() {
  return (
    <header className="navbar">
      <div className="container navbar-inner">
        <a href="#" className="brand">
            <img
                src="/finn-digital-icon.png"
                alt="Finn Digital logo"
                className="brand-logo"
            />

            <span>Finn Digital</span>
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