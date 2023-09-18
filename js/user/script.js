const navbarAddFavorite = () => {
  const favoriteMenu = document.querySelector("[data-favorite] span");
  favoriteMenu.textContent++;
};

const navbarRemoveFavorite = () => {
  const favoriteMenu = document.querySelector("[data-favorite] span");

  if (favoriteMenu.textContent > 0) {
    favoriteMenu.textContent--;
  }
};

const navbarLoadFavorites = () => {
  const favoriteMenu = document.querySelector("[data-favorite] span");
  const favorites = getFavorites();

  favoriteMenu.textContent = favorites.length;
};

window.addEventListener("load", navbarLoadFavorites);
