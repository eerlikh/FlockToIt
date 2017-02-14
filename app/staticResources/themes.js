export default function getThemes() {
  return loadStaticImages(themes());
}

function loadStaticImages(themes) {
  for (var theme in themes) {
    themes[theme].staticImageSource = themes[theme].getStaticImageSource();
  }

  return themes;
}

function themes() {

  var themes = {
    test1: {
      name: "test theme 1",
      searchTerms: ["hookah"],
      getStaticImageSource: () => require("../img/themes/notAdventure.png"),
      id: 1,
    },
    test2: {
      name: "test theme 2",
      searchTerms: ["karts"],
      getStaticImageSource: () => require("../img/themes/notAdventure.png"),
      id: 2,
    },
    chill: {
      name: "chill",
      searchTerms: ["hookah", "coffee", "billiards", "cafe", "zoo", "park", "dessert", "lakes", "beaches", "arcade", "gelato", "creperies", "dayspa"],
      getStaticImageSource: () => require("../img/themes/notChill.png"),
      id: 3,
    },
    drink: {
      name: "drink",
      searchTerms: ["bar", "coffee", "tea", "winery", "brewery", "icecream", "lounge", "distillery", "beergarden", "speakeasy"],
      getStaticImageSource: () => require("../img/themes/notDrink.png"),
      id: 4,
    },
    adventure: {
      name: "adventure",
      searchTerms: ["karts", "lakes", "paintball", "campground", "park", "horseback", "racing", "rafting", "archeryrange", "shootingrange", "skydivingcenter"],
      getStaticImageSource: () => require("../img/themes/notAdventure.png"),
      id: 5,
    },
    culture: {
      name: "culture",
      searchTerms: ["museum", "art", "gallery", "theatercompany", "historiclandmark", "zoo", "opera", "performingartstheater", "jazzclub"],
      getStaticImageSource: () => require("../img/themes/notCulture.png"),
      id: 6,
    },
    eat: {
      name: "eat",
      searchTerms: ["cafe", "gastropub", "icecream", "foodtruck", "sushi", "chinese", "indian", "tapas", "steakhouse", "whitecastle"],
      getStaticImageSource: () => require("../img/themes/notEat.png"),
      id: 7,
    },
    mystery: {
      name: "mystery",
      searchTerms: ["circus", "musicvenue", "burlesque", "karts", "shootingrange", "adultentertainment", "bathhouse"],
      getStaticImageSource: () => require("../img/themes/Mystery.png"),
      id: 8,
    },
  };

  return themes;
}

// export const INITIAL_THEME = THEMES.test1;
