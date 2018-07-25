import React from 'react';
import Helmet from 'react-helmet';

const Contact = () => (
  <div className="container">
    <Helmet
			title="Contato | VMarquesDev.com.br"
			meta={[
				{ name: 'description', content: 'Entre em contato!' },
			]}
		/>
		<header className="page__header">
			<h1 className="page__title">Contato</h1>
		</header>

		<div className="page__content page__content--contact container--narrow">
      {/* <h3>Está próximo a Bangkok?<br/> Vamos marcar uma conversa.</h3> */}
			<h3>Vamos marcar uma conversa!</h3>

      <p>Entre em contato comigo e vamos discutir a respeito de algum projeto! A melhor maneira para entrar em conato comigo é através do meu WhatsApp <a href="https://api.whatsapp.com/send?phone=5511944544344" target="_blank">+55 (11) 94454 - 4344</a>. Se preferir você pode me enviar um email:</p>
      <a href="mailto:vmarquesdev@gmail.com" className="contact__link">
				vmarquesdev@gmail.com
			</a>
		</div>
  </div>
);

export default Contact;
