// Import the function that returns a copy of the fish array
import { getFish } from "./database.js";

export const FishList = () => {
  // Invoke the function that you imported from the database module
  const fishes = getFish();

  // Start building a string filled with HTML syntax
  let htmlString = '<article class="fishList"> <h2>Fish</h2>';

  // Create HTML representations of each fish here
  for (let fish of fishes) {
    // Why is there a backtick used for this string?
    htmlString += `<section class="fish__card">
          <div><img class="fish__image image--card" src="${fish.image}" /></div>
            <div class="fish__name">${fish.name}</div>
            <div class="fish__species"> Species: ${fish.species}</div>
            <div class="fish__length">Length in inches: ${fish.length}</div>
            <div class="fish__location">Found in: ${fish.location}</div>
            <div class="fish__diet">Diet: ${fish.diet}</div>
        </section>
`;
  }
  htmlString += `</article>`;

  return htmlString;
};
