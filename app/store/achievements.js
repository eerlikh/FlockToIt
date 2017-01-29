//TODO: eventually redo most of the achievements here, the discriptions vs the actual behavior is all fucked up and wrong thanks to alex not understand how programming works the fucking ignorant fuck
//TODO: put this file in a place that makes more sense

export default function achievements() {

  var achievements = [
    {
      name: "Renaissance Master",
      url: "../img/achievements/eiffel-tower.png",
      description: "Check in at 100 Galleries",
      searchTerms: ["artmuseum", "museum", "gallery", "pottery"],
      searchTermStrings: ["artmuseum", "museum", "gallery", "pottery"],
      earned: false,
      progress: 0,
      threshold: 100,
      type: "single term or multiple equally weighted terms",
    },
    {
      name: "Dripping in Culture",
      url: "../img/achievements/tah-mahal.png",
      description: "Visit 10 different museums",
      searchTerms: ["artmuseum", "museum", "gallery"],
      searchTermStrings: ["artmuseum", "museum", "gallery"],
      earned: false,
      progress: 0,
      threshold: 10,
      type: "single term or multiple equally weighted terms",
    },
    {
      name: "Elite Brew Master",
      url: "../img/achievements/pub.png",
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
    },
    {
      name: "Great Outdoors",
      url: "../img/achievements/outdoors.png",
      description: "Visit 30 parks and 30 lakes",
      searchTerms: ["parks, lakes"],
      searchTermStrings: ["parks, lakes"],
      earned: false,
      progress: 0,
      threshold: 60,
      type: "single term or multiple equally weighted terms",
    },
    {
      name: "Teddy Roosevelt",
      url: "../img/achievements/rushmore.png",
      description: "Visit 10 National Parks",
      searchTerms: ["nationalpark"],
      searchTermStrings: ["nationalpark"],
      earned: false,
      progress: 0,
      threshold: 10,
      type: "single term or multiple equally weighted terms",
    },
    {
      name: "Aquaman",
      url: "../img/achievements/sea-bottom.png",
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
      type: "multiple differently weighted terms",
    },

    {
     name: "Master of Mist",
     url: "../img/achievements/pub.png",
     description: "Check in at 20 hookah bar",
     searchTerms: ["hookah"],
     searchTermStrings: ["hookah"],
     earned: false,
     progress: 0,
     threshold: 20,
     type: "single term or multiple equally weighted terms",
    },

   {
    name: "The 1%",
    url: "../img/achievements/pub.png",
    description: "Check in at 100 Steak houses, and 50 Museums",
    searchTerms: ["steakhouse, museum, artmuseum"],
    searchTermStrings: ["steakhouse, museum, artmuseum"],
    earned: false,
    progress: 0,
    threshold: 150,
    type: "single term or multiple equally weighted terms",
   },

  {
   name: "Crusader King",
   url: "../img/achievements/pub.png",
   description: "Visit 100 Musuems, LandMark, visit Italy, Spain, Turkey, Iseral, Syria, Former HRE",
   searchTerms: ["landmark, museum, artmuseum"],
   searchTermStrings: ["landmark, museum, artmuseum"],
   earned: false,
   progress: 0,
   threshold: 100,
   type: "single term or multiple equally weighted terms",
  },

  {
   name: "Harold and Kumar",
   url: "../img/achievements/pub.png",
   description: "Check in at 50 White Castles",
   searchTerms: ["whitecastle"],
   searchTermStrings: ["whitecastle"],
   earned: false,
   progress: 0,
   threshold: 50,
   type: "single term or multiple equally weighted terms",
  },
  ];


  return achievements;

}
