import React from 'react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer>
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
