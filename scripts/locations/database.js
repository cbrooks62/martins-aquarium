const database = {
    locations: [
        {   
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTh2nWlH0pHgPC0P73a-IxEq1s0jDQNsQcvm7dZQzOYQ&s",
            id: 1,
            name: "Lake Superior",
            fishHarvested: "Bart",
            
        },
        {   
            image: "https://assets.simpleviewinc.com/simpleview/image/upload/c_limit,q_75,w_1200/v1/crm/visitflorida/50760_3eeul20k9yzf939ihzoxfk74wuhha0va_95feb5eb-5056-a36a-0bb11d6299e150ee.jpg",
            id: 2,
            name: "Econfina River",
            fishHarvested: "Gary",
            
        },
        {   
            image: "https://www.sailmagazine.com/.image/t_share/MTY0MjY4ODM3MzE3OTEyNTIz/2003.jpg",
            id: 3,
            name: "Hudson Bay",
            fishHarvested: "Jerry",
            
        },
        {   
            image: "https://assets.simpleviewinc.com/simpleview/image/upload/c_limit,h_1200,q_75,w_1200/v1/clients/ftlauderdale/20200516_0662_AJRPCO_LBTS_v3_new_d6367089-a696-4429-9edc-8a5dfe6e2549.png",
            id: 4,
            name: "Lauderdale-by-the-Sea, Florida",
            fishHarvested: "Penelope",
            
        },
        {   
            image: "https://newhorizonshq.com/images/catch/catch_bitterling.jpg",
            id: 5,
            name: "Animal Crossing",
            fishHarvested: "Roger",
        },
        {   
            image: "https://fishbio.com/wp-content/uploads/2022/01/4.-Fish-Lab-Sub-Page-Header-Photo.jpeg",
            id: 5,
            name: "The Lab",
            fishHarvested: "Susan",
        },
    ]
}

export const getLocation = () => {
    return database.locations.map(location => ({...location}))
}