import Link from 'next/link';
import Image from 'next/image';
import React, { useState } from 'react';
import NavItem from './NavItem';
import styles from './NavBar.module.css';
import { PRERENDER_REVALIDATE_ONLY_GENERATED_HEADER } from 'next/dist/server/api-utils';

const MENU_LIST = [
  { text: 'Climatisation', href: '/climatisation' },
  { text: 'Domotique', href: '/domotique' },
  { text: 'Electricité', href: '/electricite' },
  { text: 'Contact', href: '/contact' },
];
const Navbar = () => {
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
            className={styles.hamburger}
            type="button"
            aria-label="Toggle navigation"
            aria-expanded="false"
          >
            {/*barres pour le menu hamburger*/}
            <span></span>
            <span></span>
            <span></span>
          </button>
          {/*liens de navigation */}
          <div className={styles.navlinks_container}>
            <Link href={'/climatisation'} aria-label="climatisation">
              Climatisation
            </Link>
            <Link href={'/electricite'} aria-label="électricité">
              Electricité
            </Link>
            <Link href={'/domotique'} aria-label="domotique">
              Domotique
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

export default Navbar;
