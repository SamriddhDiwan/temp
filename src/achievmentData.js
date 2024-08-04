const achievementsPerYear = [
    {
        year: 2024,
        achievements:[
        {
        title: "Lorem ipsum dolor sit amet consectetur.",
        imageLink: "",
        description: "Lorem ipsum dolor sit amet consectetur. Massa quis aliquet cras est in. Consectetur pharetra dis pharetra congue commodo. Blandit massa et arcu eget. Praesent faucibus scelerisque consectetur varius amet vestibulum adipiscing integer tellus. Augue mauris quis amet tincidunt odio in tincidunt odio porta. Tortor nisi sit vestibulum."
    },
    {
        title: "Lorem ipsum dolor sit amet consectetur.",
        imageLink: "",
        description: "Lorem ipsum dolor sit amet consectetur. Massa quis aliquet cras est in. Consectetur pharetra dis pharetra congue commodo. Blandit massa et arcu eget. Praesent faucibus scelerisque consectetur varius amet vestibulum adipiscing integer tellus. Augue mauris quis amet tincidunt odio in tincidunt odio porta. Tortor nisi sit vestibulum."
    },
    {
        title: "Lorem ipsum dolor sit amet consectetur.",
        imageLink: "",
        description: "Lorem ipsum dolor sit amet consectetur. Massa quis aliquet cras est in. Consectetur pharetra dis pharetra congue commodo. Blandit massa et arcu eget. Praesent faucibus scelerisque consectetur varius amet vestibulum adipiscing integer tellus. Augue mauris quis amet tincidunt odio in tincidunt odio porta. Tortor nisi sit vestibulum."
    },
    {
        title: "Lorem ipsum dolor sit amet consectetur.",
        imageLink: "",
        description: "Lorem ipsum dolor sit amet consectetur. Massa quis aliquet cras est in. Consectetur pharetra dis pharetra congue commodo. Blandit massa et arcu eget. Praesent faucibus scelerisque consectetur varius amet vestibulum adipiscing integer tellus. Augue mauris quis amet tincidunt odio in tincidunt odio porta. Tortor nisi sit vestibulum."
    }
    ]},
    {
        year: 2023,
        achievements:[
        {
        title: "Lorem ipsum dolor sit amet consectetur.",
        imageLink: "",
        description: "Lorem ipsum dolor sit amet consectetur. Massa quis aliquet cras est in. Consectetur pharetra dis pharetra congue commodo. Blandit massa et arcu eget. Praesent faucibus scelerisque consectetur varius amet vestibulum adipiscing integer tellus. Augue mauris quis amet tincidunt odio in tincidunt odio porta. Tortor nisi sit vestibulum."
    },
    {
        title: "Lorem ipsum dolor sit amet consectetur.",
        imageLink: "",
        description: "Lorem ipsum dolor sit amet consectetur. Massa quis aliquet cras est in. Consectetur pharetra dis pharetra congue commodo. Blandit massa et arcu eget. Praesent faucibus scelerisque consectetur varius amet vestibulum adipiscing integer tellus. Augue mauris quis amet tincidunt odio in tincidunt odio porta. Tortor nisi sit vestibulum."
    },
    {
        title: "Lorem ipsum dolor sit amet consectetur.",
        imageLink: "",
        description: "Lorem ipsum dolor sit amet consectetur. Massa quis aliquet cras est in. Consectetur pharetra dis pharetra congue commodo. Blandit massa et arcu eget. Praesent faucibus scelerisque consectetur varius amet vestibulum adipiscing integer tellus. Augue mauris quis amet tincidunt odio in tincidunt odio porta. Tortor nisi sit vestibulum."
    },
    {
        title: "Lorem ipsum dolor sit amet consectetur.",
        imageLink: "",
        description: "Lorem ipsum dolor sit amet consectetur. Massa quis aliquet cras est in. Consectetur pharetra dis pharetra congue commodo. Blandit massa et arcu eget. Praesent faucibus scelerisque consectetur varius amet vestibulum adipiscing integer tellus. Augue mauris quis amet tincidunt odio in tincidunt odio porta. Tortor nisi sit vestibulum."
    }
    ]}
];
for(var i=0;i<achievementsPerYear.length;i++){
    var flag=false;
    for(var j=0;j<achievementsPerYear[i].achievements.length;j++){
        achievementsPerYear[i].achievements[j].reverseLayout=flag;
        flag=!flag;
    }
}
export default achievementsPerYear;
