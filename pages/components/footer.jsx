import React from 'react';
import Link from 'next/link';
import styles from './footer.module.css';

function Footer() {
  return (
    <footer className={styles.footer}>
      <Link
        href={'/mention'}
        aria-label="Mentions legales"
        title="Mentions Légales"
      >
        <span>Mentions Légales</span>
      </Link>
      <Link href={'/plan'} aria-label="Plan du site" title="Plan du site">
        <span>Plan du Site</span>
      </Link>
      <Link
        href={'/administration'}
        aria-label="Administration"
        title="Administration"
      >
        <span>Administration</span>
      </Link>
    </footer>
  );
}

export default Footer;
