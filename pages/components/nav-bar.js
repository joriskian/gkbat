import React, { useState } from 'react';
import Link from 'next/link';

function NavBar() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  return (
    <div className="navbar">
      <ul className={click ? 'nav-menu active' : 'nav-menu'}>
        <li>
          <Link href="/" className="nav-links" onClick={handleClick}>
            Logo
          </Link>
        </li>
        <li>
          <Link href="/domotique" className="nav-links" onClick={handleClick}>
            domotique
          </Link>
        </li>
        <li>
          <Link
            href="/climatisation"
            className="nav-links"
            onClick={handleClick}
          >
            climatisation
          </Link>
        </li>
        <li>
          <Link href="/electricite" className="nav-links" onClick={handleClick}>
            electricité
          </Link>
        </li>
      </ul>
      <style jsx>
        {`.navbar {
  background-color: rgb(18, 18, 80);
  height: 80px;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1em;
  position: sticky;
  top: 0;
  z-index: 100;
}
.nav-container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vw;
  max-width: 1500px;
}
.nav-logo {
  color: yellow;
  align-items: center;
  margin-left: 5px;
  cursor: pointer;
  text-decoration: none;
  font-size: 2rem;
  flex-grow: 1;
}
.nav-menu {
  display: flex;
  list-style: none;
  text-align: center;
  margin-right: 2rem;
}
.nav-links {
  color: white;
  text-decoration: none;
  padding: 2vh 2vh;
  height: 100%;
  border-bottom: 3px solid transparent;
}
.nav-menu > li {
  line-height: 40px;
  margin-right: 0.5rem;
}
.nav-menu > li:after {
  content: '';
  display: block;
  height: 3px;
  width: 0;`}
      </style>
    </div>
  );
}

export default NavBar;
