const baseComponent = {
    'Eye Of Newt': ['Toe Of Frog',`Billing's Root`, 'Bloodroot', 'Henbane', 'Mandrake Root', 'Toadflax', 'Plimpy Eye', 'Squill Bulb', 'Rosehips', `Silverfish Wing`],

    'Toe Of Frog': [`Blind Adder's Sting`, 'Beetle Toe', 'Datura', 'Hemlock', 'Ragged Robin', 'Yarrow Root', 'Poppyhead', 'Powdered Staghorn', 'Vervain', 'Ganglionide'],

    'Wool Of Bat':['Eye Of Newt','Cockleberries', 'Blood Meal', 'Nightshade', 'Snake Peel', 'Gurdyroot', 'Flitterbloom', 'Stargrass', 'Shrivelfig', 'Spleenwart'],

    'Blind Adders Sting': ['Wool Of Bat', 'Wyrmswood', 'Comfrey Root', 'Jimsonweed', 'Nux Oil', 'Ground Arnica', 'Honeywater', 'Lavendaeira', 'Moondew', 'White Sprite']
}

/*----------------Function to get all ingredients into one array.---------------------------------*/

const tempIngredientsArray = Object.values(baseComponent);
const allIngredientsFunction = () => tempIngredientsArray.flat();
const allIngredients = allIngredientsFunction();

export default {
    baseComponent,
    allIngredients
}