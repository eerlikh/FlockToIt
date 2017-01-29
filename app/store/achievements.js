//TODO: eventually redo most of the achievements here, the discriptions vs the actual behavior is all fucked up and wrong thanks to alex not understand how programming works the fucking ignorant fuck
//TODO: put this file in a place that makes more sense

export default function achievements() {

  var achievements = [
    {
      name: "Art Snob",
      description: "Check in at 100 Galleries",
      searchTerms: ["artmuseum", "museum", "gallery", "pottery"],
      searchTermStrings: ["artmuseum", "museum", "gallery", "pottery"],
      earned: false,
      progress: 0,
      threshold: 100,
      type: "single term or multiple equally weighted terms",
    },

    {
      name: "Elite Brew Master",
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
      name: "Dripping in Culture",
      description: "Visit 10 different museums",
      searchTerms: ["artmuseum", "museum", "gallery"],
      searchTermStrings: ["artmuseum", "museum", "gallery"],
      earned: false,
      progress: 0,
      threshold: 10,
      type: "single term or multiple equally weighted terms",
    },

    {
      name: "Great Outdoors",
      description: "Visit a National Park",
      searchTerms: ["nationalpark"],
      searchTermStrings: ["nationalpark"],
      earned: false,
      progress: 0,
      threshold: 1,
      type: "single term or multiple equally weighted terms",
    },

    {
      name: "Teddy Roosevelt",
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
      description: "Vist 50 lakes and 50 Beaches",
      searchTerms: [
        {
          searchTerm: "lake",
          threshold: 50,
          progress: 0,
        },
	      {
          searchTerm: "beach",
          threshold: 50,
          progress: 0,
        },
      ],
      searchTermStrings: ["lake", "beach"],
      earned: false,
      progress: 0,
      threshold: 50,
      type: "multiple differently weighted terms",
    },

    {
     name: "Master of Mist",
     description: "Check in at 1 hookah bar",
     searchTerms: ["hookah"],
     searchTermStrings: ["hookah"],
     earned: false,
     progress: 0,
     threshold: 1,
     type: "single term or multiple equally weighted terms",
   },

  ];


  return achievements;

}
