export const menuCategories = [
  {id:'bbq',name:'BBQ Specials',icon:'🔥',summary:'Tikka, boti and kabab fresh from the grill.',image:'https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?auto=format&fit=crop&w=900&q=85'},
  {id:'rolls',name:'Rolls',icon:'🌯',summary:'Regular, Jumbo, Boom Boom and King rolls.',image:'/images/menu-chicken-rolls.png'},
  {id:'karahi',name:'Karahi',icon:'🥘',summary:'Chicken, boneless and kabab karahi in full and half portions.',image:'/images/hero-pakistani-feast.png'},
  {id:'burgers',name:'Burgers, Fries & Sandwiches',icon:'🍔',summary:'Burgers, crispy broast, fries and sandwiches.',image:'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=900&q=85'},
  {id:'rice',name:'Chinese & Fried Rice',icon:'🍚',summary:'Rice, chowmein, Manchurian and chilli favourites.',image:'https://mirchnspicy.com/wp-content/uploads/2025/11/dry-chilli-chicken-600x425.jpg'},
  {id:'soups',name:'Soups',icon:'🥣',summary:'Vegetable, chicken corn, hot & spicy and mushroom soups.',image:'https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=900&q=85'},
  {id:'combos',name:'Combo Deals',icon:'🍽️',summary:'Complete roll, burger and karahi meals.',image:'https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?auto=format&fit=crop&w=900&q=85'},
  {id:'deals',name:'Special Deals',icon:'✨',summary:'Value deals for one, friends and family.',image:'https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=900&q=85'},
  {id:'drinks',name:'Cold Drinks',icon:'🥤',summary:'Cold drinks, mineral water and energy drinks.',image:'https://images.unsplash.com/photo-1497534446932-c925b458314e?auto=format&fit=crop&w=900&q=85'}
];

const makeItems=(category,desc,rows)=>rows.map(([name,price,custom])=>({name,category,price,desc:custom||desc}));
const groupedItem=(category,name,desc,variants)=>({name,category,desc,variants,price:Math.min(...variants.map(variant=>variant.price))});

const bbq=[...makeItems('bbq','Freshly marinated and grilled over flame.',[
  ['Chicken Tikka (1 pc)',350],
  ['Chicken Golden Boti (Boneless)',440],['Chicken Malai Boti (Boneless)',500],['Chicken Reshmi Kabab',500],
  ['Chicken Gola Kabab',500],['Beef Seekh Kabab',480],['Beef Tikka Boti',460],['Chest Piece',400],['Salad',100]
]),groupedItem('bbq','Chicken Malai Tikka','Creamy malai tikka—choose your piece.',[
  {name:'Leg',price:360,desc:'Malai-marinated chicken leg piece.'},
  {name:'Chest',price:410,desc:'Malai-marinated chicken chest piece.'}
])];

const rollGroup=(name,variants)=>({
  name,category:'rolls',price:Math.min(...variants.map(variant=>variant.price)),
  desc:`Choose from ${variants.length} freshly prepared variants.`,variants
});

const fourRollVariants=(plain,cheese)=>[
  {name:'Plain',price:plain,desc:'Classic roll with signature filling and sauce.'},
  {name:'Cheese',price:cheese,desc:'Finished with melted cheese.'},
  {name:'Cheese + Spicy',price:cheese,desc:'Cheese with an extra spicy kick.'},
  {name:'Garlic',price:plain,desc:'Finished with creamy garlic sauce.'}
];

const rolls=[
  rollGroup('Chicken Regular Roll',fourRollVariants(330,360)),
  rollGroup('Chicken Jumbo Roll',fourRollVariants(410,440)),
  rollGroup('Chicken Boom Boom Roll',fourRollVariants(470,500)),
  rollGroup('Chicken King Roll',fourRollVariants(650,690)),
  rollGroup('Malai Boti Regular Roll',fourRollVariants(340,370)),
  rollGroup('Malai Boti Jumbo Roll',fourRollVariants(420,450)),
  rollGroup('Malai Boti Boom Boom Roll',fourRollVariants(480,510)),
  rollGroup('Malai Boti King Roll',fourRollVariants(660,700)),
  rollGroup('Beef Boom Boom Roll',fourRollVariants(470,500)),
  rollGroup('Beef King Roll',fourRollVariants(650,690))
];

const portionVariants=(full,half)=>[
  {name:'Half',price:half,desc:'Half portion.'},
  {name:'Full',price:full,desc:'Full portion for sharing.'}
];
const karahi=[
  groupedItem('karahi','Achari Karahi','Tangy karahi cooked with aromatic pickle spices.',portionVariants(2000,1050)),
  groupedItem('karahi','Chicken Karahi','Classic chicken karahi with tomato, ginger and green chilli.',portionVariants(1900,1000)),
  groupedItem('karahi','Chicken Karahi White','Creamy white chicken karahi.',portionVariants(2150,1100)),
  groupedItem('karahi','Chicken Karahi Makhni','Rich buttery makhni chicken karahi.',portionVariants(2250,1200)),
  groupedItem('karahi','Chicken Karahi White Makhni','White and makhni flavours in one rich karahi.',portionVariants(2300,1300)),
  ...makeItems('karahi','Prepared for three people.',[['Chicken Ginger (3 Person)',950],['Chicken Jalfrezi (3 Person)',950]]),
  groupedItem('karahi','Chicken Boneless Karahi','Classic boneless chicken karahi.',portionVariants(2150,1225)),
  groupedItem('karahi','Chicken Boneless White','Creamy boneless white karahi.',portionVariants(2400,1250)),
  groupedItem('karahi','Chicken Boneless Achari','Boneless chicken with zesty achari spices.',portionVariants(2300,1350)),
  groupedItem('karahi','Chicken Boneless Makhni','Boneless chicken in buttery makhni gravy.',portionVariants(2400,1350)),
  groupedItem('karahi','Chicken Boneless White Makhni','Premium white makhni boneless karahi.',portionVariants(2400,1350)),
  groupedItem('karahi','Beef Kabab Karahi','Beef kabab cooked in rich karahi masala.',portionVariants(2000,1150)),
  groupedItem('karahi','Chicken Kabab Karahi','Chicken kabab cooked in rich karahi masala.',portionVariants(1900,1000))
];

const burgers=[
  groupedItem('burgers','Chicken Burger','Choose classic or cheese.',[{name:'Classic',price:400,desc:'Chicken burger with signature sauce.'},{name:'Cheese',price:440,desc:'Chicken burger with melted cheese.'}]),
  groupedItem('burgers','Chicken Zinger Burger','Choose classic or cheese.',[{name:'Classic',price:400,desc:'Crispy chicken zinger burger.'},{name:'Cheese',price:440,desc:'Crispy zinger burger with cheese.'}]),
  groupedItem('burgers','Bar B.Q Burger','Choose classic or cheese.',[{name:'Classic',price:400,desc:'Smoky Bar B.Q burger.'},{name:'Cheese',price:440,desc:'Smoky Bar B.Q burger with cheese.'}]),
  ...makeItems('burgers','Served fresh with signature sauces.',[['Beef Burger',400]]),
  {...groupedItem('burgers','Fries','Choose your preferred fries serving.',[
    {name:'Regular',price:350,desc:'Crispy regular fries.'},{name:'Spicy Mayo Regular',price:400,desc:'Regular fries with spicy mayo.'},
    {name:'Large Family Pack',price:450,desc:'Large family pack of fries.'},{name:'Large Mayo',price:500,desc:'Large fries finished with mayo.'}
  ]),image:'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&w=700&q=85'},
  groupedItem('burgers','Chicken Broast','Choose half or full broast.',portionVariants(1500,800)),
  ...makeItems('burgers','Freshly prepared sandwich.',[['Club Sandwich',400],['Chicken Sandwich',450],['B.B.Q Sandwich',450],['Zinger Sandwich',400]])
];

const rice=makeItems('rice','Wok-cooked rice and Chinese-style favourites.',[
  ['B.B.Q Shashlik Rice',600],['Chicken Manchurian Rice',700],['Shashlik Rice',750],['Chicken Egg Fried Rice',550],
  ['Vegetable Rice',450],['Chicken Chilli Rice',850],['Chicken Chilli Dry',450],['Chowmein',450],['Beef Fried Rice',450],
  ['Chicken Masala Rice',600],['Black Pepper Chicken Rice',750],['Chicken Almond with Rice',850],['Plain Rice',350],['Beef Dry Chilli',550]
]);

const soups=[
  groupedItem('soups','Vegetable Soup','Fresh vegetables in a comforting broth.',[{name:'Small',price:250,desc:'Small serving.'},{name:'Large',price:400,desc:'Large serving.'}]),
  groupedItem('soups','Chicken Corn Soup','Chicken and sweet corn in a savoury broth.',portionVariants(400,250)),
  groupedItem('soups','Hot N Spicy Soup','A warm soup with a spicy kick.',portionVariants(400,250)),
  groupedItem('soups','Mushroom Soup','Creamy mushroom soup.',[{name:'Small',price:300,desc:'Small serving.'},{name:'Large',price:700,desc:'Large serving.'}])
];

const combos=makeItems('combos','Complete meal combo at a value price.',[
  ['Roll + Fries + Drink',650],['Burger + Fries + Drink',750],['Chicken Karahi (Half) + 2 Naan + Drink',1300],
  ['Beef Karahi (Half) + 2 Naan + Drink',1400],['Family Deal — 2 Karahi Half + 4 Naan + 1.5L Drink',2800]
]);

const deals=makeItems('deals','Printed Mirch N Spicy special deal.',[
  ['Deal 1',690,'1 Chicken Roll Paratha, 1 Chicken Burger and 1 Drink NR.'],
  ['Deal 2',850,'1 Zinger Burger, 1 Jumbo Roll and 1 Drink NR.'],
  ['Deal 3',870,'1 Club Sandwich, 1 Malai Jumbo Roll and 1 Drink NR.'],
  ['Deal 4',1760,'2 Zinger Burgers, 2 Jumbo Rolls and 1.5L Drink.'],
  ['Deal 5',1760,'5 Chicken Roll Parathas and 1.5L Cold Drink.'],
  ['Deal 6',4000,'2 Zinger Burgers, 2 Jumbo Rolls, Chicken Tikka, Malai Boti, Fried Rice, Kabab plate, Rashmi Kabab, 6 Roti, Fries and 1.5L Cold Drink.'],
  ['Deal 7',2150,'3 Chicken Jumbo Rolls and 1.5L Cold Drink.'],
  ['Deal 8',2450,'5 Boom Boom Rolls and 1.5L Cold Drink.']
]);

const drinks=[
  groupedItem('drinks','Cold Drink','Choose your favourite brand and bottle size.',[
    {name:'Coca-Cola · 250ml',price:120,desc:'Chilled Coca-Cola single-serving bottle.'},
    {name:'Coca-Cola · 500ml',price:130,desc:'Chilled Coca-Cola 500ml bottle.'},
    {name:'Coca-Cola · 1 Liter',price:180,desc:'Chilled Coca-Cola one-liter bottle.'},
    {name:'Coca-Cola · 1.5 Liter',price:230,desc:'Chilled Coca-Cola family-size bottle.'},
    {name:'Pepsi · 250ml',price:120,desc:'Chilled Pepsi single-serving bottle.'},
    {name:'Pepsi · 500ml',price:130,desc:'Chilled Pepsi 500ml bottle.'},
    {name:'Pepsi · 1 Liter',price:180,desc:'Chilled Pepsi one-liter bottle.'},
    {name:'Pepsi · 1.5 Liter',price:230,desc:'Chilled Pepsi family-size bottle.'},
    {name:'Fanta · 250ml',price:120,desc:'Chilled Fanta single-serving bottle.'},
    {name:'Fanta · 500ml',price:130,desc:'Chilled Fanta 500ml bottle.'},
    {name:'Fanta · 1 Liter',price:180,desc:'Chilled Fanta one-liter bottle.'},
    {name:'Fanta · 1.5 Liter',price:230,desc:'Chilled Fanta family-size bottle.'},
    {name:'Mountain Dew · 250ml',price:120,desc:'Chilled Mountain Dew single-serving bottle.'},
    {name:'Mountain Dew · 500ml',price:130,desc:'Chilled Mountain Dew 500ml bottle.'},
    {name:'Mountain Dew · 1 Liter',price:180,desc:'Chilled Mountain Dew one-liter bottle.'},
    {name:'Mountain Dew · 1.5 Liter',price:230,desc:'Chilled Mountain Dew family-size bottle.'},
    {name:'7UP · 250ml',price:120,desc:'Chilled 7UP single-serving bottle.'},
    {name:'7UP · 500ml',price:130,desc:'Chilled 7UP 500ml bottle.'},
    {name:'7UP · 1 Liter',price:180,desc:'Chilled 7UP one-liter bottle.'},
    {name:'7UP · 1.5 Liter',price:230,desc:'Chilled 7UP family-size bottle.'}
  ]),
  groupedItem('drinks','Mineral Water','Choose your bottle size.',[
    {name:'500ml',price:70,desc:'Small mineral water bottle.'},{name:'1.5 Liter',price:130,desc:'Large mineral water bottle.'}
  ]),
  ...makeItems('drinks','Chilled energy drink.',[['Red Bull',550],['Sting 500ml',130]])
];

export const fullMenu=[...bbq,...rolls,...karahi,...burgers,...rice,...soups,...combos,...deals,...drinks];

const dishImages = {
  rolls: '/images/menu-chicken-rolls.png',
  karahi: '/images/hero-pakistani-feast.png',
  bbq: 'https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?auto=format&fit=crop&w=900&q=85',
  burger: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=900&q=85',
  fries: 'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&w=900&q=85',
  sandwich: 'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=900&q=85',
  broast: 'https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?auto=format&fit=crop&w=900&q=85',
  rice: 'https://images.unsplash.com/photo-1603133872878-684f208fb84b?auto=format&fit=crop&w=900&q=85',
  noodles: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=900&q=85',
  soup: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=900&q=85',
  salad: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=900&q=85',
  drink: 'https://images.unsplash.com/photo-1544145945-f90425340c7e?auto=format&fit=crop&w=900&q=85',
  water: 'https://images.unsplash.com/photo-1548839140-29a749e1cf4d?auto=format&fit=crop&w=900&q=85',
  deal: 'https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?auto=format&fit=crop&w=900&q=85'
};

export function getMenuItemImage(item){
  if(item.image) return item.image;
  const name=item.name.toLowerCase();
  if(name.includes('roll')) return dishImages.rolls;
  if(name.includes('karahi')||name.includes('jalfrezi')||name.includes('ginger')) return dishImages.karahi;
  if(name.includes('fries')) return dishImages.fries;
  if(name.includes('sandwich')) return dishImages.sandwich;
  if(name.includes('broast')) return dishImages.broast;
  if(name.includes('burger')) return dishImages.burger;
  if(name.includes('chowmein')) return dishImages.noodles;
  if(name.includes('rice')||name.includes('manchurian')||name.includes('chilli')||name.includes('almond')) return dishImages.rice;
  if(name.includes('soup')) return dishImages.soup;
  if(name.includes('salad')) return dishImages.salad;
  if(name.includes('water')) return dishImages.water;
  if(name.includes('drink')||name.includes('red bull')||name.includes('sting')) return dishImages.drink;
  if(item.category==='deals'||item.category==='combos') return dishImages.deal;
  if(item.category==='bbq') return dishImages.bbq;
  return menuCategories.find(category=>category.id===item.category)?.image||'/logo.svg';
}
