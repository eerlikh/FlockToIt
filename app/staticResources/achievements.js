//TODO: eventually redo most of the achievements here, the discriptions vs the actual behavior is all fucked up and wrong thanks to alex not understanding how programming works the fucking ignorant fuck
//TODO: make it so that you don't need the "searchTermStrings" property

export default function getAchievements() {
  return loadStaticImages(achievements());
}

function loadStaticImages(achievements) {
  achievements.map(
    (achievement) => {achievement.staticImageSource = achievement.getStaticImageSource();}
  );

  return achievements
}

function achievements() {

  var achievements = [
    {
      name: "Renaissance Master",
      getStaticImageSource: () => require("../img/achievements/eiffel-tower.png"),
      description: "Check in at 100 Galleries",
      searchTerms: ["artmuseum", "museum", "gallery", "pottery"],
      searchTermStrings: ["artmuseum", "museum", "gallery", "pottery"],
      earned: false,
      progress: 0,
      threshold: 100,
      type: "single term or multiple equally weighted terms",
      id: 1,
    },
    {
      name: "Dripping in Culture",
      getStaticImageSource: () => require("../img/achievements/tah-mahal.png"),
      description: "Visit 10 different museums",
      searchTerms: ["artmuseum", "museum", "gallery"],
      searchTermStrings: ["artmuseum", "museum", "gallery"],
      earned: false,
      progress: 0,
      threshold: 10,
      type: "single term or multiple equally weighted terms",
      id: 2,
    },
    {
      name: "Elite Brew Master",
      getStaticImageSource: () => require("../img/achievements/brew-master.png"),
      description: "Check in at 100 bars and 10 breweries",
      searchTerms: [
        {
          searchTerm: "brewery",
          threshold: 10,
          progress: 0,
        },
        {
          searchTerm: "bar",
          threshold: 100,
          progress: 0,
        }
      ],
      searchTermStrings: ["brewery", "bar"],
      earned: false,
      progress: 0,
      threshold: 110,
      type: "differently weighted terms",
      id: 3,
    },
    {
      name: "Great Outdoors",
      getStaticImageSource: () => require("../img/achievements/outdoors.png"),
      description: "Visit 30 parks and 30 lakes",
      searchTerms: [
        {
          searchTerm: "parks",
          threshold: 30,
          progress: 0,
        },
        {
          searchTerm: "lakes",
          threshold: 30,
          progress: 0,
        }
      ],
      searchTermStrings: ["parks, lakes"],
      earned: false,
      progress: 0,
      threshold: 60,
      type: "single term or multiple equally weighted terms",
      id: 4,
    },
    {
      name: "Teddy Roosevelt",
      getStaticImageSource: () => require("../img/achievements/rushmore.png"),
      description: "Visit 10 National Parks",
      searchTerms: ["nationalpark"],
      searchTermStrings: ["nationalpark"],
      earned: false,
      progress: 0,
      threshold: 10,
      type: "single term or multiple equally weighted terms",
      id: 5,
    },
    {
      name: "Aquaman",
      getStaticImageSource: () => require("../img/achievements/sea-bottom.png"),
      description: "Vist 50 lakes and 50 Beaches",
      searchTerms: [
        {
          searchTerm: "lakes",
          threshold: 50,
          progress: 0,
        },
	      {
          searchTerm: "beaches",
          threshold: 50,
          progress: 0,
        },
      ],
      searchTermStrings: ["lakes", "beaches"],
      earned: false,
      progress: 0,
      threshold: 50,
      type: "differently weighted terms",
      id: 6,
    },

    {
     name: "Master of Mist",
     getStaticImageSource: () => require("../img/achievements/mist-master.png"),
     description: "Check in at 20 hookah bar",
     searchTerms: ["hookah"],
     searchTermStrings: ["hookah"],
     earned: false,
     progress: 0,
     threshold: 20,
     type: "single term or multiple equally weighted terms",
     id: 7,
    },

   {
    name: "The 1%",
    getStaticImageSource: () => require("../img/achievements/pub.png"),
    description: "Check in at 100 Steak houses, and 50 Museums",
    searchTerms: ["steakhouse, museum, artmuseum"],
    searchTermStrings: ["steakhouse, museum, artmuseum"],
    earned: false,
    progress: 0,
    threshold: 150,
    type: "single term or multiple equally weighted terms",
    id: 8,
   },

  {
   name: "Crusader King",
   getStaticImageSource: () => require("../img/achievements/pub.png"),
   description: "Visit 100 Musuems, LandMark, visit Italy, Spain, Turkey, Iseral, Syria, Former HRE",
   searchTerms: ["landmark, museum, artmuseum"],
   searchTermStrings: ["landmark, museum, artmuseum"],
   earned: false,
   progress: 0,
   threshold: 100,
   type: "single term or multiple equally weighted terms",
   id: 9,
  },

  {
   name: "Harold and Kumar",
   getStaticImageSource: () => require("../img/achievements/hamburger.png"),
   description: "Check in at 50 White Castles",
   searchTerms: ["whitecastle"],
   searchTermStrings: ["whitecastle"],
   earned: false,
   progress: 0,
   threshold: 50,
   type: "single term or multiple equally weighted terms",
   id: 10,
  },
  {
   name: "Going Retro",
   getStaticImageSource: () => require("../img/achievements/arcade.png"),
   description: "Check in at 25 Arcades",
   searchTerms: ["arcade"],
   searchTermStrings: ["arcade"],
   earned: false,
   progress: 0,
   threshold: 25,
   type: "single term or multiple equally weighted terms",
   id: 11,
  },

  ];

  return achievements;
}
