import React, { Component } from 'react';
import Navbar from './components/NavBar';
import styles from '../styles/Home.module.css';

export class contact extends Component {
  render() {
    return (
      <>
        <Navbar />
        <main className={styles.main}>
          <h1>contact</h1>
        </main>
      </>
    );
  }
}

export default contact;
