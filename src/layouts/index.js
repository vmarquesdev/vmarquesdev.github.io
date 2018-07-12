import React, { Component } from 'react';
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import { NavLink } from 'react-router-dom'
import Helmet from 'react-helmet'

// Import Styles
import '../styles/main.scss'

// Import Images
import favicon from '../images/favicon.ico';
import Logo from '../images/icons/Logo';
import LinkedInIcon from '../images/icons/LinkedInIcon';
import PDFIcon from '../images/icons/PDFIcon';
import GithubIcon from '../images/icons/GithubIcon';
import WhatsAppIcon from '../images/icons/WhatsAppIcon';

export default class Template extends Component {
  static propTypes = {
    children: PropTypes.func,
  };

  constructor(props) {
    super(props);

    this.state = {
      mobileMenuOpen: false,
    };

    this.toggleMobileMenu = this.toggleMobileMenu.bind(this);
    this.closeMobileMenu = this.closeMobileMenu.bind(this);
  }

  toggleMobileMenu() {
    this.setState({
      mobileMenuOpen: !this.state.mobileMenuOpen,
    });
  }

  closeMobileMenu() {
    this.setState({
      mobileMenuOpen: false,
    });
  }

  render() {
    const menuClass = this.state.mobileMenuOpen ? 'active' : '';
    const currentYear = new Date().getFullYear();

    return (
      <div>
        <Helmet
          title="VMarquesdev.com.br"
          meta={[
            {
              name: 'description',
              content:
                'Victor Hugo Marques Full-Stack Developer',
            },
          ]}
        >
          <meta property="og:locale" content="pt-BR" />
          <meta property="og:type" content="website" />
          <meta property="og:site_name" content="VMarquesdev" />
          <meta name="theme-color" content="#EAB75C" />
          <link rel="icon" href={favicon} type="x-icon/image" />
          <link rel="manifest" href="/manifest.json" />
        </Helmet>
        <div className="site">
          <header id="header" className="site-header animated fadeInDown">
            <div className="container">
              <Link to="/" className="site-header__link">
                <Logo className="site-header__logo" />
              </Link>
              <button
                id="mobile-toggle"
                className={`toggle-icon ${menuClass}`}
                aria-label="Mobile menu"
                onClick={this.toggleMobileMenu}
              >
                <span className="screen-reader-text">Menu</span>
                <span className="line line-1" />
                <span className="line line-2" />
                <span className="line line-3" />
              </button>

              <nav id="navigation" className={`site-nav ${menuClass}`}>
                <NavLink
                  to="/projects/"
                  className="site-nav__item"
                  onClick={this.closeMobileMenu}
                >
                  Projetos
                </NavLink>
                {/* <NavLink
                  to="/menu2/"
                  className="site-nav__item"
                  onClick={this.closeMobileMenu}
                >
                  Menu 2
                </NavLink> */}
                <NavLink
                  to="/contact/"
                  className="site-nav__item"
                  onClick={this.closeMobileMenu}
                >
                  Contato
                </NavLink>
              </nav>
            </div>
          </header>

          <main className="site-content">{this.props.children()}</main>

          <footer id="colophon" className="site-footer animated fadeInUp">
            <div className="container flex">
              <div className="site-footer__copyright">
                &copy; {currentYear} VMarquesdev.com.br Made in Brazil.
              </div>

              <div className="site-footer__social">
                <a href="https://www.linkedin.com/in/vmarquesdev/" target="_blank">
                  <LinkedInIcon />
                </a>

                <a href="/VMarquesdev-curriculum.pdf" target="_blank">
                  <PDFIcon />
                </a>

                <a href="https://github.com/vmarquesdev" target="_blank">
                  <GithubIcon />
                </a>

                <a href="https://api.whatsapp.com/send?phone=5511944544344" target="_blank">
                  <WhatsAppIcon />
                </a>
              </div>
            </div>
          </footer>
        </div>
      </div>
    )
  }
}
