//Sam Goldberg
//11/11/26
//Week 4 - Pet Search

//In order to use the photos I put into the assets folder, I must import them first
import buddy from '/assets/Buddy.jpg';
import carlos from '/assets/Carlos.jpg';
import mittens from '/assets/Mittens.jpg';
import musha from '/assets/Musha.jpg';
import tim from '/assets/Tim.jpeg';
import mizzy from '/assets/Mizzy.jpg';

//The JSON list of pets to use in the pet search dashboard. When creating lists of data, like photos, 
//to be used in a web page in React, it's good practice to use an ID for identification and ordinal 
//purposes
export const pets = [
  {
    id: 1,
    name: "Buddy",
    animal: "Dog",
    specialty: "Great at retrieving toys",
    imgurl: buddy,
  },

  {
    id: 2,
    name: "Carlos",
    animal: "Dog",
    specialty: "Hides his bowl in the best spots",
    imgurl: carlos,
  },
  {
    id: 3,
    name: "Mittens",
    animal: "Cat",
    specialty: "Loves to nap on the couch",
    imgurl: mittens,
  },
  {
    id: 4,
    name: "Musha",
    animal: "Cat",
    specialty: "Scratches everything",
    imgurl: musha,
  },
  {
    id: 5,
    name: "Tim",
    animal: "Guinea Pig",
    specialty: "Eats all the food",
    imgurl: tim,
  },
  {
    id: 6,
    name: "Mizzy",
    animal: "Bird",
    specialty: "Hits the window EXACTLY at 12:00 PM",
    imgurl: mizzy,
  },
];
