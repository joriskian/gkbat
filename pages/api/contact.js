// Librairie
import sgMail from '@sendgrid/mail';

export default function handler(req, res) {
  if (req.method !== 'POST') {
    res.status(405).json({ message: 'INVALID_METHOD' });
    return;
  }

  // Variables
  const { prenom, nom, tel, email, contenu } = req.body;

  if (!prenom || !nom || !email || !contenu) {
    res.status(400).json({ message: 'INVALID_PARAMETER' });
    return;
  }

  // Syntaxe adresse email
  const pattern =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (!pattern.test(email)) {
    res.status(400).send({
      message: 'EMAIL_SYNTAX_INCORRECT',
    });
    return;
  }

  // Transformer les retours à la ligne pour le HTML
  const message = contenu
    .replace(/\n/g, '<br>')
    .replace(/\r/g, '<br>')
    .replace(/\t/g, '<br>')
    .replace(/<(?!br\s*\/?)[^>]+>/g, '');

  // Donner la clé API
  sgMail.setApiKey(process.env.KEY_SENDGRID);

  // Création du message
  const sendGridMail = {
    to: 'name@name.com',
    from: 'name@name.com',
    templateId: 'd-98ac3ceded9745448d3f4522a0f3eb26',
    dynamic_template_data: {
      prenom: prenom,
      nom: nom,
      email: email,
      contenu: message,
    },
  };
  // SendGrid
  (async () => {
    try {
      await sgMail.send(sendGridMail);
      res.status(200).json({
        message: 'EMAIL_SENDED_SUCCESSFULLY',
      });
    } catch {
      res.status(500).json({
        message: 'ERROR_WITH_SENDGRID',
      });
      return;
    }
  })();
}
