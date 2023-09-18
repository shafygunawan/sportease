const FAVORITES_KEY = "favorites";

const addFavorite = (id) => {
  const favorites = getFavorites();
  favorites.push(id);

  const favoritesJson = JSON.stringify(favorites);
  localStorage.setItem(FAVORITES_KEY, favoritesJson);
};

const getFavorites = () => {
  let favorites = localStorage.getItem(FAVORITES_KEY);
  if (favorites) {
    return JSON.parse(favorites);
  } else {
    return [];
  }
};

const deleteFavorite = (id) => {
  const favorites = getFavorites();

  var idIndex = favorites.indexOf(id);
  if (idIndex !== -1) {
    favorites.splice(idIndex, 1);
  }

  const favoritesJson = JSON.stringify(favorites);
  localStorage.setItem(FAVORITES_KEY, favoritesJson);
};

const animateOnScroll = () => {
  const elements = document.querySelectorAll("[data-animated]");

  elements.forEach((element) => {
    const boundingRect = element.getBoundingClientRect();
    const windowHeight = window.innerHeight;

    if (boundingRect.top <= windowHeight * 0.75) {
      element.style.opacity = 1;
      element.style.transform = "translateY(0)";
    } else if (boundingRect.top >= windowHeight) {
      element.style.opacity = 0;
      element.style.transform = "translateY(50px)";
    }
  });
};

window.addEventListener("scroll", animateOnScroll);
animateOnScroll();
