const Header = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <label htmlFor="toggle-menu" className="menu-icon">☰</label>
      </div>
      <input type="checkbox" id="toggle-menu"/>
      <ul className="menu-list">
        <li><a href="#Act">Actualités</a></li>
        <li><a href="#Direct">En direct</a></li>
        <li><a href="#Previsions">Prévisions</a></li>
      </ul>
    </nav>
  )
}

export default Header;
