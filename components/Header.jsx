const Header = () =>{
    return(
<nav class="navbar">
        <div class="navbar-container">
            <label for="toggle-menu" class="menu-icon">☰</label>
            <span class="navbar-title">Accueil</span>
        </div>
        <input type="checkbox" id="toggle-menu"/>
        <ul class="menu-list">
            <li><a href="#Act">Actualités</a></li>
            <li><a href="#Direct">En direct</a></li>
            <li><a href="#Previsions">Prévisions</a></li>
        </ul>
    </nav>    )
}

export default Header