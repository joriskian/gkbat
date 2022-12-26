import Link from 'next/link';
import Image from 'next/image';
import React, { useState } from 'react';
import styles from './NavBar.module.css';

const NavBar = () => {
  const [isActive, setActive] = useState(false);

  const toggleClass = (e) => {
    setActive(!isActive);
  };
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <Link
          href={'/'}
          aria-label="visit homepage"
          aria-current="page"
          className={styles.nav_icon}
          title="HomePage"
        >
          <Image width="40" height="40" src="/logo.svg" alt="logo gk-bat" />
          <span>GK-Bat</span>
        </Link>
        <div className={styles.main_navlinks}>
          {/* menu hamburger */}
          <button
            onClick={toggleClass}
            className={
              isActive ? styles.hamburger + ' ' + styles.open : styles.hamburger
            }
            type="button"
            aria-label="Toggle navigation"
            aria-expanded={isActive ? 'true' : 'false'}
          >
            {/*barres pour le menu hamburger*/}
            <span></span>
            <span></span>
            <span></span>
          </button>
          {/*liens de navigation */}
          <div
            className={
              isActive
                ? styles.navlinks_container + ' ' + styles.open
                : styles.navlinks_container
            }
          >
            <Link href={'/climatisation'} aria-label="climatisation">
              Climatisation
            </Link>
            <Link href={'/electricite'} aria-label="électricité">
              Electricité
            </Link>
            <Link href={'/domotique'} aria-label="domotique">
              Domotique
            </Link>
            <Link href={'/realisation'} aria-label="Nos réalisations">
              Nos Réalisations
            </Link>
          </div>
        </div>
        {/*`contact button`*/}
        <div className={styles.contact} title="Contact">
          <Link href={'/contact'} aria-label="contact">
            <Image
              width={'40'}
              height={'40'}
              src="/telephone.svg"
              alt="contact"
            />
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
