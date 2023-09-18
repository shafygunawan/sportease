const landingPage = () => {
  const featuredFieldTogglers = document.querySelectorAll(
    ".featured-fields__card-favorite"
  );
  const fieldTogglers = document.querySelectorAll(".fields__card-favorite");
  const favorites = getFavorites();

  featuredFieldTogglers.forEach((toggler) => {
    const id = toggler.dataset.fieldId;

    var index = favorites.indexOf(id);
    if (index !== -1) {
      toggler.classList.add("featured-fields__card-favorite_active");
    } else {
      toggler.classList.remove("featured-fields__card-favorite_active");
    }

    toggler.addEventListener("click", () => {
      if (toggler.classList.contains("featured-fields__card-favorite_active")) {
        toggler.classList.remove("featured-fields__card-favorite_active");
        navbarRemoveFavorite();
        deleteFavorite(id);
        return;
      }

      toggler.classList.add("featured-fields__card-favorite_active");
      navbarAddFavorite();
      addFavorite(id);
    });
  });

  fieldTogglers.forEach((toggler) => {
    const id = toggler.dataset.fieldId;

    var index = favorites.indexOf(id);
    if (index !== -1) {
      toggler.classList.add("fields__card-favorite_active");
    } else {
      toggler.classList.remove("fields__card-favorite_active");
    }

    toggler.addEventListener("click", () => {
      if (toggler.classList.contains("fields__card-favorite_active")) {
        toggler.classList.remove("fields__card-favorite_active");
        navbarRemoveFavorite();
        deleteFavorite(id);
        return;
      }

      toggler.classList.add("fields__card-favorite_active");
      navbarAddFavorite();
      addFavorite(id);
    });
  });

  const filterForm = document.querySelector("form.filter");
  const button = filterForm.querySelector("button");
  const selects = filterForm.querySelectorAll("select");
  const dateInputs = filterForm.querySelectorAll("input[type='date']");

  selects.forEach((select) => {
    select.addEventListener("change", () => {
      button.click();
    });
  });

  dateInputs.forEach((input) => {
    input.addEventListener("input", () => {
      button.click();
    });
  });
};

window.addEventListener("load", landingPage);
