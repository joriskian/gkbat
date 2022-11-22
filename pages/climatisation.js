import React from 'react';
import NavBar from './components/nav-bar';
import styles from '../styles/Home.module.css';

function climatisation() {
  return (
    <div>
      <NavBar />
      <main className={styles.main}>
        <h1>climatisation</h1>
      </main>
    </div>
  );
}

export default climatisation;
