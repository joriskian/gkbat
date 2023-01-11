import React from 'react';
import Head from 'next/head';
import Image from 'next/image';

import styles from '../styles/Home.module.css';
import Test3D from './components/Test3D';

function climatisation() {
  return (
    <div className={styles.container}>
      <Head>
        <title>GK-BAT - Climatisation</title>
        <meta
          name="description"
          content="Climatisation à Lille et les environs"
        />
        <link rel="icon" href="/logo.ico" />
      </Head>

      <div
        className={styles.main}
        itemScope
        itemType="https://schema.org/HVACBusiness"
      >
        {/* <Test3D /> */}
        <h1>climatisation</h1>
        <p>
          <span itemProp="name">GKBAT</span> dispose d’une grande maîtrise des
          techniques de climatisation. Grâce à ses 10 années d’expériences,
          votre artisan du bâtiment à
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
            <span itemProp="addressLocality">Wambrechies (59) </span>
            <span itemProp="postalCode">
              <span style={{ display: ' none' }}>59118</span>
            </span>
          </span>
          et sa région saura satisfaire tous vos besoins en termes de régulation
          de la température de votre maison.
        </p>
        <h2>Artisan à Wambrechies et sa région</h2>
        <Image
          className={styles.simpleImage}
          placeholder="empty"
          width="250"
          height="250"
          alt="regulateur de climatisation"
          src={'/imgs/regulateur-climatisation.jpg'}
        />
        <p>
          <span itemProp="name">GKBAT</span> vous propose plusieurs types de
          systèmes de climatisation. Notre démarche s’appuie sur une analyse
          approfondie des différents paramètres pour que vous puissiez
          bénéficier d’une climatisation simple, facile à entretenir et
          efficace. Votre artisan du bâtiment à Wambrechies (59) et sa région se
          déplace chez vous, prend en compte vos besoins, et vous propose la
          meilleure solution pour atteindre vos objectifs en termes de
          régulation de la température. Que ce soit une climatisation réversible
          ou une climatisation simple, nous pouvons réaliser tout cela. Et pour
          être sûr que le résultat final soit à la hauteur de vos attentes, vous
          pourrez suivre avec attention chaque étape de la pose et de
          l’installation de votre climatisation.
        </p>
        <h2>La climatisation, pour rafraîchir pièces et habitation</h2>
        <p>
          Inventée au début du XXesiècle, le système de climatisation moderne
          s’est vite imposé dans les ménages. Permettant, par simple pression
          sur un bouton, de régler la température d’une pièce, elle offre un
          réel confort et facilite grandement la vie à la maison. Actuellement,
          il existe plusieurs types de climatiseur mais on peut les regrouper en
          2 types :
        </p>
        <ul>
          <li>
            La climatisation simple flux : qui assure uniquement le
            rafraîchissement des pièces. Le principal avantage de ce système est
            qu’il est facile à installer et qu’il offre un changement de la
            température plus rapide.
          </li>
          <li>
            La climatisation réversible : ce type permet, en plus de rafraîchir
            une pièce, de la chauffer. C’est donc un système polyvalent qui peut
            être utilisé pendant toutes les saisons.
          </li>
          <p>
            Quel que soit le type de climatisation que vous aurez choisi, votre
            artisan du bâtiment à Wambrechies et sa région sera capable
            d’effectuer la pose et l’installation de climatiseur dans les
            meilleurs délais
          </p>
          <h2>Les avantages de l’installation d’une climatisation</h2>
          <Image
            className={styles.simpleImage}
            placeholder="empty"
            width="250"
            height="250"
            alt="climatiseur"
            src={'/imgs/image-climatiseur.jpg'}
          />
          <p>
            Le principal avantage de disposer d’un système de climatisation dans
            sa maison, c’est le confort apporté. Si vous optez par exemple pour
            une climatisation réversible, vous serez sûr que la température à
            l’intérieur de votre maison sera fraîche pendant les saisons chaudes
            et chaleureuse lors des jours de grand froid. La pose et
            l’installation d’une climatisation permet aussi de faire des
            économies sur le coût du chauffage car certains modèles ne
            consomment que peu d’électricité. N’hésitez donc pas à faire appel à
            votre artisan du bâtiment à Wambrechies et sa région si vous voulez
            profiter de tous ces avantages.
          </p>
        </ul>
      </div>
    </div>
  );
}

export default climatisation;
