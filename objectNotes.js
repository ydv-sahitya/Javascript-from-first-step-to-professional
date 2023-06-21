/// object
const js = {
    name : "javascript",
    abbrevisation: "js",
    isAwesome: true,
    officialSpec: "ECMAScript",
    birthYear: 1995,
    creator: "Brendan Eich"    
}

js.name
js.isAwesome


// setting property vlaues

const indecisive = {
    lunch : "sandwich"
};

indecisive.lunch = "tacos";
indecisive.snack = "chips";


// object are mutable. 

const sahi = {
    name: "sahi",
    home: "kanpur",
    languages: ["English","German", "Hindi"],
    pet: null,
    vechicle: "Vespa",
    hobbies: ["travel","climbing","gaming", "lindy hop"]   
}


// Nested objects

const menu = {
    lunch: {
        appetizer: "salad",
        main: "spaghetti",
        dessert: "tiramisu"
    },
    dinner: {
        apptizer: "samosa",
        main : "saag panner",
        dessert: "gulab jamun"
    }
};
const triamisu = menu.lunch.dessert;


// obejct in Arrays & Objects

const spices = [
    {name: "Emma", nickname: "baby"},
    {name: "Geri", nickname: "Ginger"},
    {name: "Mel B", nickname: "Scary"},
    {name: "Mel C", nickname: "sporty"},
    {name: "Vectoria", nickname: "posh"}
];

const spiceGirls = {
    albums: ["spice", "Spiceworld", "forever"],
    motto: "girl Power",
    members: spices
};



