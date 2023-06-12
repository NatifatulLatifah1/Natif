import LikeButtonPresenter from '../../src/scripts/utils/like-button-initiator';
import FavRestoIdb from '../../src/scripts/data/resto-idb';

const createLikeButtonPresenterWithResto = async (restaurant) => {
  await LikeButtonPresenter.init({
    likeButtonContainer: document.querySelector('#likeButtonContainer'),
    favRestoIdb: FavRestoIdb,
    data: {
      restaurant,
    },
  });
};

// eslint-disable-next-line import/prefer-default-export
export { createLikeButtonPresenterWithResto };
