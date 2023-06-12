class HeroContent extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <div tabindex="0" class="hero__text">
    <h1 class="hero__title">Nafa Resto</h1>

    <p class="hero__subtitle">
      Resto ternyaman cocok dikunjungi </p>
      <p class="hero__subtitle">
      bersama kerabat dan sahabat
    </p>
  </div>
    `;
  }
}

customElements.define('hero-content', HeroContent);
