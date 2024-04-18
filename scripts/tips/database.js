const database = {
    tips: [
        
            {tipObject: "Ensure all pumps, filters, and lights are working properly"},
            {tipObject: "Observe fish for negative side effects. If any side effects are evident, test the water immediately"},
            {tipObject: "Remove excess food from the tank"},
            {tipObject: "Top off the tank with treated water"},
            {tipObject: "Check the water's temperature"}
        ]
}
export const getTips = () => {
    return database.tips.map(singleTip => ({...singleTip}))
}