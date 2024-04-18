import { getLocation } from "./database.js";

export const locationList = () => {
 
  const locations = getLocation();

  let htmlString = '<article class="location"> <h2>Harvest Locations</h2>';

  for (let location of locations) {

    htmlString += `<section class="location__card">
            <div><img class="location__image image--card" src="${location.image}" /></div>
            <div class="location__name"> ${location.name}</div>
            <div class="location__harvested">Fish Harvested:${location.fishHarvested}</div>

        </section>
`;
  }
  htmlString += `</article>`;

  return htmlString;
};
