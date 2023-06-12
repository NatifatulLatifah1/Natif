import FavRestoIdb from '../../data/resto-idb';
import restoCard from '../templates/resto-card';

const Favorite = {
  async render() {
    return `
      <div class="container">
        <h2 class="title-container">Restoran Favorit</h2>

        <section id="fav-resto"></section>
      </div>
    `;
  },

  async afterRender() {
    // get fav resto
    const data = await FavRestoIdb.getAllResto();

    const favRestoContainer = document.querySelector('#fav-resto');

    // if data empty
    if (data.length === 0) {
      favRestoContainer.innerHTML = `
        Resto Favorit mu masih kosong!
      `;
    }

    // display all fav resto
    data.forEach((resto) => {
      favRestoContainer.innerHTML += restoCard(resto);
    });
  },
};

export default Favorite;
