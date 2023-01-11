import React from 'react';
import Head from 'next/head';
import Image from 'next/image';

import styles from '../styles/Home.module.css';
/** importing 3D */
import Camera from './components/Camera';

function domotique() {
  return (
    <div className={styles.container}>
      <Head>
        <title>GK-BAT - Domotique</title>
        <meta name="description" content="Climatisation in Lille and around" />
        <link rel="icon" href="/logo.ico" />
      </Head>

      <div className={styles.main}>
        {/* <Camera /> */}
        {/* <Test3D /> */}
        <h1>Alarme et domotique</h1>
        <h2>Artisan à Wambrechies et sa région</h2>
        <p>
          La domotique consiste à l’installation d’appareils automatisés dans
          une habitation. Elle vise principalement à l’amélioration du confort
          et de la sécurité des maisons. Votre artisan du bâtiment à Wambrechies
          et sa région vous propose son expertise pour le choix, l’installation
          ou la maintenance de vos équipements domotique et systèmes d’alarme.
        </p>
        <h2>La sécurité domestique : votre habitation sous alarme</h2>
        <Image
          className={styles.simpleImage}
          placeholder="empty"
          width="250"
          height="250"
          alt="camera de surveillance"
          src={'/imgs/image-camera.jpg'}
        />
        <p>
          Aujourd’hui, les évolutions technologiques offrent toute une gamme de
          solutions destinées à la sécurité domestique. GKBAT vous propose son
          accompagnement et son savoir-faire dans toute nouvelle installation,
          remise aux normes ou maintenance de vos installations de sécurité
          domestique. Nous intervenons notamment dans l’installation et
          l’entretien de :
        </p>
        <ul>
          <li>Alarme domestique,</li>
          <li>Solutions de sécurité,</li>
          <li>Alarme connectée,</li>
          <li>Serrure connectée,</li>
          <li>Caméra connectée,</li>
          <li>Système de vidéosurveillance connectée,</li>
          <li>Détecteurs de mouvement,</li>
          <li>Alarme anti-intrusion…</li>
        </ul>
        <h2>La domotique, pour une maison connectée</h2>
        <Image
          className={styles.simpleImage}
          placeholder="empty"
          width="250"
          height="250"
          alt="detecteur de mouvement"
          src={'/imgs/image-detection-mouvement.jpg'}
        />
        <p>
          Le principal avantage des produits alarme et domotique, c’est tout
          d’abord son autonomie et ses fonctionnalités contrôlables à distance.
          A partir d’un terminal connecté (smartphone, tablette, ordinateur
          portable…), le propriétaire peut piloter tous les objets ou appareils
          connectés dans son domicile, y compris les systèmes d’alarme et les
          appareils électroménagers connectés (frigo, lave-vaisselle,
          lave-linge, cuisinière, etc.). Chaque appareil connecté est capable
          d’alerter le propriétaire en cas d’incident ou d’intrusion, par
          exemple, via un SMS ou un mail. GKBAT vous accompagne et vous
          conseille dans le choix et l’installation de vos produits alarme et
          domotique comme :
        </p>
        <ul>
          <li>Détecteur de mouvement et de lumière,</li>
          <li>Prise connectée,</li>
          <li>Box domotique,</li>
          <li>Caméra connectée,</li>
          <li>Thermostat connecté,</li>
          <li>Système de vidéosurveillance,</li>
          <li>Détecteur de fumée ou de gaz,</li>
          <li>Capteur d’air connecté,</li>
          <li>Aspirateur connecté,</li>
          <li>Ampoules connectées,</li>
          <li>Serrures connectées,</li>
          <li>Alarmes connectées,</li>
          <li>Capteurs environnementaux…</li>
        </ul>
      </div>
    </div>
  );
}

export default domotique;
