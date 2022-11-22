import React from 'react';
import NavBar from './components/nav-bar';
import styles from '../styles/Home.module.css';

function domotique() {
  return (
    <div>
      <NavBar />
      <main className={styles.main}>
        <h1>domotique</h1>
      </main>
    </div>
  );
}

export default domotique;
