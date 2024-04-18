import { getTips } from "./database.js";

export const tipList = () => {
  // Invoke the function that you imported from the database module
  const tips = getTips();

  let htmlString = '<article class="tipList"> <h2>Tank tips and Care</h2>';

  for (let tip of tips) {
    // Why is there a backtick used for this string?
    htmlString += `<section class="tip__card">
            <div class="tip__object">${tip.tipObject}</div>
        </section>
`;
  }
  htmlString += `</article>`;

  return htmlString;
};
