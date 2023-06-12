class CustomFooter extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <footer tabindex="0">
    <ul>
      <li class="footer-social">
        <a href="#"><img src="images/heros/facebook.png" alt="Logo" width="20" height="20">
        <p>Nafa Resto</p></a>
        <a href="#"><img src="images/heros/twitter.png" alt="Logo" width="20" height="20">
        <p>nafa_resto</p></a>
        <a href="#"><img src="images/heros/instagram.png" alt="Logo" width="20" height="20">
          <p>Nafa_Resto</p></a>
        <li>© 2023 - Nafa Resto</li>
    </ul>
  </footer>
    `;
  }
}

customElements.define('custom-footer', CustomFooter);
