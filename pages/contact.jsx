// Librairies
import Head from 'next/head';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
//sytles
import styles from './contact.module.css';

export default function Contact() {
  // Variables
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  // States
  const [isLoading, setIsLoading] = useState(false);
  const [isSended, setIsSended] = useState(false);

  // Méthode
  const onSubmitHandler = async (data) => {
    if (!isLoading) {
      setIsLoading(true);

      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      setIsLoading(false);

      if (!response.ok) {
        console.log('error');
      } else {
        console.log('ok');
        reset();
        setIsSended(true);
      }
    }
  };

  return (
    <>
      <Head>
        <title>Contact | Nous joindre</title>
      </Head>
      <div className={styles.formContainer}>
        <h1>Contact</h1>

        {/* Formulaire */}
        <form
          className={styles.formulaire}
          onSubmit={handleSubmit(onSubmitHandler)}
        >
          {isSended && (
            <p>
              Votre message a bien été envoyé avec succès nous vous répondrons
              rapidement.
            </p>
          )}
          <div>
            <div className={styles.names}>
              <div>
                <label htmlFor="prenom">Prénom</label>
                <input
                  className="input"
                  placeholder="Prénom"
                  id="prenom"
                  {...register('prenom', {
                    required: true,
                  })}
                />
                {errors.prenom && (
                  <small>Vous devez renseigner votre prénom.</small>
                )}
              </div>
              <div>
                <label htmlFor="nom">Nom</label>
                <input
                  className="input"
                  placeholder="Nom"
                  id="nom"
                  {...register('nom', {
                    required: true,
                  })}
                />
                {errors.nom && <small>Vous devez renseigner votre nom.</small>}
              </div>
            </div>
            <div>
              <label htmlFor="email">Adresse email</label>
              <input
                className="input"
                placeholder="Adresse email"
                id="email"
                {...register('email', {
                  required: true,
                })}
              />
              {errors.email && (
                <small>Vous devez renseigner votre adresse email.</small>
              )}
            </div>
          </div>

          <div className={styles.text}>
            <div>
              <label htmlFor="contenu">Contenu du message</label>
              <textarea
                className="input"
                rows="9"
                placeholder="Bonjour..."
                {...register('contenu', {
                  required: true,
                })}
              ></textarea>
              {errors.contenu && (
                <small>
                  Vous devez renseigner le contenu de votre message.
                </small>
              )}
            </div>
          </div>
          {/* prevent multi-send */}
          <div className={styles.button}>
            {!isLoading && <button>Envoyer</button>}
          </div>
        </form>
      </div>
    </>
  );
}
