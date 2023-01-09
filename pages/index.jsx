import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Home.module.css';
import Image from 'next/image';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>GK-BAT - l&apos;éléctricité sur la region Lilloise</title>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          // plein ecran pour les portables
          content="width=device-width, initial-scale=1.0"
        />
        <meta
          name="description"
          content="éléctricité et climatisation sur Wambrechies et les environs"
        />
        <link rel="icon" href="/logo.ico" />
      </Head>

      <div className={styles.main}>
        <div
          id="elec"
          className="container"
          itemScope
          itemType="https://schema.org/Electrician"
        >
          <h1 itemProp="name">GKBAT</h1>
          <h2>
            Artisan électricien spécialiste
            <br /> en domotique et climatisation à
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
            <div
              itemProp="location"
              itemScope
              itemType="https://schema.org/PostalAddress"
            >
              <span itemProp="addressLocality">Wambrechies</span>
              <span itemProp="postalCode">
                <span style={{ display: ' none' }}>59118</span>
              </span>
            </div>
          </h2>

          <p>
            Pour l&apos;installation électrique de la maison ou
            l&apos;équipement domotique, l&apos;équipe GKBAT est à votre
            service.
          </p>
          <p>
            Installé à Wambrechies, à proximité de Lille,{' '}
            <span itemProp="name">GKBAT</span> met à votre disposition son
            savoir-faire et ses compétences pour vous assurer des réalisations
            de qualitées.
          </p>

          <p>
            Vous souhaitez faire appel à une entreprise d&apos;électricité
            générale ?
          </p>
          <p>
            Qu&apos;il s&apos;agisse d&apos;une installation neuve, d&apos;une
            mise en conformité ou d&apos;un dépannage, GKBAT répond à vos
            besoins !
          </p>
          <p>
            Votre artisan électricien vous propose son savoir-faire dans les
            domaines suivants :
          </p>
        </div>
        <nav>
          <ul className={styles.liste}>
            <li>
              <Link
                href={'/domotique'}
                aria-label="Domotique"
                title="Domotique"
              >
                Domotique
              </Link>
            </li>
            <li>
              <Link
                href={'/climatisation'}
                aria-label="climatisation"
                title="Climatisation"
              >
                Climatisation
              </Link>
            </li>
            <li>
              <Link
                href={'/electricite'}
                aria-label="électricité"
                title="Eléctricité"
              >
                Eléctricité
              </Link>
            </li>
            <li>
              <Link
                href={'/depannage'}
                aria-label="dépannage"
                title="Dépannage"
              >
                Installation/depannage de chaudière
              </Link>
            </li>
            <li>
              <Link
                href={'/renovation'}
                aria-label="renovation"
                title="renovation"
              >
                Rénovation générale
              </Link>
            </li>
          </ul>
        </nav>
        <Image
          width="250"
          height="250"
          placeholder="empty"
          alt="1er image"
          src={'/elec.jpg'}
        />
        <p>Pour nous joindre au téléphone : 06 66 73 58 01</p>
      </div>
    </div>
  );
}
