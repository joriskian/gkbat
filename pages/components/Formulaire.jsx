import React from 'react';
import styles from '../../styles/Home.module.css';

function Formulaire() {
  return (
    <>
      <form className={styles.form}>
        <formGroup className={styles.inputGroup}>
          <label htmlFor="name">Nom</label>
          <input
            type="text"
            name="name"
            id="name"
            className={styles.inputField}
          />
        </formGroup>
        <formGroup className={styles.inputGroup}>
          <label htmlFor="name">Prenom</label>
          <input
            type="text"
            name="Prenom"
            id="Prenom"
            className={styles.inputField}
          />
        </formGroup>
        <formGroup className={styles.inputGroup}>
          <label htmlFor="phone">téléphone</label>
          <input
            type="tel"
            name="phone"
            pattern="^0[0-9]{7}"
            required
            id="phone"
            className={styles.inputField}
          />
        </formGroup>
      </form>
    </>
  );
}

export default Formulaire;
