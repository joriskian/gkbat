import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import { ElecSchema } from './components/ElecSchema';

function electricite() {
  return (
    <div className={styles.container}>
      <Head>
        <title>GK-BAT - electricité</title>
        <meta name="description" content="Electricity in Lille and around" />
        <link rel="icon" href="/logo.ico" />
        <ElecSchema />
      </Head>

      <div
        className={styles.main}
        id="elec"
        itemScope
        itemType="https://schema.org/Electrician"
      >
        <h1>Travaux d’électricité</h1>
        <h2>
          Artisan à{' '}
          <span
            itemProp="location"
            itemScope
            itemType="https://schema.org/Place"
          >
            <span
              itemProp="geo"
              itemScope
              itemType="https://schema.org/GeoCircle"
            >
              <span
                itemProp="geoMidpoint"
                itemScope
                itemType="https://schema.org/GeoCoordinates"
              >
                <meta itemProp="latitude" content="50.687949" />
                <meta itemProp="longitude" content="3.040141" />
              </span>
              <meta itemProp="geoRadius" content="30000" />
            </span>
          </span>
          <span
            itemProp="location"
            itemScope
            itemType="https://schema.org/PostalAddress"
          >
            <span itemProp="addressLocality">Wambrechies et sa region</span>
            <span itemProp="postalCode">
              <span style={{ display: ' none' }}>59118</span>
            </span>
          </span>
        </h2>
        <p>
          es installations électriques, même minimes, nécessitent des
          compétences pointues, afin d’éviter tout risque qui pourrait provoquer
          de graves incidents. Si vous avez besoin des compétences d’un artisan
          du bâtiment à Wambrechies et sa région, vous pouvez contacter{' '}
          <span itemProp="name">GKBAT</span>, le spécialiste de la construction
          et de tout travail d’électricité pour le bâtiment. Votre artisan se
          déplace à votre domicile pour réaliser vos nouvelles installations, ou
          pour un dépannage électrique quelconque.
        </p>
        <h2>Electricité : installation et dépannage en urgence</h2>
        <Image
          className={styles.simpleImage}
          placeholder="empty"
          width="250"
          height="250"
          alt="pose d'un compteur éléctrique"
          src={'/imgs/elec-visseuse.jpg'}
        />
        <p>
          Votre artisan vous propose toute une gamme de travaux d’électricité,
          pour assurer le bon fonctionnement de votre réseau électrique tout au
          long de l’année. Vous pouvez par exemple demander l’entretien régulier
          ou ponctuel de votre installation électrique, le raccordement de votre
          installation électrique au réseau public de distribution, la
          rénovation de vos anciennes installations électriques, le premier
          démarrage de votre compteur électrique, le raccordement de vos réseaux
          d’objets connectés (détecteur de fumée, prise connectée, etc.), mais
          également le dépannage de vos installations en urgence. Un problème
          électrique présente nombre de désagréments pour les utilisateurs.
          Votre artisan vous assure une intervention rapide où que vous soyez à
          Wambrechies et sa région, pour la remise en fonction de vos
          installations électriques. La prise en charge d’une panne électrique
          par un non professionnel représente de graves risques d’incendie et
          d’électrocution.
        </p>
        <h2>La mise aux normes de vos installations électriques</h2>
        <Image
          className={styles.simpleImage}
          placeholder="empty"
          width="250"
          height="250"
          alt="mise aux normes d'un appareil"
          src={'/imgs/mise-aux-normes.jpg'}
        />
        <p>
          Avec l’avancée des nouvelles technologies, beaucoup de nouveaux
          appareils fonctionnent aujourd’hui avec le réseau électrique. Une
          installation qui date d’avant l’année 1991 nécessite une remise aux
          normes afin d’éviter les pannes fréquentes. Cette remise aux normes
          doit être effectuée par un vrai professionnel en électricité. Il va
          réaliser différentes études avant de commencer les travaux à
          proprement dit. En effet, il pourrait être nécessaire la rénovation de
          toutes les installations électriques, ou seulement d’une partie de
          celles-ci, afin que l’ensemble soit conforme à la norme NFC 15-100.  
        </p>
      </div>
    </div>
  );
}

export default electricite;
