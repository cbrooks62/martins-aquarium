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
            length: 8,
            location: "Lauderdale-by-the-Sea, Florida"

        }
    ]
}
export const getFish = () => {
    return database.fish.map(fish => ({...fish}))
}