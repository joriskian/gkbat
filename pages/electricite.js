import React from 'react';
import NavBar from './components/nav-bar';
import styles from '../styles/Home.module.css';

function electricite() {
  return (
    <div>
      <NavBar />
      <main className={styles.main}>
        <h1>electricite</h1>
      </main>
    </div>
  );
}

export default electricite;
