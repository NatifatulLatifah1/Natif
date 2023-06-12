import 'regenerator-runtime';
// css
import '../styles/normalize.css';
import '../styles/root.css';
import '../styles/nav.css';
import '../styles/header.css';
import '../styles/main.css';
import '../styles/footer.css';
import '../styles/responsive.css';
import '../styles/spinner.css';
import '../styles/resto-detail.css';
import '../styles/resto-fav.css';

// js
import App from './views/App';
import swRegister from './utils/sw-register';
import { WebSocketInitiator } from './utils/websocket-initiator';
import CONFIG from './global/config';
// components
import './components/navbar';
import './components/hero';
import './components/custom-footer';

// init App
const app = new App({
  button: document.querySelector('.menu'),
  drawer: document.querySelector('.nav-list'),
  content: document.querySelector('#main-content'),
});

// tambahan
const skipLink = document.querySelector('.skip-link');
const mainContent = document.querySelector('#main-content');

skipLink.addEventListener('click', (event) => {
  event.preventDefault();
  mainContent.scrollIntoView({ behavior: 'smooth' });
  skipLink.blur();
});

window.addEventListener('hashchange', () => {
  document.querySelector('.container').scrollIntoView();
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
  swRegister();
  WebSocketInitiator.init(CONFIG.WEB_SOCKET_SERVER);
});
