
import { getFish } from './fish/database.js'
import { FishList } from './fish/fishList.js'

/*
    What is the CSS selector for the element where you
    want to display the fish?

    Use . for elements with a "class" attribute
    Use # for elements with an "id" attribute
 */
    const parentHTMLElement = document.querySelector(".allTheFish")


    parentHTMLElement.innerHTML = FishList()

const allFish = getFish()

for (const fish of allFish) {
    console.log(fish)
}


import { getLocation } from './locations/database.js'
import { locationList } from './locations/locations.js'

    const locationHTMLElement = document.querySelector(".harvestedLocation")


    locationHTMLElement.innerHTML = locationList()

const allLocations = getLocation()

for (const location of allLocations) {
    console.log(location)
}


import { getTips } from './tips/database.js'
import { tipList } from './tips/tipList.js'

    const tipsHTMLElement = document.querySelector(".allTheTips")


    tipsHTMLElement.innerHTML = tipList()

const allTips = getTips()

for (const tip of allTips) {
    console.log(tip)
}