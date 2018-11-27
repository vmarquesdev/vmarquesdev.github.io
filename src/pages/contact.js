import React from 'react';
import Helmet from 'react-helmet';

const Contact = () => (
  <div className="container">
    <Helmet
			title="Contact | VMarquesdev.github.io"
			meta={[
				{ name: 'description', content: 'Get in touch' },
			]}
		/>
		<header className="page__header">
			<h1 className="page__title">Contact</h1>
		</header>

		<div className="page__content page__content--contact container--narrow">
			<h3>Let’s talk!</h3>

      <p>I am currently available for selective opportunities. If you want to discuss a project or want to find out more about me or my work, get in touch!</p>

      <p>I living in Gold Coast, QLD, Australia, you can contact me by phone<br/> <a href="https://api.whatsapp.com/send?phone=610478734287" target="_blank">+61 (0) 478 734 287</a>, or through my email:</p>

      <a href="mailto:vmarquesdev@gmail.com" className="contact__link">
				vmarquesdev@gmail.com
			</a>
		</div>
  </div>
);

export default Contact;
