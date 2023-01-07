import React from 'react';
import Head from 'next/head';

import styles from '../styles/Home.module.css';
import Test3D from './components/test3D';

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

      <main className={styles.main}>
        {/* <Test3D /> */}
        <h1 itemScope itemType="https://schema.org/HVACBusiness">
          climatisation
        </h1>
        <div className={styles.artContainer}>
          <article>
            <h2>Peut on installer son climatiseur n&apos;importe où ?</h2>

            <p>
              Dans la pluparts des cas, vous n&apos;aurez aucun problemes à
              choisir l&apos;emplacement de votre clim. Mais, il se peut, dans
              certains cas que vous ayez a faire avec un voisin particulierement
              tatillon. Aussi, nous vous recommandons de suivre les regles de
              l&apos;urbanisme concernant les nouvelles constructions. Selon le
              règlement, cette dernière doit se situer à 3 mètres minimum des
              limites de la propriété. Partant de ce principe, il est judicieux
              de placer le module extérieur du climatiseur à 6 mètres minimum
              par rapport aux voisins.
            </p>
          </article>
          <article>
            <h2>Que faire si mon voisin se plaint du bruit ?</h2>
            <p>
              L&apos;installation d&apos;un climatiseur extérieur doit être
              réalisée de manière à limiter son impact sur l&apos;environnement
              et les passants. Le bruit produit par l&apos;appareil ne doit pas
              dépasser certains décibels. Cette limite est fixée par la loi et
              est différente selon l&apos;heure du jour et de la nuit.
              L&apos;appareil doit être de niveau afin qu&apos;il ne vibre pas
              et ne fasse pas de bruit lorsqu&apos;il fonctionne.
            </p>

            <p>
              Le seuil gênant pour un bruit d&apos;ambiance commence à partir de
              50 dB. Un bruit devient insupportable avec un seuil fixé à 60 dB.{' '}
            </p>
          </article>
          <article>
            <h2>Faut-il une autorisation d&apos;urbanisme?</h2>
            <p>
              Ne vous inquietez pas, il ne faut pas de permis de construire,
              mais l&apos;article{' '}
              <a href="https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000027088004/2013-05-08">
                R.421.17
              </a>{' '}
              du code de l&apos;urbanisme stipule que doivent être soumis à une
              declaration prealable:{' '}
              <em>
                &ldquo;Les travaux de ravalement et les travaux ayant pour effet
                de modifier l&apos;aspect extérieur d&apos;un bâtiment
                existant&ldquo;.
              </em>
            </p>
            <div>
              En principe, vous devez donc :
              <ul>
                <li>
                  Faire une declaration prealable de travaux aupres de votre
                  mairie.
                </li>
                <li>
                  Le Maire dispose de 1 à 2 de mois pour decider ou non
                  d&apos;acceder a votre requête.
                </li>
                <li>Si il refuse, il doit justifier sa decision.</li>
                <li>
                  Si il ne vous reponds pas dans les delais, la declaration est
                  considérée comme acceptée.
                </li>
                <li>
                  Vous pourrez alors demander un certificat de non-opposition.
                </li>
                <li>
                  Vous devrez ensuite afficher ce certificat sur la construction
                  durant toute la durée du chantier.
                </li>
              </ul>
            </div>
            <p>
              Autant dire que peu de gens effectues réelement ces démarches.
              Deux mois pour installer une climatisation et autant de
              contraintes ne poussent pas vraiement les gens à le crier sur les
              toits. Et comme on dit, pour vivre heureux, vivons caché.
              Neanmoins, en cas de voisin malveillant ou de coproprieté....
              Attention : Vous vous exposer à des sanctions pouvant aller
              jusqu&apos;à l&apos;amende.
            </p>
          </article>
        </div>
      </main>
    </div>
  );
}

export default climatisation;
