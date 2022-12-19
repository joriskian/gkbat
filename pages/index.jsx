import Head from 'next/head';
import Link from 'next/link';
import NavBar from './components/NavBar';
import styles from '../styles/Home.module.css';
import Image from 'next/image';
import Footer from './components/footer';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>GK-BAT - l'éléctricité sur la region Lilloise</title>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          // plein ecran pour les portables
          content="width=device-width, initial-scale=1.0"
        />
        <meta
          name="description"
          content="éléctricité sur Lille et les environs"
        />
        <link rel="icon" href="/logo.ico" />
      </Head>
      <NavBar className={'styles.navBar'} />

      <main className={styles.main}>
        <div
          id="elec"
          className="container"
          itemScope
          itemType="https://schema.org/Electrician"
        >
          <h1 itemProp="name">GKBAT</h1>
          <h2>
            Artisan électricien et spécialiste en domotique à
            <div
              itemProp="location"
              itemScope
              itemType="https://schema.org/Place"
            >
              <div
                itemProp="geo"
                itemScope
                itemType="https://schema.org/GeoCircle"
              >
                <div
                  itemProp="geoMidpoint"
                  itemScope
                  itemType="https://schema.org/GeoCoordinates"
                >
                  <meta itemProp="latitude" content="50.687949" />
                  <meta itemProp="longitude" content="3.040141" />
                </div>
                <meta itemProp="geoRadius" content="30000" />
              </div>
            </div>
            <div
              itemProp="location"
              itemScope
              itemType="https://schema.org/PostalAddress"
            >
              <span itemProp="addressLocality">Wambrechies</span>
              <span itemProp="postalCode">
                <div style={{ display: ' none' }}>59118</div>
              </span>
            </div>
          </h2>
          <p>
            Pour l'installation électrique de la maison ou l'équipement
            domotique, l'équipe GKBAT est à votre service.
          </p>
          <p>
            Installé à Wambrechies, à proximité de Lille,{' '}
            <span itemProp="name">GKBAT</span> met à votre disposition son
            savoir-faire et ses compétences pour vous assurer des réalisations
            de qualité.
          </p>

          <p>
            Vous souhaitez faire appel à une entreprise d'électricité générale ?
          </p>
          <p>
            Qu'il s'agisse d'une installation neuve, d'une mise en conformité ou
            d'un dépannage, GKBAT répond à vos besoins ! Votre artisan
            électricien vous propose son savoir-faire dans les domaines suivants
            :
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
              <Link href={'/climatisation'}>Climatisation</Link>
            </li>
            <li>
              <Link href={'/electricite'}>Eléctricité</Link>
            </li>
            <li>
              <Link href={'/depannage'}>
                Installation/depannage de chaudière
              </Link>
            </li>
            <li>
              <Link href={'/renovation'}>Rénovation générale</Link>
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
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis
          temporibus, fuga neque incidunt ab rem corrupti laudantium iste amet
          voluptatum quae sequi labore perspiciatis itaque, reprehenderit
          nostrum possimus accusamus cupiditate. At, fugiat minus. Totam sunt
          incidunt, veritatis nisi id fugiat? Ea ipsum porro, odio consectetur
          sit quos laudantium culpa. Mollitia quae tenetur eligendi hic alias.
          Voluptatem fugiat similique doloremque reprehenderit? Dolorum quasi
          quod eius libero! Provident, quaerat. Temporibus ad aperiam
          consequuntur dolore dolorum reiciendis voluptatem molestias debitis
          sunt odit, eum quidem ab et explicabo magnam deleniti minus quo nihil
          magni. Dolor voluptatibus atque provident, ea illo impedit
          reprehenderit libero, a nihil incidunt aut aperiam, enim qui veniam.
          Ullam non quod maxime eius doloremque. Tempora, commodi facilis
          impedit dolores quas veniam. Veniam nobis tempore earum cupiditate
          dolore asperiores culpa nemo, quaerat enim placeat error obcaecati.
          Dolorem ad doloremque fugiat officia magni, quisquam sit sint eos
          perferendis velit nostrum excepturi quas quis? Corrupti necessitatibus
          libero, voluptates quisquam aliquid dignissimos officia laudantium
          illum ipsa quidem qui incidunt, accusamus impedit! Quasi quibusdam,
          officia, dolores autem error iusto neque culpa modi molestiae magni
          iste quo. Recusandae ut eaque nihil minima quidem laboriosam voluptas
          culpa delectus cumque saepe. Veritatis dicta porro velit nesciunt,
          deserunt modi sapiente iure non fuga sit tempore praesentium
          accusamus! Suscipit, commodi alias? Cupiditate quas cum quidem placeat
          hic voluptatem, incidunt iusto ipsa voluptatibus nisi rerum quam quos
          accusamus cumque distinctio ut dolorem, recusandae quo voluptatum
          itaque! Accusamus exercitationem quisquam iusto veniam fuga. Provident
          eos quas nobis porro rerum, voluptatibus nostrum fugit laborum, magnam
          quasi harum excepturi laudantium veritatis nihil consectetur, nulla
          enim? Voluptatum quisquam quod laboriosam repudiandae? Voluptate, fuga
          in? Quidem, iure? Aliquid commodi ipsam harum quo. Ullam sit, at ad
          fugit velit saepe ipsam eveniet similique, cupiditate voluptatum
          quibusdam qui vero! Quo fugiat laborum minus in officia, molestiae vel
          consequuntur consequatur! Aliquam vitae veritatis ab eveniet aperiam,
          est impedit saepe tenetur placeat nam ratione atque minus
          exercitationem necessitatibus, quae facilis maiores minima dolore
          corrupti. Rem voluptatem porro itaque quaerat quis. Ducimus. Amet cum
          corrupti odio atque alias, repudiandae provident natus aspernatur et
          iure voluptatibus deserunt aliquam quos voluptatum soluta officiis.
          Ipsam voluptatibus at in corporis suscipit vero aut commodi non omnis.
          Quibusdam non, assumenda possimus aut ut error! Optio assumenda modi
          aliquam obcaecati mollitia voluptatibus. Ea odio, dolores rerum
          inventore, quidem voluptatibus saepe nemo vitae iusto, sit sint facere
          fugit totam. Asperiores blanditiis odio soluta? Nobis voluptas,
          incidunt consequatur dicta quaerat cumque, nihil architecto asperiores
          porro dolore eum nostrum facere ex iure deleniti! Possimus rerum
          aspernatur ipsa expedita in id nisi. Modi voluptatum quidem, veritatis
          illo quae impedit iure hic eaque delectus perferendis quaerat aliquid,
          molestias, vero fuga tempora labore. Magnam ipsam vitae dignissimos
          fuga modi quae voluptatibus amet minus quod.
        </p>
      </main>

      <Footer />
    </div>
  );
}
