const database = {
    fish: [
        {   
            image: "https://us.123rf.com/450wm/neirfy/neirfy2311/neirfy231103102/218137278-fishing-trophy-big-freshwater-perch-in-river.jpg?ver=6",
            id: 1,
            name: "Bart",
            species: "bass",
            diet: "crustaceans",
            length: 13,
            location: "Lake Superior"

        },
        {
            image: "https://cdn11.bigcommerce.com/s-kkon4imfg5/images/stencil/1280x1280/products/7625/5642/img_0946__76543.1522386066.jpg?c=2",
            id: 2,
            name: "Gary",
            species: "red gar",
            diet: "crustaceans",
            length: 5.5,
            location: "Econfina River"

        },
        {
            image: "https://media.istockphoto.com/id/1296202540/photo/sunfish-lepomis-gibbosus-in-an-aquarium.jpg?s=612x612&w=0&k=20&c=5fR_u1P9sd4luE3qdYSsTNg3oWqPkiXlkzGfpIpyJYw=",
            id: 3,
            name: "Jerry",
            species: "green sunfish",
            diet: "insects and larvae",
            length: 5,
            location: "Hudson Bay"

        },
        {
            image: "https://media.istockphoto.com/id/1186610501/photo/princess-parrotfish-on-coral-reef.jpg?s=612x612&w=0&k=20&c=uBTJBI_Ja0rsqyFhK945ztq1YRTySLirvrhAWYQysgQ=",
            id: 4,
            name: "Penelope",
            species: "princess parrotfish",
            diet: "algae and coral polyps",
            length: 9,
            location: "Lauderdale-by-the-Sea, Florida"

        },
        {
            image: "https://dodo.ac/np/images/8/86/Bitterling_NH.png",
            id: 5,
            name: "Roger",
            species: "butterling",
            diet: "nvertebrates and plants",
            length: 3,
            location: "Animal Crossing"

        },
        {
            image: "https://images.immediate.co.uk/production/volatile/sites/23/2023/09/Flowerhorn-cichlid--9477c62.jpg?quality=90&lb=620,413&background=white&webp=1&w=1200",
            id: 6,
            name: "Susan",
            species: "Flowerhorn cichlid",
            diet: "insects, crustaceans, and plant matter",
            length: 10,
            location: "The Lab"

        }
    ]
}
export const getFish = () => {
    return database.fish.map(fish => ({...fish}))
}


export const mostHolyFish = () => {
 // 3, 6, 9, 12, etc... fish
 const holyFish = []

 for (let singleFish of database.fish) {
    if (singleFish.length % 3 === 0){
        holyFish.push(singleFish)
    }
 }
 return holyFish
}
 console.log(mostHolyFish())
 
 export const soldierFish = () => {
    // 5, 10, 15, 20, 25, etc... fish
    const soldiers = []

    for (let singleFish of database.fish) {
        if (singleFish.length % 5 === 0){
            soldiers.push(singleFish)
        }
     }
    return soldiers
 }
 console.log(soldierFish())

 export const nonHolyFish = () => {
    // Any fish not a multiple of 3 or 5
    const regularFish = []

    for (let singleFish of database.fish){
        if  (singleFish.length % 3 !== 0 || singleFish.length % 5 !== 0){
            regularFish.push(singleFish)
        }
    }
   return regularFish
}
console.log(nonHolyFish())
