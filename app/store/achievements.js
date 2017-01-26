//TODO: put this file in a place that makes more sense

export default function achievements() {

  var achievements = [
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

    {
      name: "Test Achievement",
      description: "Check in at 10 hookah bars and 2 coffee places",
      searchTerms: [
        {
          searchTerm: "hookah",
          threshold: 10,
          progress: 0,
        },
        {
          searchTerm: "coffee",
          threshold: 2,
          progress: 0,
        }
      ],
      searchTermStrings: ["hookah", "coffee"],
      earned: false,
      progress: 0,
      threshold: 12,
      type: "differently weighted terms",
    },

  ];

  return achievements;

}
