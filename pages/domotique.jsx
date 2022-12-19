import React from 'react';
import Head from 'next/head';
import NavBar from './components/NavBar';
import Footer from './components/footer';
import styles from '../styles/Home.module.css';
/** importing 3D */
import Camera from './components/camera';
import Test3D from './components/test3D';

function domotique() {
  return (
    <div className={styles.container}>
      <Head>
        <title>GK-BAT - Domotique</title>
        <meta name="description" content="Climatisation in Lille and around" />
        <link rel="icon" href="/logo.ico" />
      </Head>
      <NavBar />
      <main className={styles.main}>
        <Camera />
        {/* <Test3D /> */}
        <h1>domotique</h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat
          delectus voluptatum id, vero numquam repellat atque alias adipisci sed
          esse quod iure perferendis sit aliquam nulla ex molestias quia
          officiis. Dicta inventore deserunt quo perferendis optio obcaecati
          mollitia provident officia adipisci fugit, reprehenderit alias maiores
          possimus saepe explicabo voluptates itaque? Sunt dolore et, ex porro
          minima ratione quibusdam obcaecati dicta! Nihil alias perferendis
          cumque, ea dignissimos eos eligendi necessitatibus tempore, illum
          delectus adipisci quibusdam minima temporibus rem dolorum culpa.
          Repudiandae explicabo ab nostrum modi nemo ad commodi quaerat, at
          delectus. Doloribus obcaecati provident at eius ullam exercitationem
          quia quo nihil assumenda incidunt. Sed dolorum totam tempora delectus
          commodi incidunt, autem corporis, in, fugit consequuntur vitae cum
          facilis magni reiciendis ut. Numquam, at quo ipsam eos magnam optio.
          Quam, commodi. Ab quisquam facere, nisi debitis amet nihil
          voluptatibus accusamus quis aspernatur minima iusto inventore, magni
          quibusdam odio exercitationem quam dignissimos beatae! Laborum
          doloribus blanditiis ipsam omnis quo pariatur, in animi ab corporis
          sequi, dolore recusandae modi, iusto porro? Aut commodi aspernatur
          mollitia error suscipit dicta libero, cupiditate impedit unde, ab
          itaque? Dicta recusandae cumque dolores fugiat hic iusto odit itaque
          ab, reprehenderit culpa vel minima a perferendis, blanditiis nobis
          nemo, quisquam incidunt facilis aut voluptatibus aliquam quis.
          Voluptas consequatur quibusdam iusto. Ipsa ullam nisi et sit? Hic,
          eum. Reprehenderit quis sint illo nobis cum, veniam numquam,
          asperiores fugit ipsum perspiciatis nostrum corrupti. Id dolorum
          ipsam, suscipit animi odio eligendi quos ut! Animi, quia distinctio!
          Corporis odio sapiente tempora iusto vitae aut quod nihil deleniti
          porro unde, placeat eos, eligendi possimus totam adipisci. Alias
          blanditiis pariatur sequi quo quibusdam facilis cupiditate cumque!
          Doloribus quam iure, inventore earum sunt laboriosam sed quis, labore
          tempore dolor quos sequi? Eligendi amet voluptate qui quasi aliquid?
          Voluptatibus labore reiciendis qui similique sapiente iure doloremque
          tenetur repellendus. Autem minima quod totam error officiis, aliquid
          veritatis dolore molestias hic! Sed doloribus libero qui commodi, ut
          quas enim similique at reiciendis voluptatem perferendis incidunt
          quaerat eveniet iste magnam aliquam. Voluptas repellat, dolorem ipsum
          ex recusandae dignissimos corporis rerum quaerat cum minima eius
          optio. Laboriosam hic in omnis, voluptatem expedita illo alias
          excepturi ut veniam ab amet vero unde culpa.
        </p>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat
          delectus voluptatum id, vero numquam repellat atque alias adipisci sed
          esse quod iure perferendis sit aliquam nulla ex molestias quia
          officiis. Dicta inventore deserunt quo perferendis optio obcaecati
          mollitia provident officia adipisci fugit, reprehenderit alias maiores
          possimus saepe explicabo voluptates itaque? Sunt dolore et, ex porro
          minima ratione quibusdam obcaecati dicta! Nihil alias perferendis
          cumque, ea dignissimos eos eligendi necessitatibus tempore, illum
          delectus adipisci quibusdam minima temporibus rem dolorum culpa.
          Repudiandae explicabo ab nostrum modi nemo ad commodi quaerat, at
          delectus. Doloribus obcaecati provident at eius ullam exercitationem
          quia quo nihil assumenda incidunt. Sed dolorum totam tempora delectus
          commodi incidunt, autem corporis, in, fugit consequuntur vitae cum
          facilis magni reiciendis ut. Numquam, at quo ipsam eos magnam optio.
          Quam, commodi. Ab quisquam facere, nisi debitis amet nihil
          voluptatibus accusamus quis aspernatur minima iusto inventore, magni
          quibusdam odio exercitationem quam dignissimos beatae! Laborum
          doloribus blanditiis ipsam omnis quo pariatur, in animi ab corporis
          sequi, dolore recusandae modi, iusto porro? Aut commodi aspernatur
          mollitia error suscipit dicta libero, cupiditate impedit unde, ab
          itaque? Dicta recusandae cumque dolores fugiat hic iusto odit itaque
          ab, reprehenderit culpa vel minima a perferendis, blanditiis nobis
          nemo, quisquam incidunt facilis aut voluptatibus aliquam quis.
          Voluptas consequatur quibusdam iusto. Ipsa ullam nisi et sit? Hic,
          eum. Reprehenderit quis sint illo nobis cum, veniam numquam,
          asperiores fugit ipsum perspiciatis nostrum corrupti. Id dolorum
          ipsam, suscipit animi odio eligendi quos ut! Animi, quia distinctio!
          Corporis odio sapiente tempora iusto vitae aut quod nihil deleniti
          porro unde, placeat eos, eligendi possimus totam adipisci. Alias
          blanditiis pariatur sequi quo quibusdam facilis cupiditate cumque!
          Doloribus quam iure, inventore earum sunt laboriosam sed quis, labore
          tempore dolor quos sequi? Eligendi amet voluptate qui quasi aliquid?
          Voluptatibus labore reiciendis qui similique sapiente iure doloremque
          tenetur repellendus. Autem minima quod totam error officiis, aliquid
          veritatis dolore molestias hic! Sed doloribus libero qui commodi, ut
          quas enim similique at reiciendis voluptatem perferendis incidunt
          quaerat eveniet iste magnam aliquam. Voluptas repellat, dolorem ipsum
          ex recusandae dignissimos corporis rerum quaerat cum minima eius
          optio. Laboriosam hic in omnis, voluptatem expedita illo alias
          excepturi ut veniam ab amet vero unde culpa.
        </p>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat
          delectus voluptatum id, vero numquam repellat atque alias adipisci sed
          esse quod iure perferendis sit aliquam nulla ex molestias quia
          officiis. Dicta inventore deserunt quo perferendis optio obcaecati
          mollitia provident officia adipisci fugit, reprehenderit alias maiores
          possimus saepe explicabo voluptates itaque? Sunt dolore et, ex porro
          minima ratione quibusdam obcaecati dicta! Nihil alias perferendis
          cumque, ea dignissimos eos eligendi necessitatibus tempore, illum
          delectus adipisci quibusdam minima temporibus rem dolorum culpa.
          Repudiandae explicabo ab nostrum modi nemo ad commodi quaerat, at
          delectus. Doloribus obcaecati provident at eius ullam exercitationem
          quia quo nihil assumenda incidunt. Sed dolorum totam tempora delectus
          commodi incidunt, autem corporis, in, fugit consequuntur vitae cum
          facilis magni reiciendis ut. Numquam, at quo ipsam eos magnam optio.
          Quam, commodi. Ab quisquam facere, nisi debitis amet nihil
          voluptatibus accusamus quis aspernatur minima iusto inventore, magni
          quibusdam odio exercitationem quam dignissimos beatae! Laborum
          doloribus blanditiis ipsam omnis quo pariatur, in animi ab corporis
          sequi, dolore recusandae modi, iusto porro? Aut commodi aspernatur
          mollitia error suscipit dicta libero, cupiditate impedit unde, ab
          itaque? Dicta recusandae cumque dolores fugiat hic iusto odit itaque
          ab, reprehenderit culpa vel minima a perferendis, blanditiis nobis
          nemo, quisquam incidunt facilis aut voluptatibus aliquam quis.
          Voluptas consequatur quibusdam iusto. Ipsa ullam nisi et sit? Hic,
          eum. Reprehenderit quis sint illo nobis cum, veniam numquam,
          asperiores fugit ipsum perspiciatis nostrum corrupti. Id dolorum
          ipsam, suscipit animi odio eligendi quos ut! Animi, quia distinctio!
          Corporis odio sapiente tempora iusto vitae aut quod nihil deleniti
          porro unde, placeat eos, eligendi possimus totam adipisci. Alias
          blanditiis pariatur sequi quo quibusdam facilis cupiditate cumque!
          Doloribus quam iure, inventore earum sunt laboriosam sed quis, labore
          tempore dolor quos sequi? Eligendi amet voluptate qui quasi aliquid?
          Voluptatibus labore reiciendis qui similique sapiente iure doloremque
          tenetur repellendus. Autem minima quod totam error officiis, aliquid
          veritatis dolore molestias hic! Sed doloribus libero qui commodi, ut
          quas enim similique at reiciendis voluptatem perferendis incidunt
          quaerat eveniet iste magnam aliquam. Voluptas repellat, dolorem ipsum
          ex recusandae dignissimos corporis rerum quaerat cum minima eius
          optio. Laboriosam hic in omnis, voluptatem expedita illo alias
          excepturi ut veniam ab amet vero unde culpa.
        </p>
      </main>
      <Footer />
    </div>
  );
}

export default domotique;
